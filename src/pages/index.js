import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from "../layouts/index"
import Banner from './LandingPage/Banner'


export default () => (
  <StaticQuery
    query={graphql`
      query CatalogueQuery {
        products: allDatoCmsProduct {
          edges {
            node {
              id
              name
              price
              image {
                url
                sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
                  ...GatsbyDatoCmsSizes
                }
              }
            }
          }
        }
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `}
render={data => (
  <Layout site={data.site}>
    <div className="main-container">
      <Banner />
    </div>
  </Layout>
     )}
   />
)
