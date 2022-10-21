import { useEffect, useState } from 'react'

import getData from '../utils/getData'
import { useParams } from 'react-router-dom'

const AddArticlePage = () => {

    let { id } = useParams()

    const [article, setArticle] = useState([])
    const { title, image, content } = article;

    const url = `http://localhost:3005/articles/${id}`

    useEffect(() => {
        getData(url, (articleResponse) => {
            setArticle(articleResponse)
        })
    }, [])

    const handleSubmit = async (e) => {
        await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: article.title,
                image: article.image,
                content: article.content,
            })
        })
    }

    const handleDelete = async (e) => {
        await fetch(url, {
            method: 'DELETE',
        })
        // Redirect
        window.location.href = "/"
    }

    const onValueChange = (e) => {
        let articleForm = article;
        articleForm[e.target.id] = e.target.value
        setArticle(articleForm);
    }

    return (
        <div className="edit-article-page">
            <h1>Edit article</h1>
            <form onSubmit={handleSubmit}>
                <span>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Insert a title" defaultValue={title} onChange={onValueChange} />
                </span>
                <span>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" placeholder="Insert an image url" defaultValue={image} onChange={onValueChange} />
                </span>
                <span>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" defaultValue={content} onChange={onValueChange} />
                </span>
                <button className="button">
                    Update
                </button>
                <button className="button delete-button" onClick={handleDelete}>
                    Delete
                </button>
            </form>
        </div>
    )
}

export default AddArticlePage