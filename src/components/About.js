import React from "react";
import about from "../Asset 1.png";
import tina from "../Happy-Girl-Young-PNG.png";

const About = () => {
	return (
		<>
			<section className="mt-32 w-5/12 mx-auto">
				<p className=" text-2xl text-red-600">
					Its the little things that matter most
				</p>
			</section>
			<section className="flex w-full mx-auto items-center">
				<img src={about} alt="about" className="ml-24 pt-12" />
				<article className="w-4/12 text-center">
					<p className="m-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						vitae aliquet orci. Class aptent taciti sociosqu ad litora torquent
						per conubia nostra, per inceptos himenaeos.
					</p>
					<p className="m-6">
						Mauris id lobortis velit, porttitor finibus justo. Vestibulum ante
						ipsum primis in faucibus orci luctu per conubia nostra, per inceptos
						himenaeos. Mauris id lobortis velit, porttitor finibus justo.
						Vestibulum ante ipsum primis in faucibus orci luctu
					</p>
					<p className="m-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						vitae aliquet orci. Class aptent taciti sociosqu ad litora torquent
						per conubia nostra, per inceptos himenaeos. Mauris id lobortis
						velit, porttitor finibus justo. Vestibulum ante ipsum primis in
						faucibus orci luctu per conubia.
					</p>
				</article>
				<img src={tina} alt="tina" className="pl-1" />
			</section>
		</>
	);
};

export default About;
