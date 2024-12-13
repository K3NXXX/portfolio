import React from 'react'
import styles from './ProjectItem.module.scss'
import { IProject } from '../../../../lists/projectsList'

interface IProjectItemProps {
	project: IProject
}

const ProjectItem: React.FC<IProjectItemProps> = ({project}) => {
	return (
		<div className={styles.root}>
			<div className={styles.image__wrapper}>
				<img src={project.image} alt='project' />
				<p className={styles.name}>{project.name}</p>
				<p className={styles.type}>{project.type} website</p>
				<p className={styles.description}>{project.shortDescription}</p>
				<button className={styles.viewProjectBtn}>View project</button>
			</div>
			
		</div>
	)
}

export default ProjectItem
