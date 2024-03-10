import React from "react";
import styled from "styled-components";
import * as S from "./StyleHeader.jsx"
//tudo q tiver S vai ser estilizado no arquivo styleHeader.jsx
import Cn from "./imagensHeader/cartoon.png"
import Jogos from "./imagensHeader/jogos.png"
import Programacao from "./imagensHeader/programacao.png"





function Header(){
    return(

    <S.StyleHeader>
        <img src= {Cn} alt="" />
        
        
        <S.Section>
            <S.Div>
                <img src={Jogos} alt="" />
                <button>JOGAR</button>
            </S.Div>

            <S.Div>
                <img src={Programacao}alt="" />
                <h2>PROGRAMAÇÃO</h2>
            </S.Div>









        </S.Section>










    </S.StyleHeader>
















    )


}


export default Header