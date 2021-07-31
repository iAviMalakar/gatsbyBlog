import React from 'react'
import {useStaticQuery, graphql, navigate} from 'gatsby'
import Img from "gatsby-image" 
import {ImLocation} from 'react-icons/im'
import './Cards.css'


const Cards = ({heading}) => {
  const data =  useStaticQuery(graphql`
  query CardsQuery {
    allContentfulBlog {
      edges {
        node {
          id
          slug 
          title
          shortDescription
          featuredImage {
            fluid {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }  
`)

function getCard(data) {
  const cradArray = []
  data.allContentfulBlog.edges.forEach((item, index) => {
    cradArray.push(
      <div className='ProductCard' key = {index} onClick={() => navigate(`/blog/${item.node.slug}`)}>
        <Img className='ProductImg' src={item.node.featuredImage.fluid.src}
        fluid={item.node.featuredImage.fluid} />
        <div className='ProductInfo'>
          <div className='TextWrap'>
            <ImLocation />
            <div className='ProductTitle'>{item.node.title}</div>
          </div>
          <div className='ProductDesc'>{item.node.shortDescription}</div>
        </div>
      </div>
    )
  })
  return cradArray
}
  return (
   <div className='BlogContainer'>
     <div className='BlogHeading'>{heading}</div>
     {/* <div className=""><p>Throughout my lives, people have thought that because I keep traveling and 
       searching for new things to do, I am not focused. They have often thought that I 
       was flaky or unfocused. But travelling helped me find my purpose and put focus into 
       our lives. The more I got lost in my travels, the richer my life became.</p></div> */}
     <div className='ProductWrapper'>{getCard(data)}</div>
   </div>
  )
}

export default Cards

