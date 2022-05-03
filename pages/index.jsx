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
			<IntroSection />
			<SearchBar />
			<h2 className='text-3xl font-bold uppercase'>Latest Articles</h2>
			<LatestArticlesSection articles={articles} />
		</PageWrapper>
	);
}

const IntroSection = () => {
	return (
		<section
			id='intro'
			className='min-w-[250px] w-1/2 text-center mx-auto mb-10'
		>
			This is some intro text. This is some intro text. This is some intro text.
			This is some intro text. This is some intro text. This is some intro text.
			This is some intro text. This is some intro text.
		</section>
	);
};

const SearchBar = () => {
	return (
		<div>
			<input className='block mx-auto' placeholder='search articles..' />
		</div>
	);
};

const LatestArticlesSection = ({ articles }) => {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-5'>
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
