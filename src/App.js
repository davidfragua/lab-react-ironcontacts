
import './App.css';
import contactArr from "../src/contacts.json"
import { useState } from "react"


function App() {

  const contacts = contactArr.slice(0,5)

// const [ list, setList ] = useState(contacts)



  return (
    <div className="App">
      <h2>IronContacts</h2>
    {contacts.map((eachContact) => {
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
