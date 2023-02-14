const Hello = (props) => {
    return (
        <div>
            <p>Hello world { props.name }</p>
        </div>
    )
}

const App = () => {
    const friends = ['Leevi', 'Venla']

    return (
        <div>
            <p>{friends}</p>
        </div>
    )
}

export default App