import React, {useState} from "react";
import Dexter from "./imgprogramacao/dexter.png"
import Dupla from "./imgprogramacao/dupla.png"
import Meninos from "./imgprogramacao/3meninos.png"
import Cao from "./imgprogramacao/cao.png"
import Jorel from "./imgprogramacao/jorel.png"
import Monica from "./imgprogramacao/tmonica.png"
import Steve from "./imgprogramacao/steve.png"
import Narigudo from "./imgprogramacao/narigudo.png"
import * as S from "./StyleProgramacao.jsx"



export default function Programacao(){

    const [desenhos, setDesenhos] = useState ([

    {hora: "7:00" , nome: " O labs", imagem: Dexter, desenhoManha: true},
    {hora: "8:00" , nome: "Vaca e Frango", imagem: Dupla},
    {hora: "09:00" , nome: "Du, Dudu e Edu", imagem: Meninos },
    {hora: "13:00", nome: " Coragem", imagem: Cao, desenhoManha: false},

])


//FILTER CRIA UMA NOVA LISTA COM OS ITENS QUE EU QUERO
//todo desenhodaManha que for true , vao ser armazenados  em uma nova lista 
// const desenhoCedo = desenhos.filter((item) => item.desenhoManha === true)

//cria uma nova section dentro do return
//section
//{desenhoCedo.map((item)=>())}
    

    return(
        
        <>
        

       <S.SectionCard>

       {desenhos.map ((item)=>(
        <S.Card>
        <h2>{item.nome}</h2>
        <h2>{item.hora}</h2>
        <img src={item.imagem} alt={item.nome} />
        </S.Card>
       ))}

        
       </S.SectionCard>

    
      

       </>
    )
}