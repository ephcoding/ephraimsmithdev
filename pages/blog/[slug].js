import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Footer from '@/components/Footer';
import Head from 'next/head';
import Header from '@/components/Header';
import { NavBtn } from '@/components/NavBtn';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';

export default function BlogPost({
	frontmatter: { title, subtitle, date, author, keywords, description },
	content,
	slug,
}) {
	return (
		<MetaContainer title={title} keywords={keywords} description={description}>
			{/* <Head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='icon' href='/favicon.ico' />
			</Head> */}

			<article id={title} className='flex-fill pt-3'>
				<h1 className='h1'>
					<strong>{title}</strong>
				</h1>
				<h2 className=''>{subtitle}</h2>
				<p className='fs-6'>by {author}</p>
				<p className='text-end'>{date}</p>
				<div className='separator'></div>
				{/* <div className=''> */}
				<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				{/* </div> */}
				<div className='d-flex justify-content-center'>
					<NavBtn route='/' label='home' />
					<NavBtn route='/blog' label='posts' />
				</div>
			</article>

			<Footer />
		</MetaContainer>
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
