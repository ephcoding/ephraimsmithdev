export const TagIconFilterList = ({ icons_OBJ, size }) => {
  return (
    <div className="flex flex-wrap items-center mx-auto my-8 space-x-4">
      {Object.entries(icons_OBJ).map(([tag, { color, icon: TagIcon }]) => {
        return (
          <TagIcon
            key={tag}
            size={size}
            color={color}
            className="inline-block"
          />
        );
      })}
    </div>
  );
};
