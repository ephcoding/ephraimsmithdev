import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import { generateTagBgColorIcon } from "components/utils";

export const ArticlePreviewCard = ({ article }) => {
	const {
		slug,
		frontmatter: { cover_image, title, sub_title, tag, date },
	} = article;

	const tagAssets = generateTagBgColorIcon(tag);

	// 'relative' class contains bg-img
	return (
		<div
			className={`relative overflow-hidden h-64 shadow-black shadow-xl rounded`}
		>
			<BackgroundImage src={cover_image} />
			<div className='absolute top-0 right-0 bottom-0 left-0 bg-stone-800/80'>
				<TagLabel date={date} tagAssets={tagAssets} tagName={tag} />
				<CardText date={date} slug={slug} subTitle={sub_title} title={title} />
			</div>
		</div>
	);
};

const BackgroundImage = ({ src }) => {
	return (
		<Image
			alt='article preview card background image'
			src={src}
			layout='fill'
			objectFit='cover'
			quality={100}
		/>
	);
};

const TagLabel = ({ date, tagAssets, tagName }) => {
	return (
		<div
			className={`flex items-center justify-between px-5 py-2 bg-gradient-to-r ${tagAssets.bgColor} to-neutral-700 border-b-2 border-white shadow-black shadow-md mb-2`}
		>
			<div className='flex items-center text-base'>
				<tagAssets.tagIcon size={20} color='white' />
				<span className='ml-3'>{tagName}</span>
			</div>
			<p className='text-sm'>{date}</p>
		</div>
	);
};

const CardText = ({ slug, subTitle, title }) => {
	return (
		<div className='p-3'>
			<Link href={`/articles/${slug}`} passHref>
				<a className='block text-xl mb-2 uppercase font-bold' as='h3'>
					{title}
				</a>
			</Link>
			<h2 className='text-sm'>{subTitle}</h2>
		</div>
	);
};

CardText.propTypes = {
	slug: PropTypes.string.isRequired,
	subTitle: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};
