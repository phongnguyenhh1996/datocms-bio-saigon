import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'

import '../style/index.scss'

const Layout = ({ children, site }) => (
  <div>
    <Helmet title="Snipcart + DatoCMS + GatsbyJS Example" />
    <div className="Container">
      <Header site={site} />
      {children}
      <Footer />
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

