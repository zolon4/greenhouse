import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

export default function courseTemplate({ data: {airtable: {data: course}} }) {
  console.log(course)
  return (
    <Layout>
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-1/4 flex flex-row overflow-y md:flex-col w-images overflow-scroll">
          {course.Attachments.map((a, index) => {
            return <div className="w-56 md:w-full h-48 mr-5 md:mr-0 mb-5 bg-cover bg-center flex-shrink-0" key={`images${index}`} style={{ backgroundImage: `url(${a.url})` }} />
          })}
        </div>
        <div className="px-8 w-3/4 overflow-scroll">
          <h1 className="text-6xl leading-none">{course.name}</h1>
          <h2 className="text-6xl leading-none mb-10">{course.city}</h2>
          <p className="text-xl mb-10">Par {course.par}</p>
          <p className="text-xl mb-10">{course.address}</p>
          <p className="text-xl mb-10">{course.description}</p>
          <p className="text-xl mb-10">Pricing: {course.price}</p>
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