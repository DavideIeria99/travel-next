import { searchCity } from "@/app/actions";
import { useState } from "react";
import Button from "../Button/Button";

export default function Search() {
	const [search, setSearch] = useState("");
	const resetSearch = (data: FormData) => {
		searchCity(data);
		setSearch("");
	};

	return (
		<form
			action={(data) => resetSearch(data)}
			className="gap-2">
			<input
				type="text"
				id="name"
				name="name"
				className="bg-slate-800 rounded text-white px-2 border-0 border-b-2  border-b-blue-200 placeholder:italic"
				placeholder="cerca città..."
				onChange={(e) => setSearch(e.target.value)}
				value={search}
			/>
			<Button
				type="submit"
				label="cerca"
			/>
		</form>
	);
}
