import React, { useEffect, useState } from "react"
import User from "../user"
import css from "./search.module.css"

export default function Search() {
  const[ searchKey, setSearchKey ] = useState("")
  const[ loading, setLoading ] = useState(false)
  const[ users, setUsers ] = useState([])
  const[ focused, setFocused ] = useState(false)

  useEffect(()=>{
    if(searchKey){
      setLoading(true)
      fetch(`https://api.github.com/search/users?q=${searchKey}&per_page=5`,{ method: "GET"} )
        .then((res)=>res.json())
        .then((data)=>{
          setUsers(data.items)
          setLoading(false)
        })
    }
  },[searchKey])

  function onChange (e) {
    setSearchKey(e.target.value)
  }
  function focus() {
    setFocused(true)
  }
  function blur() {
      setFocused(false)
  }

  return (
    <>
      <h2 className={css.small_title} >find github users here fast and easy.</h2>
      <div className={css.search_container}>
        <div className={css.search_wrapper}>
          <textarea 
            className={`${css.search_textarea} ${loading? css.loader :''}`}
            value = { searchKey } 
            onChange = { onChange } 
            onFocus = { focus }
            onBlur = { blur }
            placeholder="Search GitHub users"
            type="text" 
          />
        </div>
      </div>
        <div className={css.users_container}>
          <ul className={css.users_wrapper}>
            {
              searchKey && focused && users && !loading?
              users.map((user)=>{
                return<User 
                  key={user.id} 
                  login={user.login} 
                  avatarUrl={user.avatar_url} 
                  htmlUrl={user.html_url} 
                  setSearchKey={setSearchKey} 
                />
              })
              : 
              !users && !loading? <div className={css.error_massage}>
                <h1 className={css.loading}>
                  GitHub API has requests limit. please wait few seconds and try again.
                </h1>
              </div>: ''
            }
          </ul>
        </div>
    </>
  )
}
