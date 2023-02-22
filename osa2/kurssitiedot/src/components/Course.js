
const Course = ({ courses}) => {

    const Header = (props) => {
        console.log("header props",props)
        return (
            <h1>Web development</h1>
        )
    }

    const Part = (props) => {
        console.log("Part props", props)
        return (
            <p>{props.part.name} {props.part.exercises}</p>
        )
    }

    const Content = () => {
        //loop also can be used here, but it is done like in task info
        return (
            <div>
                {
                    courses.map((course, index) => (
                        <div key={index}>
                            <h2>{course.name}</h2>
                            <div>
                                {course.parts.map((part, i) => (
                                        <Part part={part} key={i} />
                                ))}
                            </div>

                        </div>

                    ))
                }
            </div>
        )
    }

    const Total = () => {
        let total = 0;
        for (var x = 0; x < courses.length; x++) {
            let course = courses[x];
            for (var i = 0; i < course.parts.length; i++) {
                total += course.parts[i].exercises;
            }
        }   
        return (
            <h2>Total of {total}</h2>
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


export default Course