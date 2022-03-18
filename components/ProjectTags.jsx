const ProjectTags = ({ cardTags }) => {
  const tags = cardTags.map((tag) => (
    <li className="card__tag" key={tag}>
      {tag}
    </li>
  ));

  return <ul>{tags}</ul>;
};

export default ProjectTags;
