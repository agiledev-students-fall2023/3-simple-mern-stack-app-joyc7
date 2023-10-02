import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */

const AboutUs = props => {
  const [paragraph, setParagraph] = useState('')
  const [photo, setPhoto] = useState('')
  const [error, setError] = useState('')

  const fetchAboutUs = () => {
    
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/aboutus`)
      .then(response => {
          console.log(response)
          setParagraph(response.data.paragraph)
          setPhoto(response.data.photo)
      })
      .catch(err => {
          const errMsg = JSON.stringify(err, null, 2) 
          setError(errMsg)
      })
  }

  useEffect(() => {
      
      fetchAboutUs()
  
    }, [])

  return (
    <>
      <h1>About Us</h1>
      
      {error && <p className="error">{error}</p>}
      <p>{paragraph}</p>
      <img src={photo} alt="A photo of me in Whitney Museum" />
    </>
  )
}

// make this component available to be imported into any other file
export default AboutUs