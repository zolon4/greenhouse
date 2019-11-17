import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function courseTemplate({
  data: {
    airtable: { data: course },
  },
}) {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row h-full">
        <div className="px-8 w-full">
          <h1 className="text-6xl md:fixed leading-none mb-8 course-name">
            {course.name}
          </h1>
          <p className="text-4xl md:text-5xl mb-10 w-full md:w-3/4">
            {course.description}
          </p>
          <p className="text-xl mb-10">{course.address}</p>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetCourse($path: String!) {
    airtable(table: { eq: "Courses" }, data: { path: { eq: $path } }) {
      data {
        par
        price
        name
        description
        city
        address
        slug
        Attachments {
          url
        }
      }
    }
  }
`
