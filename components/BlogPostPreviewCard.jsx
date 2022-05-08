import PropTypes from "prop-types";
import Link from "next/link";

export const BlogPostPreviewCard = ({ blog_post, compact }) => {
	return (
		<div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
			{/* {!compact && (
				<Image
					src={blog_post.frontmatter.cover_image}
					alt=''
					height={420}
					width={600}
					className='mb-4 rounded'
				/>
			)} */}
			<div className='flex justify-between items-center'>
				<span className='font-light text-gray-600'>
					{blog_post.frontmatter.date}
				</span>
				<TechTag>{blog_post.frontmatter.category}</TechTag>
				<ProjectTag>{blog_post.frontmatter.category}</ProjectTag>
			</div>

			<div className='mt-2'>
				<Link href={`/blog/${blog_post.slug}`}>
					<a className='text-2xl text-gray-700 font-bold hover:underline'>
						{blog_post.frontmatter.title}
					</a>
				</Link>
				<p className='mt-2 text-gray-600'>{blog_post.frontmatter.excerpt}</p>
			</div>

			{!compact && (
				<div className='flex justify-between items-center mt-6'>
					<Link href={`/blog/${blog_post.slug}`}>
						<a className='text-gray-900 hover:text-blue-600'>Read More</a>
					</Link>
				</div>
			)}
		</div>
	);
};

const ProjectTag = () => {
	return <div></div>;
};
const TechTag = () => {
	return <div></div>;
};

BlogPostPreviewCard.propTypes = {};
