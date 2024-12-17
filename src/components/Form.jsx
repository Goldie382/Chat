import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Body from "./Body";

const Form = () => {
    const [name, setName] = useState("");
	const [Message, setMessage] = useState("")
	const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    
    const handleSubmit = (e) => {
			e.preventDefault();
			setIsLoggedIn(true);
		};

    

    return (
			<section className="section">
				<div className="container">
					<div className="row">
						<form className="form" onSubmit={handleSubmit}>
							<div className="form-group">
								{isLoggedIn ? (
									<p>
										<pre>
											Name : {name}
											Message : {Message}
										</pre>
									</p>
								) : (
									<p>Please Log in</p>
								)}
								<input
									value={name}
									onChange={(e) => setName(e.target.value)}
									type="text"
									id="name_field"
									placeholder="Enter your FullName"
									className="form-control"
								/>
								<input
									value={Message}
									onChange={(e) => setMessage(e.target.value)}
									type="text" // Changed to 'tel'
									id="message" // Changed id to be unique
									placeholder="Message"
									className="form-control"
								/>

								<button className="btn" type="submit">
									Send
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		);
	
	}


export default Form;