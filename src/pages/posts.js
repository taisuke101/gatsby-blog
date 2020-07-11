import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

// ...GatsbyImageSharpFluid
const PostsPage = ({ data }) => {
  return <>
    <Hero />
  </>
}

export default PostsPage
