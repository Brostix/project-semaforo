import React from "react";
import { PropTypes } from "prop-types";

const Light = props => {
	let styles = "light ".concat(props.color);
	return <div className={styles} onClick={props.onClick}></div>;
};

export default Light;

Light.PropTypes = {
	color: PropTypes.string,
	onClick: PropTypes.func
};
