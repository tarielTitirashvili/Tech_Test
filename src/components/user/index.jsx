import React from "react"
import css from "./user.module.css"
export default function User(props) {
  const { login, avatarUrl, htmlUrl } = props

  function preventBlur(event) {
    event.preventDefault()
  }

  return (
    <>
      <a 
        id="user"
        className={css.user_container}
        onMouseDown={preventBlur}
        href={ htmlUrl } 
        target="_blank"
        rel="noreferrer"
      >
        <img className={css.image} src={ avatarUrl } alt={ login } />
        <h3 className={css.login}>
            { login }
        </h3>
      </a>
      <div className={css.line}></div>
    </>

  )
}
