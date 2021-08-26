import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';
import MetaContainer from '@/components/MetaContainer';

export default function BlogPost({
	frontmatter: { title, subtitle, date },
	content,
	slug,
}) {
	return (
		<MetaContainer title={title}>
			<div className='btn_home_row'>
				<div className='btn_home'>
					<Link href='/'>
						<a className='btn_home_link'>&lt; home</a>
					</Link>
				</div>
			</div>
			<article id='BlogPostPage' className='blog-post'>
				<h3 className='blog-post_title'>{title}</h3>
				<h2 className='blog-post_subtitle'>{subtitle}</h2>

				<div className=''>
					<div className='blog-post_date'>{date}</div>
				</div>
				<div className='blog-post_body'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
			</article>
			<div className='archives-btn'>
				<Link href='/archives'>
					<a className='archives-btn_anchor'>archives &gt;</a>
				</Link>
			</div>
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
