import Page from "@/components/Page";
import { PAGES } from "../js/site_data";

export default function HomePage() {
	const { home } = PAGES;

	return <Page pageInfo={home}></Page>;
}
