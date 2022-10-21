import { Link } from 'react-router-dom'

const Menu = ({ showAddArticle }) => {

    return (
        <div className="menu">
            <ul>
                <Link to="/" className="active">Home</Link>
                <Link to="/articles">Articles</Link>
                <li>Categories</li>
            </ul>
            <Link to="/articles/new" className="button">
                New article
            </Link>
        </div>
    )
}

export default Menu