
import React, {useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
  const [fetchData, setFetchData] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      setFetchData(JSON.stringify(data, null,2))
      setLoading(false)
    })
    .catch(error => console.log(error))

  }, [])

  if(loading){
    return <div>Loading...</div>
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
