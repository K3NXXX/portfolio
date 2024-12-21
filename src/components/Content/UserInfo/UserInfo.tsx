import { IoIosBluetooth } from 'react-icons/io'
import { RiDashboardHorizontalLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import avatar from '../../../assets/userInfo/avatar.png'
import { PAGES } from '../../../constants/pages.constants'
import style from './UserInfo.module.scss'
import Contacts from '../Contacts/Contacts'
import { useState } from 'react'

const UserInfo: React.FC = () => {
	const [openContacts, setOpenContacts] = useState(false)
	const handleClose = () => setOpenContacts(false)
	return (
		<aside className={style.root}>
			<div className={style.wrapper}>
				<img className={style.avatar} src={avatar} alt='avatar' />
				<div className={style.content}>
                    <div className={style.info__wrapper}>
                    <div className={style.info}>
						<div className={style.name}>
							<span>Name</span>
							<p>Volodya Andrushevskyi</p>
						</div>
						<div className={style.occupation}>
							<span>Occupation</span>
							<p>Web developer</p>
						</div>
					</div>

					<div className={style.buttons}>
						<div onClick={() => setOpenContacts(true)} className={style.btn__wrapper}>
							<button className={style.openSocial}>Open connection</button>
							<IoIosBluetooth
								className={style.icon}
								size={25}
								color='#e84a4a'
							/>
						</div>
						<Link to={PAGES.PROJECTS} className={style.btn__wrapper}>
							<button className={style.openProjects}>Open projects</button>
							<RiDashboardHorizontalLine
								className={style.icon}
								size={25}
								color='#e84a4a'
							/>
						</Link>
					</div>
                    </div>
					
					<div className={style.motto}>
						<span>Motto:</span>
						<p> Turning Ideas into Interactive Realities</p>
					</div>
				</div>
			</div>
			{openContacts && <Contacts handleClose={handleClose}/>}
		</aside>
	)
}

export default UserInfo
