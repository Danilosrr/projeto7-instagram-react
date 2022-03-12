import reactDom from "react-dom";

import Story from "./Story";
import Post from "./Post";
import Usuario from "./Usuario";
import Sugestao from "./Sugestao";

import {dadosPost,dadosStory,dadosSugestao} from "./Constantes/Dados";

function Esquerda(){
    return(
        <div className="esquerda">

            <div className="stories">
                {dadosStory.map((story) => (
                    <Story usuario={story.usuario} imagem={story.imagem}/>
                ))}
                <div className="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div className="posts">
                {dadosPost.map(post => (
                    <Post imagemUsuario={post.imagemUsuario} perfil={post.perfil} imagem={post.imagem} curtidoPorImg={post.curtidoPorImg} curtidoPor={post.curtidoPor} curtidas={post.curtidas}/>
                ) )}
            </div> 
        </div>
    )
};

function Sidebar(){
    return(
        <div className="sidebar">
            <Usuario imagem="assets/img/catanacomics.svg" perfil="catanacomics" nome="Catana"/>                
            
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {dadosSugestao.map(sugestao => ( 
                    <Sugestao imagem={sugestao.imagem} nome={sugestao.nome}/>
                ))}
            </div>

            <div className="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div className="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div> 
        
    )
}

const divCorpo = document.querySelector("#corpo")
reactDom.render(
    <div className="corpo">
        <Esquerda/>
        <Sidebar/>
    </div>,
    divCorpo
);

