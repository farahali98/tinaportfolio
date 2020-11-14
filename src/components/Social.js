import React from "react";
import SocialHolder from "../icons/SocialHolder";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Social = () => {
	return (
		<div className="h-full flex items-center fixed">
			<div className="flex-col absolute pl-4">
				<a href="https://www.google.com" target="_blank">
					<FaTwitter size="2.25rem" color="white" />
				</a>
				<a href="https://www.google.com" target="_blank">
					<FaGithub size="2.25rem" color="white" className="my-6" />
				</a>
				<a href="https://www.google.com" target="_blank">
					<FaLinkedin size="2.25rem" color="white" />
				</a>
			</div>
			<SocialHolder color="#360167" width="8rem" />
		</div>
	);
};

export default Social;
