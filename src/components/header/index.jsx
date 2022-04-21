import React from "react"
import css from "./header.module.css"

export default function Header() {
  return (
    <header className={css.header_container}>
      <img src="" alt="" />
      <h1>
        <a
          href="https://github.com/" 
          target="_blank"
          rel="noreferrer"
          className={css.title}
        >
          GitHub Search
        </a>
      </h1>
    </header>
  )
}
