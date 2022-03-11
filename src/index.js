import reactDom from "react-dom";

import Story from "./Story";
import Post from "./Post";
import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

function Corpo(){
    return(
        <div className="corpo">
            <div className="esquerda">

                <div className="stories">
                    <Story imagem="assets/img/9gag.svg" Usuario="9gag"/>
                    <Story imagem="assets/img/meowed.svg" Usuario="meowed"/>
                    <Story imagem="assets/img/barked.svg" Usuario="barked"/>
                    <Story imagem="assets/img/nathanwpylestrangeplanet.svg" Usuario="nathanwpylestrangeplanet"/>
                    <Story imagem="assets/img/wawawicomics.svg" Usuario="wawawicomics"/>
                    <Story imagem="assets/img/respondeai.svg" Usuario="respondeai"/>
                    <Story imagem="assets/img/filomoderna.svg" Usuario="filomoderna"/>
                    <Story imagem="assets/img/memeriagourmet.svg" Usuario="memeriagourmet"/>

                    <div className="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>

                <div className="posts">
                    <Post imagemUsuario="assets/img/meowed.svg" perfil="meowed" imagem="assets/img/gato-telefone.svg"/>
                    <Post imagemUsuario="assets/img/barked.svg" perfil="barked" imagem="assets/img/dog.svg"/>
                </div> 
            </div>

            <div className="sidebar">
                <Usuario imagem="assets/img/catanacomics.svg" perfil="catanacomics" nome="Catana"/>
                
                <div className="sugestoes">
                    <div className="titulo">
                        Sugestões para você
                        <div>Ver tudo</div>
                    </div>

                    <Sugestao imagem="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes"/>
                    <Sugestao imagem="assets/img/chibirdart.svg" nome="chibirdart"/>
                    <Sugestao imagem="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar"/>
                    <Sugestao imagem="assets/img/adorable_animals.svg" nome="adorable_animals"/>
                    <Sugestao imagem="assets/img/smallcutecats.svg" nome="smallcutecats"/>
                </div>

                <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
                </div>

                <div className="copyright">
                    © 2021 INSTAGRAM DO FACEBOOK
                </div>
            </div> 

        </div>
        
    )
}

const corpo = Corpo()
const divCorpo = document.querySelector(".corpo")
reactDom.render(corpo,divCorpo);

