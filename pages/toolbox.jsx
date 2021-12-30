import Page from "@/components/Page";
import { PAGES } from "../js/site_data";

export default function Home() {
	const { toolbox } = PAGES;

	return <Page pageInfo={toolbox}></Page>;
}
