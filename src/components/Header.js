import React from "react";
import Trial from "../icons/MenuHolder";
import { FiMenu } from "react-icons/fi";

const Header = () => {
	return (
		<>
			<Trial width="11.5rem" color="#360167" />
			<header className="absolute flex justify-end w-full pt-12 pr-12">
				<a href="#" className="cursor-pointer fixed">
					<FiMenu size="2.5rem" color="#FFF" />
				</a>
			</header>
		</>
	);
};

export default Header;
