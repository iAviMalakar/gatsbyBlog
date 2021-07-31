import React from 'react'
import {Link, graphql, navigate} from 'gatsby'
import Header from '../components/Header'
import './archieve.css'
import blog_background from '../video/blog_background.jpg'


const archieve = (props) => {

    const blogContent = props.data.allContentfulBlog
  // const { currentPage, numPages} = props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage = currentPage - 1 === 1 ? '/blog' : `/blog/${currentPage - 1}`
    // const nextPage = `/blog/${currentPage + 1}`
     
    return (
       <div >
           <Header />
           <div className='achieve_hero' style={{backgroundImage: `
             url(${blog_background})`}}></div>
           <div className='archieve_section'>
               <div className='archiev_nav'>
                   <Link to ="/blog"></Link>
               </div>
           </div>
           <div className='feed'>
                {blogContent.edges.map(edge => (
                    <div key={edge.node.id} className='card'
                    style={{
                        backgroundImage: `url(${edge.node.featuredImage.fluid.src})`
                    }}
                    onClick={() => navigate(`/blog/${edge.node.slug}`)}>
                        <p className='card_title'>{edge.node.title}</p>
                    </div>
                ))}
           </div>
            {/* <div className='pagination'>
               <div className='pagination_item'>
                   {isFirst && (
                       <Link to = {prevPage} rel='prev'>
                           <div className='arrow_back'></div>
                       </Link>
                   )}
               </div>
               <div className='pagination_item'>
                   {isLast && (
                       <Link to = {nextPage} rel='next'>
                           <div className='arrow_next'></div>
                       </Link>
                   )}
               </div>
           </div> */}
           
       </div>
       
        
    )
}

export default archieve

export const pageQuery = graphql`
query ArchieveQuery($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      sort: {fields: createdAt, order: DESC}
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          slug
          title
          createdAt
          category {
            id
          }
          featuredImage {
            fluid(maxWidth: 1200, quality: 85) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
