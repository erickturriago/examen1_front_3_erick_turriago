import { useState } from 'react';
import './form.css'

const Form = ({datosForm,setDatosForm,setShow}) => {


  const [nombre,setNombre] = useState('');
  const [color,setColor] = useState('')
  const [error,setError] = useState(false);

  const handleSubmit = (e)=>{
    e.preventDefault();

    console.log("Evento submit")

    //Validar inputs
    if (nombre.length < 3 || nombre.startsWith(' ') || color.length < 6) {
      setError(true);
      console.log("Error en los datos")
    } 
    else {
      setError(false);
      console.log("nombre: "+nombre +" color: "+color)
      setDatosForm(
        {
          nombre:nombre,
          color:color,
        }
      )
      console.log(datosForm)
      setShow(true);

      setNombre('')
      setColor('')
    }
  }

  const handleChangeNombre = (e)=>{
    setNombre(e.target.value);
    setShow(false);
  }

  const handleChangeColor = (e)=>{
    setColor(e.target.value);
    setShow(false);
  }


  return (
    <div className='formContainer'>
      <h1 className="modal-title">Elige un color</h1>
      <form className='formulario' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Nombre: </label>
          <input type="text" value={nombre} className="form-control" placeholder="Ingrese su nombre" onChange={handleChangeNombre}/>
        </div>
        <div className="form-group">
          <label className="exampleInputPassword1">Color: </label>
          <input type="text" value={color} className="form-control" placeholder="Color favorito en HEX" onChange={handleChangeColor}/>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
      {error && <div className="alert alert-danger" role="alert"> Por favor chequea que la información sea correcta.</div>}
    </div>
  )
}

export default Form