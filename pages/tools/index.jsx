import Page from "components/PageWrapper";
import Link from "next/link";
import { PAGES, TOOLS } from "../../js/site_data";
// import { sortHighLow } from "js/util_funcs";

const Tools = () => {
	const { tools } = PAGES;

	// const sortedTools = TOOLS.sort(({ name }) => sortHighLow(this.name, name));

	const dTools = TOOLS.map(({ name, url, description }) => (
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
		<Page pageInfo={tools}>{<ul className='tools-list'>{dTools}</ul>}</Page>
	);
};

export default Tools;
