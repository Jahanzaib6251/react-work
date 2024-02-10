import { useRef, useState } from 'react'

const UseRef = () => {
  
  const [show, setShow] = useState(false)
  const [count, setCount] = useState(0)
  const yourName = useRef('')  

  const submitNameField = (e) => {
    e.preventDefault()
    // yourName.current.focus()
    console.log(yourName.current.value)
    const name = yourName.current.value
    name === "" ? alert("plz fill field name") : setShow(true)
  }

  const resetNameField = () => {
    yourName.current.value = ''
    setShow(false)
    setCount(0)
  }

  return (<>
        <form action='' onSubmit={submitNameField}>
            <div>
                <h1>UseRef</h1>
                <h2>Enter Your Name</h2>
                <input type="text" id='name' ref={yourName} />
                <button>Submit</button>
            </div>
        </form>
        <p>{show ?  "Your name is: " + yourName.current.value : ""}</p>
        <hr />
        <button onClick={() => setCount(count+1)}>Clik++</button>
        <p>Clicked {count} times</p>
        <hr />
        <button onClick={resetNameField}>Reset</button>
        </>
  )
}

export default UseRef