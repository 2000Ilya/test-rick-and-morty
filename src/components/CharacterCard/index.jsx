import classNames from "classnames"
import styles from "./index.module.css"

const CharacterCard = ({ name, status, gender, origin, characterImage }) => {
    return (
        <article className={styles.characterCard}>
            <div className={styles.textContainer}>
                <p className={classNames(styles.name, styles.boldText)}>{name}</p>
                <p className={classNames(styles.boldText, styles[status.toLowerCase()])}>{status}</p>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.regularText}>{gender}</p>
                <p className={styles.regularText}>{origin}</p>
            </div>
            <img className={styles.characterImage} src={characterImage} alt='' />
        </article>
    )
}

export default CharacterCard