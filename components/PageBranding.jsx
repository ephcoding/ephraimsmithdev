import PageBrandingLogo from "./PageBrandingLogo";

const PageBranding = ({ logo, pageTitle }) => {
	return (
		<div className='page-branding'>
			<PageBrandingLogo logo={logo} />
			<span className='page-title'>{pageTitle}</span>
		</div>
	);
};

export default PageBranding;
