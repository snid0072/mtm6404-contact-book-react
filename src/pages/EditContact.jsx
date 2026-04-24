import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { doc, getDoc, updateDoc } from "firebase/firestore"
import db from "../db"

function EditContact() {
  const params = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  useEffect(() => {
    getDoc(doc(db, "contacts", params.id))
      .then((document) => {
        if (document.exists()) {
          setForm({
            ...document.data()
          })
        }
      })
  }, [params.id])

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    updateDoc(doc(db, "contacts", params.id), {
      ...form
    }).then(() => {
      navigate(`/contact/${params.id}`)
    })
  }

  return (
    <div>
      <h2>Edit Contact</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Update Contact</button>
      </form>
    </div>
  )
}

export default EditContact