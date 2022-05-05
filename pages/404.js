import Link from "next/link";
import { PageWrapper } from "components";

const FourOhFour = () => {
	return (
		<PageWrapper>
			<div className='flex flex-col h-screen justify-center items-center'>
				<h1 className='mb-10'>You lost..</h1>
				<Link href='/'>
					<a className='border-2 border-yellow-500 rounded px-5 py-2 hover:bg-yellow-500 hover:text-black'>
						Phone Home
					</a>
				</Link>
			</div>
		</PageWrapper>
	);
};

export default FourOhFour;
