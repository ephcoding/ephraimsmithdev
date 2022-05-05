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
			className={`relative overflow-hidden h-56 shadow-black shadow-xl rounded bg-stone-700`}
		>
			<div
				className={`flex items-center px-5 py-2 bg-gradient-to-l ${tagAssets.bgColor} to-neutral-700 border-bottom-4 border-white shadow-black shadow-md`}
			>
				<tagAssets.tagIcon size={25} color='white' />
				<span>{tag}</span>
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

const TitleText = ({ slug, subTitle, title }) => {
	return (
		<div className='absolute top-0 right-0 bottom-0 left-0 p-4 bg-stone-800/50'>
			<div className='w-3/4'>
				<Link href={`/articles/${slug}`} passHref>
					<a className='text-xl mb-7 uppercase font-bold' as='h3'>
						{title}
					</a>
				</Link>
				<h2 className='text-sm'>{subTitle}</h2>
			</div>
		</div>
	);
};
