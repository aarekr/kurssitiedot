import React from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const courses = [
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


  return (
    <div>
      <h1>Web development curriculum</h1>
      {courses.map((name, i) =>
        <Course key={i} course={courses[i].name} parts={courses[i].parts} />
      )}
    </div>
  )
}

const Course = (props) => {
  return(
    <div>
      <Header course={props.course} />
      <Content parts={props.parts} />
      <Total parts={props.parts} />
    </div>
  )
}
const Header = (props) => {
  return(
    <div>
      <h2>{props.course}</h2>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      {props.parts.map((name, i) =>
        <Part key={i} part={props.parts[i].name} exercises={props.parts[i].exercises} />
      )}
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  
  let i = 0
  const taulu = [] // luodaan uusi tyhjä taulu
  while(i < props.parts.length){
    taulu.push(props.parts[i].exercises) // syötetään määrät tauluun
    i++
  }
  const reducer = (acc, curVal) => acc + curVal; // laskenta

  return(
    <div>
      <b>Total of {taulu.reduce(reducer)} exercises </b>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))