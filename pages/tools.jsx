import Page from "@/components/Page";
import { PAGES } from "../js/site_data";

const Tools = () => {
	const { tools } = PAGES;

	return <Page pageInfo={tools}></Page>;
};

export default Tools;
