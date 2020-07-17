import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Right Folks" />
    <div style={{ maxWidth: `300px`, margin: `auto` }}>
      <Image />
    </div>
    <h2 style={{textAlign: `end`, color: `rebeccapurple`}}>Coming soon...</h2>
  </Layout>
)

export default IndexPage
