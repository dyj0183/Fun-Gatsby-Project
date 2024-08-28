import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

const Hero = () => {
  const hobbyData = useStaticQuery(graphql`
    query HobbyQuery {
      allHobbyJson {
        edges {
          node {
            name
          }
        }
      }
    }
  `)

  const hobbies = hobbyData.allHobbyJson.edges

  return (
    <>
      <CenteredContainer>
        <h1>Hi guys, This is Yu-Chun Tung</h1>
        <h2>I'm passionate about:</h2>
      </CenteredContainer>
      <RotatingTextContainer>
        {hobbies.map(({ node }, index) => (
          <RotatingText key={index} style={{ animationDelay: `${index * 3}s` }}>
            {node.name.toUpperCase()}!
          </RotatingText>
        ))}
      </RotatingTextContainer>
    </>
  )
}

export default Hero

const fadeInOut = keyframes`
  0%, 25%, 100% {
    opacity: 0;
    transform: translateY(100%);
  }
  5%, 20% {
    opacity: 1;
    transform: translateY(0);
  }
`

const RotatingTextContainer = styled.div`
  position: relative;
  height: 30px; /* Adjust to the height of a single line of text */
  overflow: hidden; /* Hide the overflowing text */
  margin-top: 10px;
`

const RotatingText = styled.div`
  position: absolute;
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  color: #ff4500;
  text-align: center;
  animation: ${fadeInOut} 9s ease-in-out infinite;
`
const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */

  text-align: center; /* Center text alignment */
  padding: 20px;
`
