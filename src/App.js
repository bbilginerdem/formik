import "./App.css";
import React from "react";
import { useFormik, Field, Form } from "formik";

function App() {
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});
	return (
		<form onSubmit={formik.handleSubmit}>
			<label htmlFor="firstName">First Name</label>
			<input
				id="firstName"
				name="firstName"
				type="text"
				onChange={formik.handleChange}
				value={formik.values.firstName}
			/>

			<label htmlFor="lastName">Last Name</label>
			<input
				id="lastName"
				name="lastName"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.lastName}
			/>

			<label htmlFor="email">Email</label>
			<input
				id="email"
				name="email"
				type="email"
				onChange={formik.handleChange}
				value={formik.values.email}
			/>

			<button type="submit">Submit</button>
		</form>
	);
}

export default App;
