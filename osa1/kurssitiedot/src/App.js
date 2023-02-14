const App = () => {

     const cources = [
         { name: 'Fundamentals of React', amount: 10},
         { name: 'Using props to pass data', amount:7},
         { name: 'State of a component', amount:14}
     ];                

    const Header = (props) => {
        console.log("header props",props)
        return (
            <h1>{props.course}</h1>
        )
    }

    const Part = (props) => {
        console.log("Part props", props)
        return (
            <p>{props.name} {props.amount}</p>
        )
    }

    const Content = () => {
        //loop also can be used here, but it is done like in task info
        return (
            <div>
                  <Part name={cources[0].name} amount={cources[0].amount} />
                  <Part name={cources[1].name} amount={cources[1].amount} />
                  <Part name={cources[2].name} amount={cources[2].amount} />
          </div>
        )
    }

    const Total = () => {
        let total = 0;
        for (var i = 0; i < cources.length; i++) {
           total+=cources[i].amount;
        }   
        return (
            <p>Number of exercises {total}</p>
        )
    }

    return (
         <div>
          <Header course = 'Half Stack application development' />
          <Content/>
          <Total/>
        </div>
    )
}


export default App