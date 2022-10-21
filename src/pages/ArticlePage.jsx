import { useEffect, useState } from 'react'


import getData from '../utils/getData'
import { useParams, Link } from 'react-router-dom'

const ArticlePage = () => {

    let { id } = useParams()

    const [article, setArticle] = useState([])

    useEffect(() => {
        getData(`http://localhost:3005/articles/${id}`, (articleResponse) => {
            setArticle(articleResponse)
        })
    }, [id])


    return (
        <div className="article-page">
            <article>
                <h1>{article.title}</h1>
                <img src={article.image} alt="article" />
                <p>{article.content}</p>
                <Link to={`/articles/${article.id}/edit`} className="button">
                    Edit
                </Link>
            </article>
        </div>
    )
}

export default ArticlePage