import * as React from "react"
import About from "../components/About"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Cards heading="“Blogging is a conversation, not a code.”"/>
    <About/>
  </Layout>
)

export default IndexPage
