import Person from './Person'


const PersonList = ({ persons }) => {
    console.log("list persons", persons)
    return ( 
        <ul>
            {persons.map(person =>
                <Person key={person.id} person={person}/>
            )}
        </ul>
    )
}

export default PersonList
