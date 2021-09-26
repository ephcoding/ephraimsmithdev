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
		label: 'blog',
		reactIcon: null,
		url: '/blog',
		username: '',
		target: '_self',
	},
	// {
	//   label: 'CodePen',

	// reactIcon:
	//   url:
	//   username: 'ephcoding',
	// },
	{
		label: 'Github',
		reactIcon: <FaGithub style={iconStyles} />,
		url: 'https://github.com/ephcoding',
		username: 'ephcoding',
		target: '_target',
	},
	{
		label: 'LinkedIn',
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
		reactIcon: <FaTwitter style={iconStyles} />,
		url: 'https://www.twitter.com/ephcoding',
		username: 'ephcoding',
		target: '_target',
	},
];
