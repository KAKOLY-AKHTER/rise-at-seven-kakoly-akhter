import { useCallback } from 'react'
import './BlogCard.css'

export default function BlogCard({ post }) {
  const handleMouseOver = useCallback(() => {
    window.dispatchEvent(new CustomEvent('component-cursor', { detail: { active: true, icon: 'fa-arrow-up-right' } }))
  }, [])

  const handleMouseLeave = useCallback(() => {
    window.dispatchEvent(new CustomEvent('component-cursor', { detail: { active: false, icon: false } }))
  }, [])

  return (
    <a
      href={post.href}
      className="blog-card-link circle-mask-container"
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <div className="blog-card-grid">
        {post.tag && (
          <div className="blog-card-tags">
            <span className="blog-card-tag">{post.tag}</span>
          </div>
        )}
        <div className="blog-card-blur-bg circle-mask">
          <picture>
            <img src={post.image} alt="" className="blog-card-blur-img" />
          </picture>
        </div>
        <div className="blog-card-image-wrap">
          <picture>
            <img src={post.image} alt={post.title} className="blog-card-image" />
          </picture>
        </div>
      </div>
      <div className="blog-card-content">
        <div className="blog-card-meta">
          <span className="blog-card-author">
            <span className="blog-card-avatar">
              <img src={post.authorImg} alt="" />
            </span>
            {post.author}
          </span>
            <span className="blog-card-time">
            <span className="blog-card-time-icon">⏱</span>
            {post.readTime}
          </span>
        </div>
        <h2 className="blog-card-title js-heading">{post.title}</h2>
      </div>
    </a>
  )
}
