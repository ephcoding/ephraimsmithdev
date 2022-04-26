import { Page } from "../../components/";
import { PAGE_META } from "../../constants";

export default function BuildPage() {
	const { build } = PAGE_META;

	return (
		<Page pageInfo={build}>
			<h1>build</h1>
		</Page>
	);
}
