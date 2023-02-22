const Content1 = ({course}) => {
    return (
        <div>
            <Part part={course.parts[0]} />
            <Part part={course.parts[1]} />
            <Part part={course.parts[2]} />
        </div>
    )
}

export default Content1