import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'


const PostsPage = ({ data }) => {
  const {allMdx:{nodes:posts}} = data
  return <Layout>
    <Hero />
    <Posts posts={posts} title="記事一覧" />
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        excerpt
        frontmatter {
          title
          author
          category
          date(formatString: "YYYY年MM月DD日")
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

export default PostsPage
