// import fs from "fs";
import path from "path";
import { getArticles } from "../../lib";
import { PAGE_META } from "../../constants";
import { Page, Article } from "../../components";

const Articles = ({ articles }) => {
	const { document } = PAGE_META;

	console.log("articles >>:\n", articles);
	return (
		<Page pageInfo={document}>
			<div className='flex justify-between flex-col md:flex-row'>
				<div className='w-3/4 mr-10'>
					<h1 className='text-5xl border-b-4 p-5 font-bold'>document</h1>

					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
						{articles.map((article, index) => (
							<Article key={index} article={article} />
						))}
					</div>
				</div>
			</div>
		</Page>
	);
};

export default Articles;

// export async function getStaticPaths() {
// 	const files = fs.readdirSync(path.join("articles"));
// 	const paths = files.map((file) => {
// 		return {
// 			params: {
// 				article_slug: file.replace(".md", ""),
// 			},
// 		};
// 	});
// 	return {
// 		paths,
// 		fallback: false,
// 	};
// }

export async function getStaticProps() {
	return {
		props: {
			articles: getArticles(),
		},
	};
}
