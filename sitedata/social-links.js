import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	FaFreeCodeCamp,
} from 'react-icons/fa';

const iconStyles = {
	color: '$eph-white',
	// height: '2.5rem',
};

export const SOCIAL_LINKS = [
	{
		label: 'Github',
		reactIcon: <FaGithub style={iconStyles} />,
		url: 'https://github.com/ephcoding',
		username: 'ephcoding',
		target: '_blank',
	},
	{
		label: 'FreeCodeCamp',
		reactIcon: <FaFreeCodeCamp style={iconStyles} />,
		url: 'https://www.freecodecamp.org/ephcoding',
		username: 'ephcoding',
		target: '_blank',
	},
	{
		label: 'Twitter',
		reactIcon: <FaTwitter style={iconStyles} />,
		url: 'https://www.twitter.com/ephcoding',
		username: 'ephcoding',
		target: '_blank',
	},
	{
		label: 'LinkedIn',
		reactIcon: <FaLinkedin style={iconStyles} />,
		url: 'https://www.linkedin.com/in/ephraimjsmith',
		username: 'ephraimjsmith',
		target: '_blank',
	},
];
