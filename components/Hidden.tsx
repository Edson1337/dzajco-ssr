import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
const Hidden = ({ children }: { children: React.ReactNode }) => {
	const [isShown, setIsShown] = useState(false);

	return (
		<>
			<button
				className="mt-4 mb-4 ml-2 self-start py-2"
				onClick={() => {
					setIsShown((prevState) => !prevState);
				}}
			>
				<span className="hidden-description">
					<AiFillCaretRight
						className={`${isShown ? "rotate-90" : ""} transition`}
					/>
					More Options
				</span>
			</button>
			{isShown && children}
		</>
	);
};

export default Hidden;
