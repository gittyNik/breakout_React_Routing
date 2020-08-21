import React from 'react';

const Home = (props) => {
	const { username } = props;
	console.log(`Props of Home`, props)
	return (<div>
		<h3>Home</h3>
		<p> Hello {username} </p>
		</div>);

}


export default Home;