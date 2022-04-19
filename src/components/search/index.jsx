import React, { useEffect, useState } from 'react'
import css from './search.module.css'

export default function Search() {
  const [searchKey, setSearchKey] = useState('')
  const[ loading, setLoading ] = useState(false)
  const[ users, setUsers ] = useState([])

  useEffect(()=>{
    if(searchKey){
      setLoading(true)
      fetch(`https://api.github.com/search/users${searchKey? `?q=${searchKey}`:''}`,{ method: 'GET'} )
      .then((res)=>res.json())
      .then((data)=>setUsers(data))
      setUsers()
      setLoading(false)
    }
  },[searchKey])

  function onChange (e) {
    setSearchKey(e.target.value)
  }

  console.log(users)
  if(loading){
    return<div style={{width: '100vw', height: '100vh'}}>
      Loading...
    </div>
  }
  return (
    <>
      <h2 className={css.small_title} >find github users here fast and easy.</h2>
      <div className={css.search_container}>
        <div className={css.search_wrapper}>
          <input 
            className={css.search_input}
            value = { searchKey } 
            onChange = { onChange } 
            placeholder="Search GitHub users"
            type="text" 
            name="search" 
            id="search" 
          />
        </div>
      </div>
    </>
  )
}
