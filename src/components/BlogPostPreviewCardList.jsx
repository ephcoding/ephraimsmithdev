import PropTypes from "prop-types";
import Link from "next/link";
import { TAG_ICON_MAP } from "site-data";

export const BlogPostPreviewCardList = ({ blog_posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
      {blog_posts.length > 0
        ? blog_posts.map((post, index) => (
            <BlogPostPreviewCard key={index} blog_post={post} />
          ))
        : "it's a feature.  not a bu..  alright, it's broken."}
    </div>
  );
};

const BlogPostPreviewCard = ({
  blog_post: {
    blog_post_slug,
    blog_post_meta: { cover_image, title, sub_title, tag, project, date },
  },
}) => {
  const bgColor = TAG_ICON_MAP[tag.toLowerCase()].border_color;
  const tagColor = TAG_ICON_MAP[tag.toLowerCase()].color;
  const TagIcon = TAG_ICON_MAP[tag.toLowerCase()].icon;
  const textColor = TAG_ICON_MAP[tag.toLowerCase()].text_color;

  return (
    // <div className={`relative w-full ${bgColor} overflow-hidden`}>
    <div className="grid grid-cols-2">
      <div className="w-8">
        <TagIcon size={32} color={tagColor} className="drop-shadow-xl" />
      </div>
      <div>
        <Title slug={blog_post_slug} text_color={textColor} title={title} />
        <SubTitle sub_title={sub_title} />
      </div>
    </div>
  );
};

const Title = ({ slug, text_color, title }) => {
  return (
    <Link href={`/${slug}`}>
      <a
        className={`text-2xl ${text_color} block drop-shadow-md font-bold hover:underline uppercase`}
      >
        {title}
      </a>
    </Link>
  );
};
const SubTitle = ({ sub_title }) => {
  return <h2 className="mt-2 text-md">{sub_title}</h2>;
};

BlogPostPreviewCardList.propTypes = {
  blog_posts: PropTypes.arrayOf(PropTypes.object),
};
