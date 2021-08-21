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
			<span>
				{`<< `}
				<Link href='/blog'>go back</Link>
			</span>
			<div id='BlogPostPage' className='post'>
				<div className=''>
					<h1 className='post__title'>{title}</h1>
				</div>
				<div className=''>
					<h2 className='post__subtitle'>{subtitle}</h2>
				</div>
				<div className=''>
					<div className='post__date'>{date}</div>
				</div>
				<div className='post__copy'>
					<div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
				</div>
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
