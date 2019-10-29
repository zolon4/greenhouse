import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Sidebar = ({ children }) => {
  const data = useStaticQuery(graphql`
    query coursesQuery {
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


  let courses = data.allAirtable.edges.map((e, i) => {
    let c = e.node.data
    return (
      <Link to={c.path} key={i}>
        <p className="text-lg">{c.name}</p>
        <small className="text-lg mb-4 block">{c.city} / Par {c.par}</small>
      </Link>
    )
  })

  return (
    <div className={`md:h-full md:w-1/4 md:flex-shrink-0 flex flex-row md:flex-col z-10`}>
      {courses}
    </div>
  )
}

export default Sidebar;