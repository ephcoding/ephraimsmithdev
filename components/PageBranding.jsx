import ECLogo from "./ECLogo";

const PageBranding = ({ logo, pageTitle }) => {
	return (
		<div className='page-branding'>
			{logo}
			<span className='page-title'>{pageTitle}</span>
		</div>
	);
};

export default PageBranding;
