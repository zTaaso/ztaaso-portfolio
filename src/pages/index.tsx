import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Home</h1>

    <ul>
      <li>
        <a href="/about">About with Anchor</a>
      </li>
      <li>
        <Link to="/about">About with Gatsby Link</Link>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
