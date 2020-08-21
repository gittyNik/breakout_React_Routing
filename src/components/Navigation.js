import React from 'react'
import { Link } from 'react-router-dom';
const Navigation = (props) => {
	const { username } = props;
	return (
		<ul>
			<Link to="/"><li>Home</li></Link>
			<Link to="/products"><li>Products</li></Link>
			<Link to="/signin"><li>{username? "Logout" : "Signin"}</li></Link>
		</ul>
		);
}

export default Navigation;
