import Navigation from "./Navigation";

export default function Footer() {
	return (
		<footer className='footer'>
			<Navigation />
			<hr className='footer-hr' />
			<div className='copyright'>
				&copy; {new Date().getFullYear()} Ephraim Smith | ephraimsmith.dev
			</div>
		</footer>
	);
}
