export default function Usuario(props){
    return(
        <div className="usuario">
        <img src={props.imagem} alt=""/>
        <div className="texto">
          <strong>{props.perfil}</strong>
          {props.nome}
        </div>
      </div>
    )
}