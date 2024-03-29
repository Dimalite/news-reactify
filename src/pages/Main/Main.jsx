import { useEffect, useState } from 'react';
import NewsBanner from '../../components/NewsBanner/NewsBanner';
import NewsList from '../../components/NewsList/NewsList';
import styles from './styles.module.css';
import { getNews } from '../../api/apiNews';

const Main = () => {
	const [news, setNews] = useState([]);
useEffect(() => {
   const fetchNews = async () => {
		try {
			const response = await getNews();
			console.log(response.news)
			setNews(response.news)
		} catch (error) {
			console.log(error)
		}
	 }
	 fetchNews()
}, [])

	return (
    <main className={styles.main}>
			
		{news.length > 0 ? <NewsBanner item={news[0]}/> : null}
		<NewsList news={news} />
		</main>
	)
}

export default Main