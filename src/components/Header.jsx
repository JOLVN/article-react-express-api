import Menu from './Menu'

const Header = ({ showAddArticle }) => {

    return (
        <header className="header">
            <Menu showAddArticle={showAddArticle} />
        </header>
    )
}

export default Header