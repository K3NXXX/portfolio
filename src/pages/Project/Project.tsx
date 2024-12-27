import { motion } from 'motion/react'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { IProject, projectsList } from '../../lists/projectsList'
import styles from './Project.module.scss'

const Project: React.FC = () => {
	const { id } = useParams<{ id: string }>()
	const projectId = Number(id)
	const project = projectsList.find((item: IProject) => item.id === projectId)

	const websiteUrl = project?.websiteUrl || '#'
	const githubUrl = project?.gitHubRepoUrl || '#'

	return (
		<motion.div
			className={styles.root}
			initial={{
				scale: 0.8,
				opacity: 0,
				y: 50,
			}}
			animate={{
				scale: 1,
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94], // Плавний "spring"-ефект
			}}
		>
			<h1>Project</h1>
			<div className={styles.content}>
				<motion.div
					className={styles.left}
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
				>
					<div className={styles.details}>
						<h3>Details</h3>
						<p className={styles.project__name_descr}>Project name</p>
						<p className={styles.project__name}>{project?.name}</p>
						<p className={styles.project__brief_descr}>Brief</p>
						<p className={styles.project__brief}>{project?.shortDescription}</p>
					</div>
					<div className={styles.technologies}>
						<h3>Technologies</h3>
						<p className={styles.technologies__name_descr}>Frontend</p>
						<p className={styles.technologies__name}>
							{project?.frontendTechnologies}
						</p>
						<p className={styles.technologies__name_descr_back}>Backend</p>
						<p className={styles.technologies__name}>
							{project?.backendTechnologies}
						</p>
					</div>
				</motion.div>
				<motion.div
					className={styles.right}
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ delay: 0.7, duration: 0.8, ease: 'easeOut' }}
				>
					<img src={project?.fullImage} alt='full project' />
					<div className={styles.buttons}>
						<div className={styles.btns__wrapper}>
							<motion.div
								whileHover={{ scale: 1.05, y: -5 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link to={websiteUrl}>Go to website</Link>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05, y: -5 }}
								whileTap={{ scale: 0.95 }}
							>
								<Link to={githubUrl}>Go to Github repo</Link>
							</motion.div>
						</div>
						<p className={styles.full__description}>
							{project?.fullDescription}
						</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	)
}

export default Project
