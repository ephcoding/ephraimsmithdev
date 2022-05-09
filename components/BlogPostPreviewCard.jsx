import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  SiJavascript,
  SiJest,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
} from "react-icons/si";

export const BlogPostPreviewCard = ({ blog_post: { slug, frontmatter } }) => {
  const colorMap = {
    javascript: "border-[#f7df1e]",
    jest: "border-[#cc4615]",
    nodejs: "border-[#66cc33]",
    postgresql: "border-[#336791]",
    react: "border-[#61DAFB]",
    reactnative: "border-[#61DAFB]",
    typescript: "border-[#007ACC]",
  };

  const borderColor = colorMap[frontmatter.tag.toLowerCase()];

  return (
    <div
      className={`w-full px-10 py-6 shadow-md shadow-white mt-6 rounded-lg border-t-8 ${borderColor}`}
    >
      <PreviewCardCoverImage
        cover_image={frontmatter.cover_image}
        tag={frontmatter.tag}
      />

      <div className="flex justify-between items-center">
        <span className="font-light">{frontmatter.date}</span>
        <PreviewCardProjectTag>{frontmatter.project}</PreviewCardProjectTag>
      </div>

      <PreviewCardTitles
        title={frontmatter.title}
        excerpt={frontmatter.excerpt}
      />
      <PreviewCardReadButton slug={slug} />
    </div>
  );
};

const PreviewCardCoverImage = ({ cover_image, tag }) => {
  const iconMap = {
    javascript: SiJavascript,
    jest: SiJest,
    nodejs: SiNodedotjs,
    postgresql: SiPostgresql,
    react: SiReact,
    reactnative: SiReact,
    typescript: SiTypescript,
  };

  const colorMap = {
    javascript: "#f7df1e",
    jest: "#cc4615",
    nodejs: "#66cc33",
    postgresql: "#336791",
    react: "#61DAFB",
    reactnative: "#61DAFB",
    typescript: "#007ACC",
  };

  const BgIcon = iconMap[tag.toLowerCase()];
  const iconColor = colorMap[tag.toLowerCase()];

  return (
    <div className={`relative h-32 w-full mb-4`}>
      <Image
        src={cover_image}
        alt="blog post cover image"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className=" mb-4 rounded"
      />
      <div
        className={`absolute flex flex-col items-center justify-center top-0 right-0 bottom-0 left-0 bg-stone-800/80 rounded`}
      >
        <BgIcon size={75} color={iconColor} />
        {/* <p className="mt-3">{tag}</p> */}
      </div>
    </div>
  );
};

const PreviewCardProjectTag = ({ children }) => {
  return (
    <div className="px-2 py-1 text-black bg-stone-400 rounded">{children}</div>
  );
};

const PreviewCardTitles = ({ slug, title, excerpt }) => {
  return (
    <div className="mt-2">
      <Link href={`/blog/${slug}`}>
        <a className="text-2xl font-bold hover:underline">{title}</a>
      </Link>
      <p className="mt-2">{excerpt}</p>
    </div>
  );
};

const PreviewCardReadButton = ({ compact, slug }) => {
  return (
    <div className="mt-6 flex justify-end">
      <Link href={`/blog/${slug}`}>
        <a className="hover:text-blue-600 border-2 border-white px-4 py-2 rounded">
          Read It!
        </a>
      </Link>
    </div>
  );
};

BlogPostPreviewCard.propTypes = {};
