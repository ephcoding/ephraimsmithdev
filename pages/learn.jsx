import { Page } from "../components";
import { PAGE_META } from "../constants";

// import { sortHighLow } from "@/js/util_funcs";

export default function LearnPage() {
	const { learn } = PAGE_META;

	return (
		<Page pageInfo={learn}>
			<h1>learn</h1>
		</Page>
	);
}
