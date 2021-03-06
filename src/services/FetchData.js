const endpoint = 'https://hp-api.herokuapp.com/api/characters';

const fetchData = () => {
  return (
    fetch(endpoint)
    .then(response => response.json())
  )
}

export {fetchData};