import Header from "@/components/Header/Header";
import { headerType } from "@/type/type";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contattaci",
};
export default function About() {
	const header: headerType = {
		name: "Contattaci",
		text: "mandaci le tue preferenze",
	};
	return (
		<>
			<Header header={header} />
			<section className="my-5 w-full flex justify-center">
				<form className=" w-1/3 rounded  bg-blue-300 p-5 text-end">
					<div className=" flex flex-col gap-4 text-start">
						<div className="mb-2 block text-white font-medium uppercase  ">
							<label htmlFor="email1">Email</label>
						</div>
						<input
							className="rounded w-full bg-green-200 border p-1 "
							id="email1"
							type="email"
							placeholder="name@email.com"
							required
						/>

						<div className="mb-2 block text-white font-medium uppercase  ">
							<label htmlFor="email1">testo</label>
						</div>
						<textarea
							id="comment"
							placeholder="commenta..."
							required
							rows={6}
							className="w-full bg-green-200 rounded p-1"
						/>
					</div>

					<button
						className="bg-blue-500 mt-2 p-2 rounded text-white hover:bg-blue-300 transition duration-500"
						type="submit">
						Submit
					</button>
				</form>
			</section>
		</>
	);
}
