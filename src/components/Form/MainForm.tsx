"use client";

import { TMainFormAction } from "@/app/_actions/formActions";
import Input from "./Input";
import Hidden from "../shared/Hidden";
import useInput from "@/hooks/useInput";
import { isValidUrl } from "@/utils/api";

type Props = {
	action: TMainFormAction;
};

const MainForm = ({ action }: Props) => {
	const { value: link, setValue: setLink, error } = useInput({});

	console.log(error);

	const { value: customName, setValue: setCustomName } = useInput({});

	return (
		<form
			action={action}
			className="overflow-hidden px-1 max-w-3xl my-10 mx-auto py-1">
			<Input
				type="submit"
				title="Dżajcuj"
				placeholder="Link"
				value={link}
				setValue={setLink}
			/>
			<Hidden className="mt-4 mb-2" text="More Options">
				<Input
					type="text"
					placeholder="Custom Name"
					value={customName}
					setValue={setCustomName}
				/>
				{/* TODO: Implement Expiration Date */}
			</Hidden>
		</form>
	);
};

export default MainForm;
