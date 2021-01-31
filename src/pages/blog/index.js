import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="p-8 bg-gray-700 text-white">
          <h1 className="text-3xl font-bold text-center">
            Blog
          </h1>
        </div>
        <section className="section">
          <div className="container max-w-4xl mx-auto">
            <BlogRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
