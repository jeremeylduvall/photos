import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 935,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      { children() }
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
