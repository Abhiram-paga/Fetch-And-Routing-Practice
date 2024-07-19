import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  return (
    <Link to={`/blogs/${id}`} className="link">
      <div className="item-container">
        <img src={imageUrl} alt={`image${id}`} className="imgage" />
        <div className="avatar-container">
          <p className="topic">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="avatar-img-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="topic">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
