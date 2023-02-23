import { useState } from 'react'
import Person from './components/Person'
import AddForm from './components/AddForm'
import PersonList from './components/PersonList'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas',id:1, pone: '044-45678' }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewPhone] = useState('')

   
    const handlePersonChange = (event) => {
        console.log(event.target.value)
        setNewName(event.target.value)
    }

    const handlePhoneChange = (event) => {
        console.log("phone " + event.target.value);
        setNewPhone(event.target.value)
    }


    const addNewPerson = (event) => {
        event.preventDefault();
        if (persons.find(p => p.name === newName)) {
            alert(`${newName} is already added to phonebook`);
            return
        }
        setPersons(persons.concat({ name: newName, number: newNumber, id: persons.length + 1 }))
        setNewName('')
        setNewPhone('')
;
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <AddForm
                onPersonChange={handlePersonChange}
                onPhoneChange={handlePhoneChange}
                onSubmit={addNewPerson}
                newName={newName}
                newNumber={newNumber} />
            <h2>Numbers</h2>
            <PersonList persons={persons} />
        </div>
    )

}

export default App