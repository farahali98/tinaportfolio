import React from "react";
import Video from "../video/mixkit-abstract-virtual-reality-dark-tunnel-31573-medium.mp4";
// import { GiFallDown } from "react-icons/gi";

const HomePage = () => {
	return (
		<main>
			<section className="w-full h-full py-8 text-center">
				<video autoPlay muted loop className="bg-video">
					<source src={Video} type="video/mp4"></source>
				</video>
				<h1 className=" text-4xl text-white">Tina Meshleb</h1>
				<section className="flex w-10/12 mx-auto justify-evenly items-center text-white relative bottom-4">
					<div className="bg-laptop bg-center bg-no-repeat bg-cover laptop-bg relative flex items-center z-neg">
						<img
							src="https://www.visme.co/wp-content/themes/visme/images/make-presentation/laptop_girl.svg"
							alt="Girl-Svg"
							className="absolute sitting"
						/>
						<div className="bg-white mx-auto rounded-md laptop-bg-slide"></div>
					</div>
					<article className=" w-1/4 text-center">
						<h2 className="text-3xl border-b-4 w-56 mx-auto">
							Web Designer <br /> Based in <br /> Beirut, LB
						</h2>
						<button className="px-3 py-1 bg-gray-400 text-white rounded-lg shadow-lg mt-8 w-26 hover:text-purple-900 text-sm">
							Learn More
						</button>
					</article>
				</section>
			</section>
		</main>
	);
};

export default HomePage;
