import React from 'react'
import styles from "./index.module.css"
import { getPagesList } from '../../utils/getPagesList'
import classNames from 'classnames'
import { Link } from 'react-router-dom'

const PageBar = ({ currentPage, totalPages }) => {
    const pages = getPagesList(currentPage, totalPages)

    return (
        <div className={styles.pageBar}>
            <Link to={`/${pages[0].page}`}>
                <span className={classNames(styles.page, pages[0].isCurrent && styles.currentPage)}>
                    {pages[0].page}
                </span>
            </Link>
        </div>
    )
}

export default PageBar