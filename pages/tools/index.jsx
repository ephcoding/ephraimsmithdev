import Page from "@/components/Page";
import Link from "next/link";
import { TOOLS_LIST, PAGE_META } from "../../site_data";

// import { sortHighLow } from "@/js/util_funcs";

const Tools = () => {
	// const sortedTools = TOOLS.sort(({ name }) => sortHighLow(this.name, name));
	const { tools } = PAGE_META;

	const dTools = TOOLS_LIST.map(({ name, url, description }) => (
		<li key={name} className='tools-li'>
			<Link href={url}>
				<a target='_blank' className='link__external'>
					<span>{name}</span>
				</a>
			</Link>
			<span>: {description}</span>
		</li>
	));

	return (
		<Page pageInfo={tools}>
			<ul className='tools-list'>{dTools}</ul>
		</Page>
	);
};

export default Tools;
