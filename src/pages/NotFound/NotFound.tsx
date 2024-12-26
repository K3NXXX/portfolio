import React from 'react';
import styles from "./NotFound.module.scss"
import { PAGES } from '../../constants/pages.constants'
import { Link } from 'react-router-dom'


const NotFound: React.FC = () => {
	return (
		<div className={styles.root}>
		<div className={styles.content}>
			<div className={styles.content__left}>
				<p>404</p>
			</div>
			<div className={styles.content__right}>
				<p className={styles.welcome}>Page not found</p>
				<p className={styles.text2}>It seems like the page you're looking for doesn't exist</p>
				<Link className={styles.btn} to={PAGES.BEGINNING}>Back to home page</Link>

			</div>
		</div>
	</div>
	);
};

export default NotFound;