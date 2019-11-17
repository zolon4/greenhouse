import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header className="mb-0 pl-12 pt-12 ">
    <div>
      <h1 className="text-2xl">
        <Link className="text-yellow" to="/">
          <div className="bg-yellow w-24 h-24 rounded-full" />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
