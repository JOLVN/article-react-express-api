import { useEffect, useState } from 'react'

import Article from '../components/Article'

import getData from '../utils/getData'

const Home = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        let articlesHydrated = [];

        getData('http://localhost:3005/articles', (articlesResponse) => {
            for (const article of articlesResponse) {
                article.categories = []
                for (const category of article._links.categories) {
                    getData(category.href, (categoriesResponse) => {
                        article.categories.push(categoriesResponse)
                        articlesHydrated.push(article)
                        setArticles(articlesResponse)
                    })
                }
            }
        })
    }, [])

    return (
        <div className="home-page">
            <h1>Headlines</h1>
            {articles.map(article => {
                return (
                    <Article article={article} />
                )
            })}
        </div>
    )
}

export default Home