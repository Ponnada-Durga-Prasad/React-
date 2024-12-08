import React, { useState } from "react";

/**
 * ContactList component renders a list of contacts and allows adding new ones.
 */
function ContactList() {
  // Initial contacts array
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@example.com" },
    { id: 2, name: "Bob Smith", email: "bob@example.com" },
  ]);
const [newContact, setNewContact] = useState({ name: "", email: "" });
  return (
    {contacts.map((contact ) => (
  <li key={contact.id}>{contact.name}</li>
))}


  )
}

export default ContactList;
