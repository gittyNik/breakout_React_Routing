import React from 'react';
import { Redirect } from 'react-router-dom';

const Signin = (props) => {
	console.log("Props of Signin", props)
	const { handleSubmit, username } = props;
	if (username !== '') {
		return <Redirect to='/' />;
	}
	return (<div>
		<h3>Signin:</h3>
		<input placeholder="Username" type="text" id="username" />
		<input placeholder="Password" type="password" id="password" />
		<button onClick={handleSubmit} >Submit</button>
		</div>);

}


export default Signin;