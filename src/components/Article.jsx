import { Link } from 'react-router-dom'

const Article = ({ article }) => {


    return (
        <Link to={`/articles/${article.id}`}>
            <article className="article" >
                <h1>{article.title}</h1>
                <img src={article.image} alt="article" />
                <p className="truncate">{article.content}</p>
                <p className="information">Click to see more</p>
                <ul className="categories">
                    {article.categories.map(category => {
                        return (
                            <div>
                                <li>{category.title}</li>
                            </div>
                        )

                    })}
                </ul>
            </article>
        </Link>
    )
}

export default Article