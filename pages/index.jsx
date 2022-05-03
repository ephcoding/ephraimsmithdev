import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { PAGE_META } from "site-data";
import { ArticlePreviewCard, PageWrapper } from "components";
// import { getArticleSlugsAndFrMatOnServer } from "lib";

export default function HomePage({ articles }) {
	const { home } = PAGE_META;

	return (
		<PageWrapper pageInfo={home}>
			<SearchBar />
			<h2 className='text-xl font-bold uppercase my-8'>Latest</h2>
			<LatestArticlesSection articles={articles} />
		</PageWrapper>
	);
}

const SearchBar = () => {
	return (
		<div className='my-4'>
			<input
				id=''
				className='block mx-auto p-2'
				placeholder='search articles..'
			/>
		</div>
	);
};

const TagSelector = () => {
	return <div></div>;
};

const LatestArticlesSection = ({ articles }) => {
	return (
		<div className='space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-5'>
			{articles.map((article) => (
				<ArticlePreviewCard article={article} key={article.slug} />
			))}
		</div>
	);
};

export async function getStaticProps() {
	// const articles = await getArticleSlugsAndFrMatOnServer();

	const files = fs.readdirSync(path.join("articles"));

	const articles = files.map((filename) => {
		const slug = filename.replace(".md", "");

		const markdownFileContent = fs.readFileSync(
			path.join("articles", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownFileContent);

		return { slug, frontmatter };
	});

	return {
		props: { articles },
	};
}
