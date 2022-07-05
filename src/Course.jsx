import React from 'react'

const Header = ({course}) => {
    return(
        <>
         <h2>{course[1].name}</h2>   
        </>
    )
}

const Course = ({course, total, nname, nex, tota})=>{
    return(
        <div>
            <h1>{course.name}</h1>
            <p>{course[0].parts[0].name} {course[0].parts[0].exercises} </p>
            <p>{course[0].parts[2].name} {course[0].parts[2].exercises} </p>
            <p>{course[0].parts[1].name} {course[0].parts[1].exercises} </p>
            <p>{course[1].parts[0].name} {course[1].parts[0].exercises}</p>
            <p>{course[1].parts[1].name} {course[1].parts[1].exercises}</p>

            <Header course={course} />
        
            <p> {nname} {nex}</p>
            <p> {total}</p>
            {/* <p>{total}</p> */}
    
        </div>
    )
}
export default Course