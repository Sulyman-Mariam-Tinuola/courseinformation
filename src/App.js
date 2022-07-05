
// import './App.css';
import Course from './Course';

const App = () => {
  const course = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  

    
    const nname = 'Redux'
    const nex = 11
    const total = course[0].parts[0].exercises + course[0].parts[1].exercises + course[0].parts[2].exercises + nex
  console.log(total)
  const tota = course[0].parts.map((curr) => curr.exercises ).reduce((curr, acc) => curr + acc)
  console.log(tota)
  const tot = course[1].parts.map((curr) => curr.exercises ).reduce((curr, acc) => curr + acc)
  console.log(tota)
  console.log(tot)
  const result = course.map(note => note.name)
  console.log(result)
  
  return (
    <div>
      <Course course={course}/>
      <div>{nname} {nex}</div>
      <p>total of {tota} exercises</p>
      <p>total of {tot} exercises</p> 
    </div>
  );

  }
export default App
