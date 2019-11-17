import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

function IndexPage() {
  const data = useStaticQuery(graphql`
    {
      allAirtable {
        edges {
          node {
            data {
              par
              name
              city
              path
            }
          }
        }
      }
    }
  `)

  let courses = data.allAirtable.edges
  var item = courses[Math.floor(Math.random() * courses.length)].node.data
  window.location.href = `/${item.path}`
  return <div className="h-screen w-screen bg-yellow" />
}

export default IndexPage
