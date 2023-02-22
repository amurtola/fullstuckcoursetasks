import { useState } from 'react'

const Button = (props) => {
    return (
        <button onClick={props.handleClick}>
            {props.text}
        </button>
    )
}


const App = () => {
    const anecdotesInitial = [
        { voites: 0, text: 'Adding manpower to a late software project makes it later!' },
        { voites: 0, text: 'If it hurts, do it more often.' },
        { voites: 0, text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.' },
        { voites: 0, text: 'Premature optimization is the root of all evil.' },
        { voites: 0, text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.' },
        { voites: 0, text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.' },
        { voites: 0, text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.' },
        { voites: 0, text: 'The only way to go fast, is to go well.' },
    ];

    const [anecdotes, setAnecdotes] = useState(anecdotesInitial)
    const [selected, setSelected] = useState(0)


    const generateRandom = (min,max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); 
    }

    const updateAnecdot = () => {
        setSelected(generateRandom(0, anecdotes.length-1));
    } 

    const updateVoites = () => {      
        anecdotes[selected].voites += 1
        const copy = [...anecdotes];
        setAnecdotes(copy);
        setSelected(selected);
    } 


    const getMaxVoiceAnecdot = () => {
        anecdotes[selected].voites += 1
        const maxObj = anecdotes.reduce(function (prev, current) {
            return (prev.voites > current.voites) ? prev : current
        })
        return maxObj;
    } 

    return (
        <div>
            <div>{anecdotes[selected].text}</div>
            <div>Has {anecdotes[selected].voites} voites</div>
            <div>
                <Button handleClick={() => updateVoites()} text="Vote" />
                <Button handleClick={() => updateAnecdot()} text="Next anecdote" />
            </div>
            <div>
                <h1>Anecdote with most voites</h1>
                {getMaxVoiceAnecdot().text}


            </div>
        </div>
    )
}
export default App