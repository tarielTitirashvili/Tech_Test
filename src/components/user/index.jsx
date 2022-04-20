import React from "react"
import css from "./user.module.css"
export default function User(props) {
  const { login, avatarUrl, htmlUrl, setSearchKey } = props

  function preventBlur(event) {
    event.preventDefault()
  }
  function setKey() {
    setSearchKey(login)
  }
  return (
    <>
      <a 
        className={css.user_container}
        onMouseDown={preventBlur}
        onClick={setKey}
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
