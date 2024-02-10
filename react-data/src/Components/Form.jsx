import {useState, useRef, useEffect } from 'react'

const Form = () => {

    const f_nameRef = useRef('')
    const l_nameRef = useRef('')
    const contactRef = useRef('')
    const [show, setShow] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        // f_nameRef.current.focus()
        console.log(f_nameRef.current.value)
        console.log(l_nameRef.current.value)
        console.log(contactRef.current.value)

        const f_name = f_nameRef.current.value;
        const l_name = l_nameRef.current.value;
        const contact = contactRef.current.value;
        if (f_name  && l_name && contact) { 
            // alert(`Welcome ${f_name} ${l_name}. Your contact number is ${contact}`); // For alert Message
            setShow(true)            
        }
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
          if (e.key === '/') {
            f_nameRef.current.focus();
            f_nameRef.current.value = ''; 
          }
          else if (e.key === '£'){
            l_nameRef.current.focus()
          }
          else if (e.key === '$'){
            contactRef.current.focus()
          }
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => {
          window.removeEventListener('keydown', handleKeyDown)
        }
      }, [])

  return (
    <div>
        <fieldset>
        Form
        <fieldset>
            <form action="" onSubmit={handleSubmit}>
                <label >
                    First Name:
                    <input type="text" name="f_nameRef" ref={f_nameRef} />    
                </label>    
                <br />
                <label >
                    Last Name:
                    <input type="text" name="l_nameRef" ref={l_nameRef} />    
                </label>    
                <br />
                <label >
                    Contact Number:
                    <input type="number" name="contactRef" ref={contactRef} />    
                </label>    
                <br />
                <button type="submit">Submit</button>
            </form>    
        </fieldset>  
        {
            show  ?  
              (
                <div>
                    <p>First Name: {f_nameRef.current.value}</p>
                    <p>Last Name: {l_nameRef.current.value}</p>
                    <p>Contact Number: {contactRef.current.value}</p>
                </div>
              )
              :
              <p>Please fill out all fields.</p>
            }  
        </fieldset>    
    </div>
  )
}

export default Form