import React from 'react'
import Img from 'gatsby-image'
import {useStaticQuery, graphql} from 'gatsby' 
import './About.css'




const About = () => {
    const data = useStaticQuery(
        graphql`
        query {
            allContentfulAbout {
              edges {
                node {
                  title
                  name
                  content
                  featuredImage {
                    fluid(quality: 100) {
                      src
                      ...GatsbyContentfulFluid
                    }
                  }
                }
              }
            }
          }
          
        `
    )
    return (
       data.allContentfulAbout.edges.map((item, index)=>(
        <div className='AboutContainer' key={index}>
        <div className='TopLine'>
            {item.node.title}
        </div>
        <div className='ContentWrapper'>
            <div className='ColumnOne'>
                <div className='AboutContent'>
                    <h3>{item.node.name}</h3>
                    <p>{item.node.content}</p>
                </div>
            </div>
            <div className='ColumnTwo'>
                <Img className='BloggerImg' key={index} fluid={item.node.featuredImage.fluid}/>
           </div>
        </div>
        </div>
       ))
    )
       
}

export default About

