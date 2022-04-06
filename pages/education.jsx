import { Page } from "../components";
import { EDUCATION, PAGE_META } from "../constants";

// import { sortHighLow } from "@/js/util_funcs";

export default function EducationPage() {
	const { education } = PAGE_META;

	return <Page pageInfo={education}></Page>;
}
