import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'


const CategoryTemplate = props => {
  const {
    pageContext:{category}
  } = props
  const {
    data:{
      categories:{nodes:posts}
    }
  } = props
  return <Layout>
    <Hero />
    <Posts posts={posts} title={`category / ${category}`}/>
  </Layout>
}

export const query = graphql`
  query GetCategories($category: String){
    categories:allMdx(sort: {fields: frontmatter___date, order: DESC}, 
      filter: {frontmatter: {category: {eq: $category}}}) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "YYYY年 MM月 DD日")
          slug
          readTime
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`

export default CategoryTemplate
