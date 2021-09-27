import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaFreeCodeCamp,
} from 'react-icons/fa';

const iconStyles = {
	color: '$eph-white',
};

export const SOCIAL_NAV_LINKS = [
	{
		label: 'Github',
		reactIcon: <FaGithub style={iconStyles} />,
		url: 'https://github.com/ephcoding',
		username: 'ephcoding',
	},
	{
		label: 'FreeCodeCamp',
		reactIcon: <FaFreeCodeCamp style={iconStyles} />,
		url: 'https://www.freecodecamp.org/ephcoding',
		username: 'ephcoding',
	},
	{
		label: 'Twitter',
		reactIcon: <FaTwitter style={iconStyles} />,
		url: 'https://www.twitter.com/ephcoding',
		username: 'ephcoding',
	},
	{
		label: 'LinkedIn',
		reactIcon: <FaLinkedin style={iconStyles} />,
		url: 'https://www.linkedin.com/in/ephraimjsmith',
		username: 'ephraimjsmith',
	},
];
