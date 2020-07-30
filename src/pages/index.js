import React from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import SEO from '../components/SEO'

const IndexPage = ({data}) => {
  const {allMdx:{nodes:posts}} = data

  return <Layout>
    <Hero showPerson />
    <Posts posts={posts} title="最近の投稿"/>
  </Layout>
}

export const query = graphql`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 3) {
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

export default IndexPage
