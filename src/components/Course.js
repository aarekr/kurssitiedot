import React from 'react'

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

export default Course