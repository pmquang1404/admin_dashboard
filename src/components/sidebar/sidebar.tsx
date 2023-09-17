import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import styles from './sidebar.module.scss'

function Sidebar() {
    return (
        <div className={styles.container}>
            <ul className={styles.wrapList}>
                <li className={styles.listItems}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                    Page</li>
                <li className={styles.listItems}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                    Page</li>
                <li className={styles.listItems}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                    Page</li>
                <li className={styles.listItems}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                    Page</li>
                <li className={styles.listItems}>
                    <FontAwesomeIcon icon={faHouse} className={styles.icon} />
                    Page</li>
            </ul>

        </div>
    )
}

export default Sidebar
