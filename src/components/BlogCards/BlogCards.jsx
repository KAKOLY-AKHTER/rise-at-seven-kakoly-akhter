import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import BlogCard from '../BlogCard'
import 'swiper/css'
import 'swiper/css/pagination'
import './BlogCards.css'

const blogPosts = [
  {
    id: 1,
    title: 'Rise at Seven Appoints Hollie Lovell as Senior Operations Lead',
    author: 'Ray Saddiq',
    authorImg: '/images/blog/author-ray.jpg',
    readTime: '3 mins',
    tag: null,
    image: '/images/blog/blog-1.jpg',
    href: '/blog/rise-at-seven-appoints-new-senior-ops-lead',
  },
  {
    id: 2,
    title: 'Rise at Seven Exits Sheffield and Triples Manchester as new HQ as they go for global expansion',
    author: 'Ray Saddiq',
    authorImg: '/images/blog/author-ray.jpg',
    readTime: '2 mins',
    tag: null,
    image: '/images/blog/blog-2.png',
    href: '/blog/rise-at-seven-announces-new-global-hq-in-manchester',
  },
  {
    id: 3,
    title: "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
    author: 'Carrie Rose',
    authorImg: '/images/blog/author-carrie.jpg',
    readTime: '2 mins',
    tag: 'News',
    image: '/images/blog/blog-3.jpg',
    href: '/blog/global-operations-director-promotion',
  },
]

const splitChars = (text) =>
  text.split('').map((ch, i) => (
    <span key={i} className="bc-char">
      <span className="bc-char-inner">{ch}</span>
    </span>
  ))

export default function BlogCards() {
  const swiperRef = useRef(null)

  return (
    <section className="blog-section">
      <div className="blog-outer-grid">
        <div className="blog-header-col">
          <div className="blog-header-grid">
            <div className="blog-heading-cell">
              <h2 className="blog-heading" aria-label="What'sNew">
                <div className="blog-heading-inner" aria-hidden="true">
                  <div className="blog-heading-flex">
                    <span className="blog-word">{splitChars("What's")}</span>
                    <span className="blog-heading-img">
                      <picture>
                        <img
                          src="/images/blog/heading.jpg"
                          alt=""
                          className="blog-heading-img-el"
                        />
                      </picture>
                    </span>
                    <span className="blog-word">{splitChars('New')}</span>
                  </div>
                </div>
              </h2>
            </div>
            <div className="blog-cta-cell">
              <a href="/blog" className="blog-cta">
                <div className="blog-cta-inner">
                  <div className="blog-cta-text">
                    <span>Explore More Thoughts</span>
                    <span className="blog-cta-arrow">↗</span>
                  </div>
                  <div className="blog-cta-text blog-cta-text-dupe">
                    <span>Explore More Thoughts</span>
                    <span className="blog-cta-arrow">↗</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="blog-carousel-col">
          <div className="blog-carousel">
            <Swiper
              modules={[Pagination]}
              pagination={{
                clickable: true,
                type: 'progressbar',
                el: '.blog-progressbar',
              }}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1.3, spaceBetween: 20 },
                1024: { slidesPerView: 3, spaceBetween: 20 },
              }}
              speed={1000}
              onSwiper={(swiper) => { swiperRef.current = swiper }}
            >
              {blogPosts.map((post) => (
                <SwiperSlide key={post.id}>
                  <BlogCard post={post} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="blog-progress-wrap">
            <div className="blog-progressbar swiper-pagination-progressbar" />
          </div>
        </div>

        <div className="blog-cta-mobile-col">
          <a href="/blog" className="blog-cta blog-cta-mobile">
            <div className="blog-cta-inner">
              <div className="blog-cta-text">
                <span>Explore More Thoughts</span>
                <span className="blog-cta-arrow">↗</span>
              </div>
              <div className="blog-cta-text blog-cta-text-dupe">
                <span>Explore More Thoughts</span>
                <span className="blog-cta-arrow">↗</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
