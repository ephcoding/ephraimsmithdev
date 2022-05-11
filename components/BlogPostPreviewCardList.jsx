import PropTypes from "prop-types";
import Link from "next/link";
import {
  SiExpo,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

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
  const tagMap = {
    expo: {
      border_color: "bg-[#ffffff]",
      color: "#ffffff",
      text_color: "text-[#ffffff]",
      icon: SiExpo,
    },
    graphql: {
      border_color: "bg-[#E10098]",
      color: "#E10098",
      text_color: "text-[#E10098]",
      icon: SiGraphql,
    },
    javascript: {
      border_color: "bg-[#f7df1e]",
      color: "#f7df1e",
      text_color: "text-[#f7df1e]",
      icon: SiJavascript,
    },
    jest: {
      border_color: "bg-[#cc4615]",
      color: "#cc4615",
      text_color: "text-[#cc4615]",
      icon: SiJest,
    },
    nextjs: {
      border_color: "bg-[#ffffff]",
      color: "#ffffff",
      text_color: "text-[#ffffff]",
      icon: SiNextdotjs,
    },
    nodejs: {
      border_color: "bg-[#66cc33]",
      color: "#66cc33",
      text_color: "text-[#66cc33]",
      icon: SiNodedotjs,
    },
    postgresql: {
      border_color: "bg-[#336791]",
      color: "#336791",
      text_color: "text-[#336791]",
      icon: SiPostgresql,
    },
    react: {
      border_color: "bg-[#61DAFB]",
      color: "#61DAFB",
      text_color: "text-[#61DAFB]",
      icon: SiReact,
    },
    reactnative: {
      border_color: "bg-[#61DAFB]",
      color: "#61DAFB",
      text_color: "text-[#61DAFB]",
      icon: SiReact,
    },
    typescript: {
      border_color: "bg-[#007ACC]",
      color: "#007ACC",
      text_color: "text-[#007ACC]",
      icon: SiTypescript,
    },
  };

  const bgColor = tagMap[tag.toLowerCase()].border_color;
  const tagColor = tagMap[tag.toLowerCase()].color;
  const TagIcon = tagMap[tag.toLowerCase()].icon;
  const textColor = tagMap[tag.toLowerCase()].text_color;

  return (
    <div className={`relative w-full ${bgColor} overflow-hidden`}>
      <div className="bg-gradient-to-br from-black to-transparent m-1 p-4">
        <div className="flex justify-between mb-8">
          <div className="w-2/3">
            <Title slug={blog_post_slug} text_color={textColor} title={title} />
            <SubTitle sub_title={sub_title} />
          </div>
          <div>
            <TagIcon size={60} color={tagColor} className="drop-shadow-xl" />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Date date={date} />
          <ReadBtn slug={blog_post_slug} />
        </div>
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
const Date = ({ date }) => {
  return (
    <div className="md:block font-light text-sm">
      {dayjs(date).format("ll")}
    </div>
  );
};
const ReadBtn = ({ compact, slug }) => {
  return (
    <Link href={`/${slug}`}>
      <a className="text-sm hover:text-stone-800 hover:bg-white focus:bg-white border-2 border-white px-4 py-1 rounded">
        Read
      </a>
    </Link>
  );
};

BlogPostPreviewCardList.propTypes = {
  blog_posts: PropTypes.arrayOf(PropTypes.object),
};
