import React from "react";

export const Section = ({ id, section_data }) => {
	const { heading, intro, content } = section_data;

	return (
		<section id={id} className={`flex flex-col justify-center min-h-[50vh]`}>
			<div className='p-4'>
				<h2 className='text-4xl font-bold text-center mb-4'>{heading}</h2>
				<p className='text-center mb-4'>{intro}</p>
				<div className='text-sm'>{content}</div>
			</div>
		</section>
	);
};
