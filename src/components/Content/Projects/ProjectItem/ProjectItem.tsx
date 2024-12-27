import React from 'react'
import { Link } from 'react-router-dom'
import { PAGES } from '../../../../constants/pages.constants'
import { IProject } from '../../../../lists/projectsList'
import styles from './ProjectItem.module.scss'

interface IProjectItemProps {
	project: IProject
}

const ProjectItem: React.FC<IProjectItemProps> = ({ project }) => {
	return (
		<div className={styles.root}>
			<div className={styles.image__wrapper}>
				<img src={project.demoImage} alt='project' />
				<p className={styles.name}>{project.name}</p>
				<p className={styles.type}>{project.type} website</p>
				<p className={styles.description}>{project.shortDescription}</p>
				<Link
					to={`${PAGES.PROJECT}/${project.id}`}
					className={styles.viewProjectBtn}
				>
					View project
				</Link>
			</div>
		</div>
	)
}

export default ProjectItem
