"use client";

import clsx from "clsx";
import { useEffect, useState, useRef } from "react";

const Problem = () => {
	const ref = useRef<any>(null);
	const [intersecting, setIntersecting] = useState(false);
	const [show, setShow] = useState({
		problemOne: false,
		problemTwo: false,
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
		}, 2000);
	}, [intersecting]);

	return (
		<div
			ref={ref}
			className="h-full w-full flex justify-center items-center overflow-hidden relative"
		>
			<p
				className={clsx(
					"absolute top-5 left-5 translate-x-full",
					show.problemOne && "translate-x-0"
				)}
			>
				HELLO 1
			</p>
			<p
				className={clsx(
					"absolute top-10 left-10 translate-x-full",
					show.problemTwo && "translate-x-0"
				)}
			>
				HELLO 2
			</p>
		</div>
	);
};

export default Problem;
