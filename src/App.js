
import './App.css';
import contactArr from "../src/contacts.json"
import { useState } from "react"


function App() {

const contacts = contactArr.slice(0,5)

const [ listContact, setListContact ] = useState(contacts)

const addToContacts = () =>{
  const randomIndex = Math.floor(Math.random() * contactArr.length)
  const contactRandom = contactArr[randomIndex]

  const copy = listContact.map((eachContact) => eachContact)

  copy.push(contactRandom)

  setListContact(copy)
}

const sortPopularity = () =>{
  const copy = listContact.map((eachContact) => eachContact)
  
  copy.sort((a,b) => a.popularity < b.popularity ? 1 : -1)

  setListContact(copy)
}

const sortName = () => {
const copy = [...listContact]

copy.sort((a,b) => a.name > b.name ? 1 : -1)

setListContact(copy)

}

const deleteContact = (contactId) => {

  const filteredContacts = listContact.filter((eachContact) =>{
    if(eachContact.id === contactId ){
      return false
    } else {
      return true
    }
  })

  setListContact(filteredContacts)
}

  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button className="btn-add-sort" onClick={addToContacts}>Add Random Contact</button>
      <button className="btn-add-sort" onClick={sortPopularity}>Sort by popularity</button>
      <button className="btn-add-sort" onClick={sortName}>Sort by name</button>
      <br />

    {listContact.map((eachContact) => {
      return (
        <table>
          <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
          </tr>
        <tr>
          <td><img src={eachContact.pictureUrl} alt="{eachContact.name}" width="50px"/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td>{eachContact.wonOscar === true ? <p>🏆</p> : false}</td>
          <td>{eachContact.wonEmmy === true ? <p>🏆</p> : false}</td>
          <button onClick={() => deleteContact(eachContact.id)}>Delete</button>
        </tr>
            </table>
      )

    })}
    </div>
  );
}

export default App;
