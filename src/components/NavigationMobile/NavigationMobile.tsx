import React from 'react';
import styles from "./NavigationMobile.module.scss"

const NavigationMobile: React.FC = () => {
	return (
		<div className={styles.root}>
			<button>Navigation</button>
		</div>
	);
};

export default NavigationMobile;