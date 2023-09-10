import { Problem } from "@/components";

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

			<section className="h-[600px] bg-black text-white">
				<Problem />
			</section>
		</main>
	);
}
