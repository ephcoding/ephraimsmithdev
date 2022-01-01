import Navigation from "./Navigation";

export default function Header({ title: { first, second } }) {
	return (
		<header className='header'>
			<h1>
				{first ? first : null}
				<span className='blue'>{second ? second : null}</span>
			</h1>
			<Navigation />
		</header>
	);
}
