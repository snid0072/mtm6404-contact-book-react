import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../db"
import { deleteDoc } from "firebase/firestore"
import { useNavigate } from "react-router-dom"

function ContactDetails() {
  const params = useParams()
  const navigate = useNavigate()

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    getDoc(doc(db, "contacts", params.id))
      .then((document) => {
        if (document.exists()) {
          setContact({
            ...document.data()
          })
        }
      })
  }, [params.id])

  function handleDelete() {
  deleteDoc(doc(db, "contacts", params.id))
    .then(() => {
      navigate("/")
    })
  }

  return (
    <div className="details-container">
      <h2>Contact Details</h2>

      <p><strong>Name:</strong> {contact.firstName} {contact.lastName}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>

      <br />

      <Link to={`/edit/${params.id}`}>
        <button>Edit</button>
      </Link>
      
      <button onClick={handleDelete}>Delete</button>

      <br /><br />

      <Link to="/">Back</Link> 
    </div>
  )
}

export default ContactDetails