
import styles from './styles.module.css';

const Image = ({image}) => {
	return (
    <div className={styles.banner}>
{image ? <img src={image} alt='mews' className={styles.image} /> : null}
		</div>
	)
}

export default Image