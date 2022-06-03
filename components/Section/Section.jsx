import React from "react";

export const Section = ({ section_data, children }) => {
	const { bg_color, heading, content } = section_data;

	return (
		<section className={`${bg_color} min-h-[50vh]`}>
			<div className='p-4'>
				<h2 className='text-2xl font-bold'>{heading}</h2>
				{children}
			</div>
		</section>
	);
};
