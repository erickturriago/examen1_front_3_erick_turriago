import './card.css'

const Card = ({datosForm}) => {
  return (
    <div className="card" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">Hola {datosForm.nombre}!</h5>
            <p className="card-text">Sabemos que tu color favorito es: </p>
            <a href="#" className="btn" style={{backgroundColor:datosForm.color}}>{datosForm.color}</a>
        </div>
    </div>
  )
}

export default Card