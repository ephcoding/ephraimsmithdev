import Image from "next/image";
import Link from "next/link";
import { SOCIAL_NAV } from "./social-nav";

// ** FEEDS MAIN-NAV MENU ITEMS

export const SECTION_DATA = {
	about: {
		heading: "about me",
		intro:
			"work hard.  play hard.  for most this is a cliche` slogan.  for me  it's how I approach my life everyday.  pushing myself physically and mentally everyday has taught me things no degree ever could.",
		content: (
			<ul>
				<li>Skydives: 127</li>
				<li>Bungee Jumps: 2</li>
				<li>Miles on Motorcycles: 30,000 +</li>
				<li>Custom-built the electric guitar that I play. (not well)</li>
			</ul>
		),
	},
	education: {
		heading: "education",
		intro:
			"my entire life, I've had an extreme curiosity for how the world and everything in it works.  I see education as a springboard - not the endgame.  the real learning doesn't start until you start breaking things.",
		content: (
			<ul>
				<li>
					<p>Bowling Green State University</p>
					<p>B.S. Construction Management & Technology</p>
				</li>
				<li>
					<p>Tech Elevator</p>
					<p>Fullstack Java Bootcamp</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>Responsive Web Design</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>JavaScript Algorithms & Data Structures</p>
				</li>
				<li>
					<p>FreeCodeCamp</p>
					<p>Front End Development Libraries</p>
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
