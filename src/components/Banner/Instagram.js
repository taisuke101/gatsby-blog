import React from 'react'
import Image from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import styled from 'styled-components'
import Title from './Title'


const query = graphql`
  {
    allInstaNode(limit: 6) {
      nodes {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Instagram = () => {
  const data = useStaticQuery(query)
  const {
    allInstaNode:{nodes}
  } = data
  return <Wrapper>
    <Title title="My Instagram" />
    <div className="imges">
      {nodes.map((item, index) => {
        const {
          localFile: {
            childImageSharp:{fluid}
          }
        } = item
        return <Image fluid={fluid} key={index} />
      })}
    </div>
  </Wrapper>
}

const Wrapper = styled.article`
  .images {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
  }
`

export default Instagram
