import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styleable from 'react-styleable';
import css from './module-css/nav.module.css';

function getPrevClassName(props) {
	// return classnames('dft__nav__btn', 'dft__nav__btn--prev', {
	// 	'dft__nav__btn--hidden': !props.hasPrevious
	// });

	return props.hasPrevious ? props.css.prev : props.css.prevHidden;
}

function getNextClassName(props) {
	// return classnames('dft__nav__btn', 'dft__nav__btn--next', {
	// 	'dft__nav__btn--hidden': !props.hasNext
	// });
	return props.hasNext ? props.css.next : props.css.nextHidden;
}

function Nav(props) {
	return (
		<div>
			<button className={props.css.prev} onClick={props.onPrevious}>
				&#10094;
			</button>
			<button className={props.css.next} onClick={props.onNext}>
				&#10095;
			</button>
		</div>
	);
}

Nav.propTypes = {
	onPrevious: PropTypes.func.isRequired,
	onNext: PropTypes.func.isRequired,
	hasPrevious: PropTypes.bool,
	hasNext: PropTypes.bool
};

export default styleable(css)(Nav);
