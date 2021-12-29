import Page from "@/components/Page";
import { PAGE_INFO } from "../sitedata/page_info";

export default function HomePage() {
	const { home } = PAGE_INFO;

	return <Page pageInfo={home}></Page>;
}
