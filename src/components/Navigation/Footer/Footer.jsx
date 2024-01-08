import { useNavigate } from "react-router-dom"


const Footer = () => {

  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  const handleGoForward = () => {
    navigate(-1)
  }

  return (

    <>
      <button onClick={handleGoBack}>
        Go Back
      </button>
      <button onClick={handleGoForward}>
        Go Forward
      </button>
    </>

  )
}

export default Footer