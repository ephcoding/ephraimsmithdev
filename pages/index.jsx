import { PAGE_META } from "../site-data";
import PROJECTS from "../site-data/projects";
import { Page, ProjectList } from "../components";
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
	const { home } = PAGE_META;

	return <Page pageInfo={home}></Page>;
}
