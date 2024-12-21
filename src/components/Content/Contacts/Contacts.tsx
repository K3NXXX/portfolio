import 'animate.css'
import React, { useRef, useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useOnClickOutside } from 'usehooks-ts'
import { contactsList } from '../../../lists/contactsList'
import styles from './Contacts.module.scss'

interface IContactsProps {
	handleClose: () => void
}

const Contacts: React.FC<IContactsProps> = ({ handleClose }) => {
	const [animation, setAnimation] = useState('animate__fadeInUp')
	const ref = useRef(null)

	

	const onClose = () => {
		setAnimation('animate__fadeOutDown')
		setTimeout(() => {
			handleClose()
		  }, 500); 
	}

	useOnClickOutside(ref, onClose)
	return (
		<div className={styles.overlay}>
			<div
				ref={ref}
				className={`${styles.root} animate__animated ${animation}`}
			>
				<div className={styles.wrapper}>
					<div className={styles.top}>
						<h6>Contacts</h6>
						<IoMdClose
							className={styles.close}
							onClick={onClose}
							size={30}
							color='white'
						/>
					</div>
					<div className={styles.content}>
						<ul className={styles.contacts__list}>
							{contactsList.map(item => (
								<div key={item.id} className={styles.row}>
									<p className={styles.name}>{item.name}</p>
									{item.name === 'Telegram' || item.name === 'GitHub' ? (
										<a href={item.description} className={styles.text}>
											{item.description}
										</a>
									) : (
										<p className={styles.text}>{item.description}</p>
									)}
								</div>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
