import { Problem, Solution } from "@/components";

export default function Home() {
	return (
		<main className="h-screen w-screen">
			<video
				src={require("./LandingVideo.mp4")}
				autoPlay
				muted
				loop
				className="pt-[100px]"
			/>

			<div className="w-full h-2 bg-creamLogo rounded-[50%]" />

			<section className="h-[600px] bg-black text-white">
				<Problem />
			</section>

			<div className="w-full h-2 bg-creamLogo rounded-[50%]" />

			<section className="h-fit bg-black text-white">
				<Solution />
			</section>

			<div className="w-full h-2 bg-creamLogo rounded-[50%]" />
		</main>
	);
}
