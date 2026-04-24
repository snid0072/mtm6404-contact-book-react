import { useEffect, useState } from "react"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore"
import db from "../db"
import { Link } from "react-router-dom"

function Home() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const q = query(collection(db, "contacts"), orderBy("lastName", "asc"))

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = []

      snapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data()
        })
      })

      data.sort((a, b) =>
        a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
      )

      setContacts(data)
    })

    return () => unsubscribe()
  }, [])

  const filteredContacts = contacts.filter(contact =>
    `${contact.firstName} ${contact.lastName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  )

  return (
  <div>
    <h2>All Contacts</h2>

    <div className="top-bar">
      <input
        type="text"
        placeholder="Search contacts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link to="/add">
        <button>+</button>
      </Link>
    </div>

    <br /><br />

    <ul>
      {filteredContacts.map(contact => (
        <li key={contact.id}>
          <Link to={`/contact/${contact.id}`}>
            {contact.firstName} {contact.lastName}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Home