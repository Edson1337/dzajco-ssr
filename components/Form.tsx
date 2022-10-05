import React, { useState } from "react";

const Form = () => {
	const [enteredUrl, setEnteredUrl] = useState("");
	const [customName, setCustomName] = useState("");

	const clearInputs = () => {
		setEnteredUrl("");
		setCustomName("");
	};

	const formSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!enteredUrl) {
			return;
		}

		if (!customName) {
			const response = await fetch("/api/urls", {
				method: "POST",
				body: JSON.stringify({
					url: enteredUrl,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}).then((response) => response.json());

			console.log(response);

			clearInputs();

			return;
		}

		const response = await fetch("/api/urls", {
			method: "POST",
			body: JSON.stringify({
				url: enteredUrl,
				customName,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => response.json());

		console.log(response);

		clearInputs();
	};

	const linkInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEnteredUrl(event.target.value);
	};

	const nameInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setCustomName(event.target.value);
	};

	return (
		<form onSubmit={formSubmitHandler} className="form">
			<div className="flex gap-10">
				<input
					className="input"
					type="text"
					placeholder="Link"
					value={enteredUrl}
					onInput={linkInputHandler}
				/>

				<input type="submit" value="Skróć" />	
			</div>
			<input
				type="text"
				className="input hidden"
				placeholder="Custom Name"
				value={customName}
				onInput={nameInputHandler}
			/>
		</form>
	);
};

export default Form;
