import Link from "next/link";
import { PAGE_META } from "../site-data";
import { PageWrapper } from "components";

export default function HomePage() {
	const { home } = PAGE_META;

	return <PageWrapper pageInfo={home}></PageWrapper>;
}
