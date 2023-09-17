"use client";

import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

const Problem = () => {
	const ref = useRef<any>(null);
	const [intersecting, setIntersecting] = useState(false);
	const [show, setShow] = useState({
		problemOne: false,
		problemTwo: false,
		problemThree: false,
	});

	console.log("intersecting", intersecting);
	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0];
			setIntersecting(entry.isIntersecting);
		});

		observer.observe(ref.current);
	}, []);

	useEffect(() => {
		console.log("runnn");

		setShow((prevState) => ({
			...prevState,
			problemOne: true,
		}));
		setTimeout(() => {
			setShow((prevState) => ({
				...prevState,
				problemTwo: true,
			}));
			setTimeout(() => {
				setShow((prevState) => ({
					...prevState,
					problemThree: true,
				}));
			}, 2000);
		}, 2000);
	}, [intersecting]);

	return (
		<div
			ref={ref}
			className={clsx(
				"h-full w-full flex flex-col justify-center items-start relative text-sm pl-32",
				"lg:text-2xl"
			)}
		>
			<p className="lg:text-6xl font-bold">Can you relate?</p>
			<div className="mt-10">
				<p
					className={clsx(
						"w-fit text-center py-5",
						show.problemOne && "translate-x-0 opacity-100"
					)}
				>
					<span className={clsx("font-bold text-2xl", "lg:text-4xl")}>
						Are you,{" "}
					</span>
					at the mercy of the neighbourhood ‘college-gate wale
					bhaiyya’ who completes one thesis per day?
				</p>

				<p
					className={clsx(
						"w-fit text-center py-5",
						show.problemOne && "translate-x-0 opacity-100"
					)}
				>
					<span className={clsx("font-bold text-2xl", "lg:text-4xl")}>
						Are you,{" "}
					</span>
					dependent on your unmotivated (read: unincentivized) “PSM
					wala friend” who is yet to complete his MD?
				</p>

				<p
					className={clsx(
						"w-fit text-center py-5",
						show.problemOne && "translate-x-0 opacity-100"
					)}
				>
					<span className={clsx("font-bold text-2xl", "lg:text-4xl")}>
						Are you,{" "}
					</span>
					taking the reigns in your own hands and learning to
					horse-ride watching YouTube videos?
				</p>
			</div>
		</div>
	);
};

export default Problem;
