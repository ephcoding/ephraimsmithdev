import { SECTION_DATA } from "./section-data";

// ** DYANMIC NAV ITEMS **
// nav items fed by SECTION_DATA

export const MAIN_NAV_ITEMS = Object.entries(SECTION_DATA).map(
	([section, props]) => {
		return {
			href: `#${section}`,
			name: props.heading,
		};
	}
);
