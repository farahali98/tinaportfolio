import React from "react";
import about from "../Asset 1.png";
// import tina from "../Happy-Girl-Young-PNG.png"; Tina png
import trial from "../undraw_super_woman_dv0y (2).svg";

const About = () => {
	return (
		<section className="bg-gray-100">
			<section className="mt-10 w-5/12 mx-auto relative">
				<p className=" text-xl text-red-600  relative top-30">
					Its the little things that matter most
				</p>
			</section>
			<section className="flex w-full mx-auto items-center">
				<img src={about} alt="about" className="ml-24 pt-12" />
				<article className="w-4/12 text-center min-width-25">
					<p className="m-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						vitae aliquet orci. Class aptent taciti sociosqu ad litora torquent
						per conubia nostra, per inceptos himenaeos.
					</p>
					<p className="m-6">
						Mauris id lobortis velit, porttitor finibus justo. Vestibulum ante
						ipsum primis in faucibus orci luctu per conubia nostra, per inceptos
						himenaeos.
					</p>
					<p className="m-6">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
						vitae aliquet orci. Class aptent.
					</p>
				</article>
				<img src={trial} alt="tina" className="pl-1 w-5/12 " />
				{/* <img src={tina} alt="tina" className="pl-1 " />  */}
				{/* 		THE ABOVE IS FOR PNG TINA												 */}
			</section>
		</section>
	);
};

export default About;
