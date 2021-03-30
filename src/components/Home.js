import React from "react";
import SideNav from "./SideNav";
const Home = () => {
	return (
		<div className="container">
			<SideNav></SideNav>
			<div className="middle animate__animated animate__backInUp">
				<h1>
					58 <sup>th</sup> Ganesha Utsav
				</h1>
				<p>
					The 58<sup>th</sup> Bengaluru Ganesh Utsav Upholds<br></br>
					the rich tradition of culture and <br></br>
					heritage that is India
				</p>
			</div>
			<div className="aside">
				{/* <p>
					<i>
						Bengaluru 58<sup>th</sup> Ganesh Utsav is India's Pride
					</i>
				</p> */}
			</div>
		</div>
	);
};

export default Home;
