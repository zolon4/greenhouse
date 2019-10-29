import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="h-full w-full flex items-center justify-center -mt-16 fixed ">
      <div className="w-56 h-56 bg-yellow rounded-full" />
    </div>
  </Layout>
)

export default NotFoundPage
