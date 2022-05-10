export const TagIconFilterList = ({ icons_OBJ, size }) => {
	return (
		<div className='flex items-center w-3/4 justify-evenly mx-auto my-8'>
			{Object.entries(icons_OBJ).map(([tag, { color, icon: TagIcon }]) => {
				return <TagIcon size={size} color={color} className='inline-block' />;
			})}
		</div>
	);
};
