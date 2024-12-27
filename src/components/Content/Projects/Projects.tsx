import React from 'react'
import ProjectItem from './ProjectItem/ProjectItem'
import { projectsList } from '../../../lists/projectsList'
import { motion } from 'motion/react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import styles from './Projects.module.scss'

const Projects: React.FC = () => {
	return (
		<motion.div
			className={styles.root}
			initial={{
				opacity: 0,
				filter: 'blur(10px)',
			}}
			animate={{
				opacity: 1,
				filter: 'blur(0px)',
			}}
			transition={{
				duration: 0.8,
				ease: 'easeOut',
			}}
		>
			<h1>Projects</h1>
			<div className={styles.carousel}>
				<Swiper
					effect={'coverflow'}
					grabCursor={true}
					centeredSlides={true}
					slidesPerView={3}
					initialSlide={1}
					loop={true}
					coverflowEffect={{
						rotate: 50,
						stretch: 0,
						depth: 20,
						modifier: 1,
						slideShadows: true,
					}}
					pagination={true}
					modules={[EffectCoverflow, Pagination]}
					breakpoints={{
						1500: {
							slidesPerView: 3,
						},
						0: {
							slidesPerView: 'auto',
						},
					}}
					className='mySwiper'
				>
					<ul className={styles.projects__list}>
						{projectsList.map(project => (
							<SwiperSlide
								key={project.id}
								style={{
									position: 'relative',
									width: '410px',
									height: '502px',
								}}
							>
								<div
									className={styles.background}
									style={{
										backgroundImage: `url(${project.demoImage})`,
									}}
								/>
								<ProjectItem project={project} />
							</SwiperSlide>
						))}
					</ul>
				</Swiper>
			</div>
		</motion.div>
	)
}

export default Projects
