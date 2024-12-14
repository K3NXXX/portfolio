import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Projects.module.scss'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { projectsList } from '../../../lists/projectsList'
import ProjectItem from './ProjectItem/ProjectItem'

const Projects: React.FC = () => {
  return (
    <div className={styles.root}>
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
          className='mySwiper'
        >
          <ul className={styles.projects__list}>
            {projectsList.map((project) => (
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
    </div>
  )
}

export default Projects
