import { styled } from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import Tooltip from '@mui/material/Tooltip'
import Pagination from '@mui/material/Pagination'
import React, { useState } from 'react'
import { achievementsList } from '../../lists/achievementsList'
import styles from './Achievements.module.scss'

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

const StyledTooltip = styled(Tooltip)(() => ({
  '.MuiTooltip-tooltip': {
    backgroundColor: '#333', // Dark background color
    color: '#f80000', // White text
    fontSize: '1rem', // Slightly larger font
    borderRadius: '6px', // Rounded corners
    padding: '10px 15px', // Padding around the text
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow
    maxWidth: '200px', // Maximum width for tooltip
    textAlign: 'center', // Centered text
  },
  '.MuiTooltip-arrow': {
    color: '#db0202', // Match the tooltip background color
  },
  PopperProps: {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10], // You can adjust the positioning here
        },
      },
    ],
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
  const itemsPerPage = 18
  const totalPages = Math.ceil(achievementsList.length / itemsPerPage)

  const currentAchievements = achievementsList.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
  }

  return (
    <div className={styles.root}>
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
                inputProps={{ 'aria-label': 'controlled' }}
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
                inputProps={{ 'aria-label': 'controlled' }}
                className={styles.checkbox}
              />
              <p>In progress</p>
            </div>
          </div>
        </div>
        <ul className={styles.list}>
          {currentAchievements.map(achievement => (
            <StyledTooltip
              key={achievement.id}
              title={achievement.description}
              placement="bottom"
              arrow
              className={styles.tooltip}
            >
              <div className={`${styles[achievement.type]} ${achievement.progress === "notAchieved" ? styles.notAchieved : ""}`}>
                <img src={achievement.image} alt='achievement' />
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
    </div>
  )
}

export default Achievements
