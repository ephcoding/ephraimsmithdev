import { PAGE_META } from "site_data";
import { PageWrapper } from "components";

export default function Home() {
	const { home } = PAGE_META;

	return <PageWrapper page_meta={home}></PageWrapper>;
}
