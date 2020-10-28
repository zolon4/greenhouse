import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import flag from "../images/flag.svg"

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
  console.log(item)
  return (
    <div className="h-screen w-screen bg-green flex items-center justify-center flex-col">
      <Link className="text-yellow" to={`/${item.path}`}>
        <img src={flag} className="w-full md:max-w-3xl" />
      </Link>
    </div>
  )
}

export default IndexPage
