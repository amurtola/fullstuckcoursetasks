const App = () => {

    const course = {
        name: 'Half Stack application development',
        parts : [
            { name: 'Fundamentals of React', amount: 10 },
            { name: 'Using props to pass data', amount: 7 },
            { name: 'State of a component', amount: 14 }
        ]
    }
                    

    const Header = (props) => {
        console.log("header props",props)
        return (
            <h1>{props.name}</h1>
        )
    }

    const Part = (props) => {
        console.log("Part props", props)
        return (
            <p>{props.part.name} {props.part.amount}</p>
        )
    }

    const Content = () => {
        //loop also can be used here, but it is done like in task info
        return (
            <div>
                <Part part={course.parts[0]} />
                <Part part={course.parts[1]} />
                <Part part={course.parts[2]} />
          </div>
        )
    }

    const Total = () => {
        let total = 0;
        for (var i = 0; i < course.parts.length; i++) {
            total += course.parts[i].amount;
        }   
        return (
            <p>Number of exercises {total}</p>
        )
    }

    return (
         <div>
          <Header name = 'Half Stack application development' />
          <Content/>
          <Total/>
        </div>
    )
}


export default App