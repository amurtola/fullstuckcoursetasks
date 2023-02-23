import Person from './Person'


const PersonList = ({ persons }) => {
    return ( 
        <ul>
            {persons.map(person =>
                <Person person={person}/>
            )}
        </ul>
    )
}

export default PersonList
