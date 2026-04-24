import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { collection, addDoc } from "firebase/firestore"
import db from "../db"

function AddContact() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const c = collection(db, "contacts")

    addDoc(c, { ...form })
      .then((doc) => {
        navigate(`/contact/${doc.id}`)
      })
  }

  return (
    <div>
      <h2>Add Contact</h2>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />

        <label>Last Name</label>
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <label>Phone</label>
        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
        />

        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact