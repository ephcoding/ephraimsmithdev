import Navigation from "./Navigation";

export default function Header({ title: { first, second } }) {
	return (
		<header className='header'>
			<h1>
				<span className='blue'>{first}</span> {second}
			</h1>
			<Navigation />
		</header>
	);
}
