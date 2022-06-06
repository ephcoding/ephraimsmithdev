import Image from "next/image";
import Link from "next/link";
import { SOCIAL_NAV } from "./social-nav";

// ** FEEDS MAIN-NAV MENU ITEMS

export const SECTION_DATA = {
	about: {
		heading: "about me",
		intro: "100% believe all limitations live between the ears.",
		content: (
			<ul className='text-sm'>
				<li>Skydives: 127</li>
				<li>Bungee Jumps: 2</li>
				<li>Miles on Motorcycles: 30,000+</li>
				<li>Started learning to skateboard at 37.</li>
				<li>Custom-built the electric guitar that I play</li>
				<li>Achieved the prestigious Eagle Scout Award at 13.</li>
				<li>Wife and I paid off $212,000 of debt in 3.5 years.</li>
				<li>
					Reverse-engineered the Army Regulations to get selected as a pilot
					without any military connections or flight experience.
				</li>
			</ul>
		),
	},
	education: {
		heading: "education",
		intro: "",
		content: (
			<ul>
				<li>
					<p>Bowling Green State University</p>
					<p>B.S., Construction Management & Technology</p>
				</li>
				<li>
					<p>International Union of Operating Engineers</p>
					<p>Diploma, Heavy Equipment Operator</p>
				</li>
				<li>
					<p>Erie County Technical School</p>
					<p>Diploma, Construction Trades</p>
				</li>
				<li>
					<p>United States Army</p>
					<p>Basic Combat Training</p>
				</li>
				<li>
					<p>Tech Elevator</p>
					<p>Diploma, Fullstack Java Bootcamp</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>Certificate: Responsive Web Design</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>Certificate: JavaScript Algorithms & Data Structures</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>Certificate: Front End Development Libraries</p>
				</li>
			</ul>
		),
	},
	experience: {
		heading: "experience",
		intro:
			"with a uniquely diverse professional background, I have learned to approach problems with questions.  not answers.",
		content: (
			<ul>
				<li>
					<p>Aderant</p>
					<p>QA Engineer</p>
					<div>
						<p>SDET</p>
						<p>R \& D Developer</p>
						<p>Internal Tools Developer</p>
					</div>
				</li>
			</ul>
		),
	},
	projects: {
		heading: "projects",
		intro: "where the rubber meets the road..",
		content: (
			<ul>
				<li>
					<h2>Tornado Action</h2>
					<p>Real-Time Tornado Alerts</p>
					<p>Daily Severe Weather Outlooks</p>
				</li>
				{/* <li>
					<h2>Relative Income</h2>
					<p>True net-income calculator</p>
					<p>Financial awareness</p>
				</li> */}
			</ul>
		),
	},
	connect: {
		heading: "connect",
		intro:
			"hit me up.  let's work together, trade war stories, copy notes, start a side project, tell lies, catch drinks.  we all have something to learn from each other.",
		content: (
			<div className='min-h-full bg-stone-300'>
				{SOCIAL_NAV.map((item) => (
					<Link key={item.name} href={item.href} passHref>
						<a className='inline' target='_blank'>
							<item.icon fontSize='2rem' />
						</a>
					</Link>
				))}
			</div>
		),
	},
};
