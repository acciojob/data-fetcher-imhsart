
import React, {useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [fetchData, setFetchData] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      setFetchData(JSON.stringify(data, null,2))
      setLoading(false)
    })
    .catch(error => {
      setError(error.message)
      setLoading(false)
    })

  }, [])

  if(loading){
    return <div>Loading...</div>
  }
  if(error){
    return <div>An error occurred: {error}</div>
  }
  return (
    <div>
      <h1>Data Fetched from API</h1>
        <pre>
          {fetchData}
        </pre>
    </div>
  )
}

export default App
