import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


function IndexPage({data: {allAirtable: {edges}}}) {

  let courses = edges.map(e => e.node.data)
  console.log(courses)

  return (
    <Layout>
      <SEO title="Greenhouse" />
      <div>
        <h1 className="text-5xl text-green">Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </div>

    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable {
      edges {
        node {
          data {
            par
            price
            name
            description
            city
            address
            Attachments {
              url
            }
          }
        }
      }
    }
  }
`

export default IndexPage
