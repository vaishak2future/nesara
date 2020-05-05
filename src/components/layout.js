import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../utils/typography"
let color = 'green'

export default function Layout({ children }) {return (  <div
    css={css`
      margin: 0 auto;
      max-width: 1050px;
      padding: ${rhythm(2)};
      padding-top: ${rhythm(1.5)};
    `}
  >
    <Link to={`/`}>
      <h3
        css={css`
          margin-bottom: ${rhythm(2)};
          display: inline-block;
          font-style: normal;
          &:hover {
            color: ${color};
          }
        `}
      >
        Nesara Agri
      </h3>
    </Link>

    <Link
      to={`/about/`}
      css={css`
        float: right;
        margin-left:10px;
      `}
    >
      About
    </Link>
    <Link
      to={`/`}
      css={css`
        float: right;
      `}
    >
      Home
    </Link>
    {children}
  </div>
)}