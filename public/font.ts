import { Alice, Playfair_Display } from "next/font/google";

const AliceFont = Alice({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-alice",
});
const PlayFairFont = Playfair_Display({
	subsets: ["latin"],
	variable: "--font-playfair",
});

export { AliceFont, PlayFairFont };
