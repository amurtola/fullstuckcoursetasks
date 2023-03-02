import { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios'
import Person from './components/Person'
import AddForm from './components/AddForm'
import PersonList from './components/PersonList'

const App = () => {
    //console.log(initialpersons);
    
    const [persons, setPersons] = useState([])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewPhone] = useState('')


    useEffect(() => {
        console.log('effect')
        axios
            .get('http://localhost:3003/persons')
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })
    }, [])
    console.log('render', persons.length, 'persons')

    
    console.log("persons:",persons);
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