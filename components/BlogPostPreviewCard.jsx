import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";

export const BlogPostPreviewCard = ({
	blog_post: { slug, frontmatter },
	compact,
}) => {
	return (
		<div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
			{!compact && (
				<Image
					src={frontmatter.cover_image}
					alt='preview card image'
					height={420}
					width={600}
					className='mb-4 rounded'
				/>
			)}
			<div className='flex justify-between items-center'>
				<span className='font-light text-gray-600'>{frontmatter.date}</span>
				<TechTag>{frontmatter.category}</TechTag>
				<ProjectTag>{frontmatter.category}</ProjectTag>
			</div>

			<div className='mt-2'>
				<Link href={`/blog/${slug}`}>
					<a className='text-2xl text-gray-700 font-bold hover:underline'>
						{frontmatter.title}
					</a>
				</Link>
				<p className='mt-2 text-gray-600'>{frontmatter.excerpt}</p>
			</div>

			{!compact && (
				<div className='flex justify-between items-center mt-6'>
					<Link href={`/blog/${slug}`}>
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
