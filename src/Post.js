export default function Post(props){
    return(
        <div className="post">
            <div className="topo">
            <div className="usuario">
                <img src={props.imagemUsuario} alt=""/>
                {props.perfil}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
            </div>

            <div className="conteudo">
            <img src={props.imagem} alt=""/>
            </div>

            <div className="fundo">
            <div className="acoes">
                <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                <ion-icon name="bookmark-outline"></ion-icon>
                </div>
            </div>

            <div className="curtidas">
                <img src="assets/img/respondeai.svg" alt=""/>
                <div className="texto">
                    Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
            </div>
        </div>
    )
}