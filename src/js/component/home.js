import React, { Fragment } from "react";
import Light from "./light.jsx";
import { useState } from "react";

export function Home() {
	const [lightColor, setLightColor] = useState({
		red: false,
		yellow: false,
		green: false
	});

	return (
		<Fragment>
			<div className="video-background">
				<div className="video-foreground">
					<iframe
						autoPlay
						width="1530"
						height="800"
						src="https://youtube.com/embed/SldJIisWFmE?autoplay=1"
						frameBorder="0"
						allowFullScreen></iframe>
				</div>
			</div>
			<div className="semaforo">
				<Light
					color={lightColor.red ? "red" : "grey"}
					onClick={() => {
						setLightColor({
							red: true,
							yellow: false,
							green: false
						});
					}}
				/>
				<Light
					color={lightColor.yellow ? "yellow" : "grey"}
					onClick={() => {
						setLightColor({
							red: false,
							yellow: true,
							green: false
						});
					}}
				/>
				<Light
					color={lightColor.green ? "green" : "grey"}
					onClick={() => {
						setLightColor({
							red: false,
							yellow: false,
							green: true
						});
					}}
				/>
			</div>
		</Fragment>
	);
}
