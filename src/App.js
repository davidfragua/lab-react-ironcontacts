
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



  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={addToContacts}>Add Random Contact</button>
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
          </tr>
        <tr>
          <td><img src={eachContact.pictureUrl} alt="{eachContact.name}" width="50px"/></td>
          <td>{eachContact.name}</td>
          <td>{eachContact.popularity.toFixed(2)}</td>
          <td>{eachContact.wonOscar === true ? <p>🏆</p> : false}</td>
          <td>{eachContact.wonEmmy === true ? <p>🏆</p> : false}</td>
        </tr>
            </table>
      )

    })}
    </div>
  );
}

export default App;
