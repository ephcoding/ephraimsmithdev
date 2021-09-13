import {
	FaGithub,
	FaLinkedin,
	FaTwitter,
	LinkedIn,
	Twitter,
} from 'react-icons/fa';

const iconStyles = {
	color: '#fff',
	// height: '2.5rem',
};

export const accounts = [
	{
		label: 'BLOG',
		icon: false,
		reactIcon: null,
		url: '/blog',
		username: '',
		target: '_self',
	},
	// {
	//   label: 'CodePen',
	// icon: true,
	// reactIcon:
	//   url:
	//   username: 'ephcoding',
	// },
	{
		label: 'Github',
		icon: true,
		reactIcon: <FaGithub style={iconStyles} />,
		url: 'https://github.com/ephcoding',
		username: 'ephcoding',
		target: '_target',
	},
	{
		label: 'LinkedIn',
		icon: true,
		reactIcon: <FaLinkedin style={iconStyles} />,
		url: 'https://www.linkedin.com/in/ephraimjsmith',
		username: 'ephraimjsmith',
		target: '_target',
	},
	// {
	//   url: ''
	//   username: 'ephcoding',
	// },
	{
		label: 'Twitter',
		icon: true,
		reactIcon: <FaTwitter style={iconStyles} />,
		url: 'https://www.twitter.com/ephcoding',
		username: 'ephcoding',
		target: '_target',
	},
];
