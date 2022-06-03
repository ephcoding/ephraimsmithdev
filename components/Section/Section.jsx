import React from "react";

export const Section = ({ section_data }) => {
	const { styles, heading, content } = section_data;

	return (
		<section className={`${styles} min-h-[50vh]`}>
			<div className='px-4'>
				<h2>{heading}</h2>
				{content}
			</div>
		</section>
	);
};
