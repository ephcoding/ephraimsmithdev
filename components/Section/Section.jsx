import React from "react";

export const Section = ({ sectionData, children }) => {
  const {heading} = sectionData;

	return (
		<section className={}>
			<h2>{heading}</h2>
			<div>{children}</div>
		</section>
	);
};
