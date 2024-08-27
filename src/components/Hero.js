import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Hero = () => {
  const peopleData = useStaticQuery(graphql`
    query PeopleQuery {
      allPeopleJson {
        edges {
          node {
            id
            name
            phone
          }
        }
      }
    }
  `)

  const people = peopleData.allPeopleJson.edges

  console.log("people", people)

  return (
    <>
      <h1>This is the Hero section</h1>
      <h2>All People Names</h2>
      <ul>
        {people.map(({ node }) => (
          <li>
            <strong>{node.name}</strong>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Hero
