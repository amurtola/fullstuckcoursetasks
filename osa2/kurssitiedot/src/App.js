import Course from './components/Course'

const App = () => {
    const courses = [{
        name: 'Half Stack application development',
        id: 1,
        parts: [
            {
                name: 'Fundamentals of React 111',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            },
            {
                name: 'State of a app ',
                exercises: 14,
                id: 5
            },
            {
                name: 'SRedux',
                exercises: 11,
                id: 4
            }
        ]
    }, {
            name: 'HSql',
            id: 2,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'State of a app ',
                    exercises: 14,
                    id: 5
                },
                {
                    name: 'SRedux',
                    exercises: 11,
                    id: 4
                }
            ]
        }, {
            name: 'React',
            id: 3,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 11
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 21
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 31
                },
                {
                    name: 'State of a app  111',
                    exercises: 14,
                    id: 51
                },
                {
                    name: 'Testing',
                    exercises: 11,
                    id: 41
                }
            ]
        }]

    return (
        <div>
            <Course courses={courses} />
        </div>
    )
}

export default App