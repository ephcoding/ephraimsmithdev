// import { getPosts } from "../../js/util_funcs";
import Link from "next/link";
import Page from "@/components/Page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PAGE_INFO } from "../../js/site_data";

export default function Archives({ posts }) {
  const { blog } = PAGE_INFO;

  return (
    <Page pageInfo={blog}>
      <div className="page blog-page">
        <Header />
        <main className="content">
          {/* <h1>
            <span className="blue">Blog</span> Posts
          </h1>
          {posts.map((post, index) => {
            return (
              <div>
                <Link href={`/blog/${post.slug}`} PassHref>
                  <a>
                    <h3 className="blog__post-">
                      {post.frontmatter.leadTitle}
                    </h3>
                  </a>
                </Link>
                <h2>{post.frontmatter.headingTitle}</h2>
              </div>
            );
          })} */}
        </main>
        <Footer />
      </div>
    </Page>
  );
}

// export async function getStaticProps() {
// 	return {
// 		props: {
// 			posts: getPosts(),
// 		},
// 	};
// }
