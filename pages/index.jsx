import Page from "@/components/Page";
import { PAGES } from "../js/site_data";

export default function Home() {
	const { home } = PAGES;

	return <Page pageInfo={home}></Page>;
}
