import React from 'react'
import styles from './product.module.scss'

function Content() {
    return (
        <div className={styles.container}>
            <div>
                <p>Home</p>
            </div>
            <div className={styles.wrapFunction}>
                <p>Search</p>
                <p>Function</p>
            </div>
            <div className={styles.wrapFilter}>
                <p>Filter</p>
            </div>
        </div>
    )
}

export default Content
