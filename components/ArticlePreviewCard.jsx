import Link from "next/link";

export const ArticlePreviewCard = ({ article }) => {
	const {
		slug,
		frontmatter: { cover_image, title, sub_title, tag, date },
	} = article;

	return (
		<div className="relative bg-[url('/bg_mars-glowing.jpg')] bg-center bg-cover h-[250px] shadow-black">
			<div className='p-4 bg-neutral-800/50 h-full'>
				<h3 className='uppercase font-bold'>{title}</h3>
				<h2 className='card_subtitle'>{sub_title}</h2>

				<div className='absolute bottom-0 right-0 overflow-hidden h-48 w-48'>
					<div className='bg-gradient-to-r from-green-300/20 to-green-300/50 h-72 w-72 absolute bottom-0 -right-24 rotate-45 origin-bottom-left'></div>
				</div>
			</div>
		</div>
	);
};
