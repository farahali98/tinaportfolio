import React from "react";
import Video from "../video/mixkit-abstract-virtual-reality-dark-tunnel-31573-medium.mp4";
import { GiFallDown } from "react-icons/gi";

const HomePage = () => {
	return (
		<main>
			<section className="w-full h-screen py-8">
				<video autoPlay muted loop className="bg-video">
					<source src={Video} type="video/mp4"></source>
				</video>
				<h1 className=" text-4xl w-64 mx-auto border-b-4 text-white">
					Tina Meshleb
				</h1>
				<section className="flex w-10/12 mx-auto justify-evenly items-center text-white relative bottom-4">
					<article className=" w-1/4 text-center">
						<h2 className="text-4xl border-b-4 w-64 mx-auto">
							Web Designer <br /> Based in <br /> Beirut, LB
						</h2>
						<button className="px-4 py-2 bg-gray-400 text-white rounded-lg shadow-md mt-8 w-32">
							Learn More
						</button>
					</article>
					<div className="bg-laptop bg-center bg-no-repeat bg-cover laptop-bg relative flex items-center">
						<img
							src="https://www.visme.co/wp-content/themes/visme/images/make-presentation/laptop_girl.svg"
							alt="Girl-Svg"
							className="absolute sitting"
						/>
						<div className="bg-white mx-auto rounded-md laptop-bg-slide"></div>
					</div>
				</section>
			</section>
			<GiFallDown
				color="red"
				className="absolute bottom-4 right-0"
				size="3rem"
				// height="5rem"
			/>
		</main>
	);
};

export default HomePage;
