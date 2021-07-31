import React from 'react';
import {graphql} from 'gatsby';
import Header from '../components/Header'
import './blog.css';

const BlogTemplate = (props) => {
    return (
        <div className='BlogLayout'>
            <Header />
            <div className='blog_header'>
                <div className='blog_hero' style={{backgroundImage: `url(${props.data.contentfulBlog.featuredImage.fluid.src})`}}></div>
                <div className='blog_info'>
                    <h1 className='blog_title'>{props.data.contentfulBlog.title}</h1>
                </div>
            </div>
            <div className='blog_wrapper'>
                <div className='blog_content'>
                    <div dangerouslySetInnerHTML={
                        {__html: `${props.data.contentfulBlog.content.childMarkdownRemark.html}`}
                    } />
                </div>
            </div>
        </div>
    )
}

export default BlogTemplate;


export const query = graphql`
    query BlogTemplate($id: String!){
        contentfulBlog(id: {eq: $id}) {
                id
                title
                slug
                shortDescription
                content {
                  childMarkdownRemark {
                    html
                  }
                }
                featuredImage {
                  fluid(maxWidth: 1200, quality: 100) {
                    ...GatsbyContentfulFluid
                    src
                  }
                }
            }
    }
`


