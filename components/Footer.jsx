import Navigation from "./Navigation";

export default function Footer() {
	return (
		<footer className='footer'>
			<Navigation />
			<div className='container mx-auto text-center'>
				&copy; {new Date().getFullYear()} Ephraim Smith | ephraimsmith.dev
			</div>
		</footer>
	);
}
