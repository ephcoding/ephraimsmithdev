const ProjectTech = ({ technologies }) => {
	const tags = technologies.map(tech => (
		<li key={tech} className='bg-slate-500 rounded-md m-1 py-0.5 px-2 text-sm'>
			{tech}
		</li>
	));

	return <ul className='flex flex-wrap'>{tags}</ul>;
};

export default ProjectTech;
