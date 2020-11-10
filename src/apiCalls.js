export const getUrls = async() => {
  const response= await fetch('http://localhost:3001/api/v1/urls')
  if(response.ok){
    return await response.json()
  } else{
    return response.error
  }
}
export const deleteUrl= async(id) => {
  const requestOptions = {
    method: 'DELETE',
    body:'',
    redirect: 'follow'
  };
  const response= await fetch(`http://localhost:3001/api/v1/urls/${id}`, requestOptions)
  if(response.ok){
    return 'suceessful delete'
  } else{
    return response.error
  }
}

export const sendUrls = async(url) => {
  let int = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(url)
  }
  const response= await fetch('http://localhost:3001/api/v1/urls', int)
  if(response.ok){
    return await response.json()
  } else{
    return response.error
  }
}

