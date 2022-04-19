import React from "react"
import css from "./user.module.css"
export default function User(props) {
  const { login, avatarUrl, htmlUrl } = props

  return (
    <a 
      className={css.user_container}
      href={ htmlUrl } 
      target="_blank"
      rel="noreferrer"
    >
      <img className={css.image} src={ avatarUrl } alt={ login } />
      <h3>
          { login }
      </h3>
    </a>
  )
}
