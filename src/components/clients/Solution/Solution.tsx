"use client";

import clsx from "clsx";
import {
	ArtificialIntelligenceSvg,
	ScientificTech,
	TeamOfExpertsSvg,
} from "../../../../public";
import Image from "next/image";

const Solution = () => {
	return (
		<div
			className={clsx(
				"h-full w-full",
				"flex flex-col",
				"items-start justify-center px-32 my-32"
			)}
		>
			<p className="text-6xl font-bold">
				Unlock the power of data with MetaStatiQ
			</p>
			<p className="text-6xl font-thin mt-5 tracking-[0.05em]">
				But why MetaStatiq?
			</p>
			<div className="text-4xl mt-10 w-full">
				<div className="flex items-center tracking-wider">
					<p>A team of experts </p>
					<Image
						className="h-32 w-32 ml-10"
						src={TeamOfExpertsSvg}
						alt="Team of experts solution for problem"
					/>
				</div>
				<div className="w-full flex items-center justify-end tracking-wider">
					<Image
						className="h-32 w-32"
						src={ArtificialIntelligenceSvg}
						alt="Artificial Intelligence solution for problem"
					/>
					<p className="ml-10">Leveraing the power of AI </p>
				</div>
				<div className="flex flex-col justify-center items-center tracking-wider mt-10">
					<p className="font-bold">
						Using cutting-edge scientific technology{" "}
					</p>
					<Image
						className="h-32 w-32 mt-10"
						src={ScientificTech}
						alt="Scientific technology solution for problem"
					/>
				</div>
			</div>
			{/* <p>
				Our team of experts combines the best of human knowledge and
				artificial intelligence to provide cutting-edge scientific
				communications. With MetaStatiQ, you&apos;ll go beyond
				statistics and drive the advancement of science.
			</p> */}
		</div>
	);
};

export default Solution;
