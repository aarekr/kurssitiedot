import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = {
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
        name: 'Python web development',
        exercises: 100,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

const Course = ({ course }) => {
  return(
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
const Header = ({ name }) => {
  return(
    <div>
      <h1>{name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return(
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}

const Part = ({ part }) => {
  return(
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Total = ({ parts }) => {
  console.log(parts);
  let i = 0;
  let sum = 0;
  while(i < parts.length){
    sum += parts[i].exercises;
    i++;
  }
  
  return(
    <div>
      <p>Number of exercises {sum} </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))