import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';

export default function BlogPost({
	frontmatter: { title, subtitle, date },
	content,
	slug,
}) {
	return (
		<div className='blog-post_page'>
			<Head>
				<title>{title}</title>
				{/* <meta name='keywords' content={keywords} /> */}
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />

			<article id='BlogPostPage' className='blog-post'>
				<p className='blog-post_date'>{date}</p>
				<h2 className='blog-post_title'>{title}</h2>
				<h1 className='blog-post_subtitle'>{subtitle}</h1>
				<p className='blog-post_by'>by Ephraim Smith</p>
				<div className='blog-post_line' />

				<div className='blog-post_body'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
			</article>

			<div className='blog-post_nav'>
				<div className='btn_home_row'>
					<div className='btn_home'>
						<Link href='/'>
							<a className='btn_home_link'>&lt; home</a>
						</Link>
					</div>
				</div>
				<div className='btn_archives'>
					<Link href='/archives'>
						<a className='btn_archives_link'>archives &gt;</a>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', slug + '.md'),
		'utf-8'
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	};
}
