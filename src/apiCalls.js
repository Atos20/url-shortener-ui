export const getUrls = async() => {
  const response= await fetch('http://localhost:3001/api/v1/urls')
  if(response.ok){
    return await response.json()
  } else{
    console.log(response)
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
    console.log(response)
    return response.error
  }
}

// myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// var raw = JSON.stringify({"long_url":"long_url","title":"title"});

// var requestOptions = {
//   method: 'POST',
//   headers: myHeaders,
//   body: raw,
//   redirect: 'follow'
// };

// fetch("http://localhost:3001/api/v1/urls", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));

