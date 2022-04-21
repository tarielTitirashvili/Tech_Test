import { GET_USERS_URL } from "../constants"

export const getUsersApi = async (searchKey, setLoading, setError) => {
  try{
    setLoading(true)
    const response = await fetch(`${ GET_USERS_URL }?q=${searchKey}&per_page=5`,{ method: "GET"} )
    const data = await response.json()
    if(!response.ok){
      throw new Error(data.errors? data.message: data.message || 'something went wrong')
    }
    setError(false)
    setLoading(false)
    return data.items
  }catch(e){
    setLoading(false)
    setError(true)
    return
  }
}