import { useState } from 'react'
import './App.css'
import Form from './components/Form/Form'
import Card from './components/Card/Card';

function App() {
  const [datosForm,setDatosForm] = useState({
    nombre:'',
    color:'',
  })

  console.log(datosForm)

  const [show,setShow] = useState(false);

  return (
    <>
      <Form datosForm={datosForm} setDatosForm={setDatosForm} setShow={setShow}/>
      {show && <Card datosForm={datosForm}/>}
    </>
  )
}

export default App
