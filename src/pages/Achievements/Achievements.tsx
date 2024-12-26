import { styled } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'
import Pagination from '@mui/material/Pagination'
import React, { useState } from 'react'
import { achievementsList } from '../../lists/achievementsList'
import styles from './Achievements.module.scss'
import { motion } from 'motion/react'

const UncheckedIcon = styled('div')(() => ({
  width: '24px',
  height: '24px',
  border: '2px solid rgb(232, 74, 74)',
}))

const CheckedIcon = styled('div')(() => ({
  width: '24px',
  height: '24px',
  border: '2px solid rgb(232, 74, 74)',
  backgroundColor: 'rgb(0, 0, 0)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}))

const InnerCheckedIcon = styled('div')(() => ({
  width: '14px',
  height: '14px',
  backgroundColor: 'rgb(232, 74, 74)',
  margin: '3px',
}))

const StyledTooltip = styled(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: 'rgb(232, 74, 74)',
    color: 'rgb(255, 255, 255)',
    fontSize: '1rem',
    borderRadius: '0px',
    padding: '10px 15px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '200px',
    textAlign: 'center',
    lineHeight: "15px"
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: 'rgb(232, 74, 74)', 
  },
}));

const CustomPagination = styled(Pagination)(() => ({
  '& .MuiPaginationItem-root': {
    color: '#e84a4a',
    width: '36px', 
    height: '36px', 
    borderRadius: '0', 
  },
  '& .MuiPaginationItem-root.Mui-selected': {
    backgroundColor: '#992626', 
    color: '#fff',
    borderRadius: '0'
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: 'rgba(232, 74, 74, 0.1)', 
    borderRadius: '0',
  },
}))


const Achievements: React.FC = () => {
  const [page, setPage] = useState(1)
  const [achievedChecked, setAchievedChecked] = useState(false)
  const [inProgressChecked, setInProgressChecked] = useState(false)

  const itemsPerPage = 18
  const totalPages = Math.ceil(achievementsList.length / itemsPerPage)

 
  const filteredAchievements = achievementsList.filter((achievement) => {
    if (achievedChecked && achievement.progress === "achieved") return true
    if (inProgressChecked && achievement.progress === "notAchieved") return true
    return !achievedChecked && !inProgressChecked
  })

  const currentAchievements = filteredAchievements.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <motion.div
    className={styles.root}
    initial={{
      opacity: 0,
      y: -50,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
              duration: 0.7,
      ease: 'easeOut',
    }}
  >
      <h1>Achievements</h1>
      <div className={styles.content}>
        <div className={styles.filters}>
          <div className={styles.filters__left}>
            <p>Filter: </p>
          </div>
          <div className={styles.filters__right}>
            <div>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={
                  <CheckedIcon>
                    <InnerCheckedIcon />
                  </CheckedIcon>
                }
                checked={achievedChecked}
                onChange={(e) => setAchievedChecked(e.target.checked)}
                inputProps={{ 'aria-label': 'achieved' }}
              />
              <p>Achieved</p>
            </div>
            <div>
              <Checkbox
                icon={<UncheckedIcon />}
                checkedIcon={
                  <CheckedIcon>
                    <InnerCheckedIcon />
                  </CheckedIcon>
                }
                checked={inProgressChecked}
                onChange={(e) => setInProgressChecked(e.target.checked)}
                inputProps={{ 'aria-label': 'in progress' }}
              />
              <p>In progress</p>
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          {currentAchievements.map((achievement) => (
            <StyledTooltip
              key={achievement.id}
              title={achievement.description}
              placement="top"
              arrow
              className={styles.tooltip}
            >
              <div
                className={`${styles[achievement.type]} ${
                  achievement.progress === "notAchieved" ? styles.notAchieved : ""
                }`}
              >
                <img src={achievement.image} alt="achievement" />
                <p className={styles.type}>{achievement.type}</p>
                <p className={styles.name}>{achievement.name}</p>
              </div>
            </StyledTooltip>
          ))}
        </ul>
        <CustomPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          className={styles.pagination}
        />
      </div>
    </motion.div>
  )
}
export default Achievements
