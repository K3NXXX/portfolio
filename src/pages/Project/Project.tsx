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
		<div className={styles.root}>
			<h1>Project</h1>
			<div className={styles.content}>
				<div className={styles.left}>
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
				</div>
				<div className={styles.right}>
					<img src={project?.fullImage} alt='full project' />
					<div className={styles.buttons}>
						<div className={styles.btns__wrapper}>
							<Link to={websiteUrl}>Go to website</Link>
							<Link to={githubUrl}>Go to Github repo</Link>
						</div>
						<p className={styles.full__description}>{project?.fullDescription}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
