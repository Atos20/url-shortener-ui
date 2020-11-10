export const getUrls = async() => {
  const response= await fetch('http://localhost:3001/api/v1/urls')
  if(response.ok){
    return await response.json()
  } else{
    console.log(response)
    return response.error
  }
}
