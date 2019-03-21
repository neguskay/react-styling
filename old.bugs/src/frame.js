import React from 'react';
import styleable from 'react-styleable';
import css from './module-css/frame.module.css';

function Frame({ children }) {
	return <div className={props.css.root}>{children}</div>;
}

export default styleable(css)(Frame);
