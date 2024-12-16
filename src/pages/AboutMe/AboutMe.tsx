import React from 'react'
import aboutMe from '../../assets/about-me/about.png'
import styles from './AboutMe.module.scss'

const AboutMe: React.FC = () => {
	return (
		<div className={styles.root}>
			<h1>Who is Volodya Andrushevskyi</h1>
			<div className={styles.content}>
				<div className={styles.left}>
					<div className={styles.wrapper}>
						<h6>Why I decided to create websites?</h6>
						<p>
							I have always been fascinated by web development. As for me it's
							so cool to create beautiful UI and interesting functionality.
							Furthermore, I enjoy learning new technologies. It gives great
							satisfaction and means that I don't waste my day.
						</p>
					</div>
					<div className={styles.wrapper}>
						<h6>Career and development</h6>
						<p>
							My practical experience is 2 years.
							Throughout my career, I have worked with a wide range of
							technologies, from front-end to
							back-end. I have created many website. Some of them you can find in "Projects" page.
							<br/>
							My frontend skills: React, TypeScript, Next, Redux Toolkit, React Query, React Hook Form.
							<br/>
							My backend skills: Node, Express, Nest, SQL, MongoDB.
							<br/> 
							Additional skills: Git.
							
						</p>
					</div>
					<div className={styles.wrapper}>
						<h6>My hobbies</h6>
						<p>
							Video games, chess, anime, manga. Bleach, One Piece and Dotka 2 top.
						</p>
					</div>
				</div>
				<div className={styles.right}>
					<img src={aboutMe} alt='about me' />
				</div>
			</div>
		</div>
	)
}

export default AboutMe
