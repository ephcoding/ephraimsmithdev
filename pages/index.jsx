import fs from "fs";
import path from "path";
import Link from "next/link";
import { PAGE_META } from "../site-data";
import { PageWrapper } from "components";

export default function HomePage({ props }) {
	const { home } = PAGE_META;

	return <PageWrapper pageInfo={home}></PageWrapper>;
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("articles"));

	console.log(">> pages/index.js: getStaticProps() >>", files);

	return {
		props: {},
	};
}
