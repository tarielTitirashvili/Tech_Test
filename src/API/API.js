import { GET_USERS_URL } from "../constants"

export const getUsers = async (searchKey, setLoading, setError) => {
  try{
    setLoading(true)
    const response = await fetch(`${ GET_USERS_URL }?q=${searchKey}&per_page=5`,{ method: "GET"} )
    const data = await response.json()
    if(!response.ok){
      console.log(data)
      throw new Error(data.errors? data.message: data.message || 'something went wrong')
    }
    setLoading(false)
    return data
  }catch(e){
    setLoading(false)
    setError(e.message)
    throw e
  }
}