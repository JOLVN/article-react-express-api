const AddArticlePage = () => {

    return (
        <div className="edit-article-page">
            <h1>Add new article</h1>
            <form>
                <span>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" placeholder="Insert a title" />
                </span>
                <span>
                    <label htmlFor="image">Image</label>
                    <input type="text" name="image" id="image" placeholder="Insert an image url" />
                </span>
                <span>
                    <label htmlFor="content">Content</label>
                    <textarea name="content" id="content" />
                </span>
                <span className="button">
                    Add article
                </span>
            </form>
        </div>
    )
}

export default AddArticlePage