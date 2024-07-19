import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {isLoading: true, blogDetails: {}}
  componentDidMount() {
    this.getBlogDetails()
  }
  getBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updaterData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogDetails: updaterData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogDetails
    return (
      <div className="blog-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-details-container">
            <h1 className="title-head">{title}</h1>
            <div className="author-container">
              <img src={avatarUrl} alt={author} className="author-img" />
              <p className="author-name">{author}</p>
            </div>
            <img src={imageUrl} alt={title} className="img" />
            <p className="content-para">{content}</p>
          </div>
        )}
      </div>
    )
  }
}
export default BlogItemDetails
