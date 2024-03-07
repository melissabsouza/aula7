import { useEffect, useState, useReducer} from 'react'

import './App.css'

const reducer = (state: any, action: any) => {
  switch(action.type){
    case "soma":
      return {counter: state.counter + 1};

    case "sub":
      return {counter: state.counter - 1};

    default:
      return state;
  }

}

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    document.title = "a contagem eh:" + counter;
  })

  useEffect(()=> {
    console.log("funciona qnd atualiza")
  })

  const[state, dispatch] = useReducer(reducer, {counter: 0});
  return (
    <>
      <h1>{state.counter}</h1>

      <button onClick={() => dispatch({type: "soma"})}>somar</button>
      <button onClick={() => dispatch({type: "sub"})}>sub</button>
    </>
  )
}

export default App
