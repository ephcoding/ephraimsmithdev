import { PageWrapper } from "components";
import Link from "next/link";
import { PAGE_META, TOOLS_LIST } from "site_data";
// import { sortHighLow } from "js/util_funcs";

const Tools = () => {
	const { tools_page_meta: toolspage_meta } = PAGE_META;

	// const sortedTools = TOOLS.sort(({ name }) => sortHighLow(this.name, name));

	const dTools = TOOLS_LIST.map(({ name, url, description }) => (
		<li key={name}>
			<Link href={url}>
				<a target='_blank'>
					<span>{name}</span>
				</a>
			</Link>
			<span>: {description}</span>
		</li>
	));

	return (
		<PageWrapper page_meta={toolspage_meta}>{<ul>{dTools}</ul>}</PageWrapper>
	);
};

export default Tools;
