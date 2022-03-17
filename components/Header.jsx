import NavList from "./NavList";

export default function Header({ title: { first, second } }) {
	return (
		<header className='border border-green-600 flex justify-between'>
			<h1>
				{first ? first : null}
				<span className='blue'>{second ? second : null}</span>
			</h1>
			<NavList />
		</header>
	);
}
