import React, { useState } from "react";
import Proframacao from "../Programacao/Programacao.jsx";
import Scooby from "./imagensMain/scooby.png";
import Ben from "./imagensMain/ben10.png";
import Frajola from "./imagensMain/frajola.png";
import * as S from "./StyleMain.jsx";

//utilizaremos o map, m+etodo que mapeia arrays ( percorre)
import Gumball from "./imagensMain/gumball.png";
import Meninas from "./imagensMain/meninas.png";
import Tom from "./imagensMain/tom.png";

import Warner from "./imagensMain/warner.png";
import Github from "./imagensMain/github.png";
import Linkedin from "./imagensMain/linkedin.png";
import Programacao from "../Programacao/Programacao.jsx";



function Main() {

const[galeria, setGaleria] = useState([
  Gumball,
  Meninas,
  Tom
])


  return (

    <main>
    <S.StyleMain>
      <S.Div1>
        <S.Img src={Scooby} alt="desenho animado scooby" />
        <S.Img src={Ben} alt="desenho animado ben 10" />
        <S.Img src={Frajola} alt="desenho animado frajola e piu piu" />
      </S.Div1>

      <S.Div2>
        

        {galeria.map( (item)=>(<img src={item} alt="" /> ) )}

      </S.Div2>

      <S.Div3>
        <S.ImgWarner src={Warner} alt="logo Warner Bros" />

        <S.Section>
          <li>Sobre nós</li>
          <li>Produtos</li>
          <li>Personagens</li>
        </S.Section>

        <S.SectionLogos>
          <img src={Github} alt="" />
          <img src={Linkedin} alt="" />
        </S.SectionLogos>
      </S.Div3>

      

    </S.StyleMain>
   
    </main>
  );
}

export default Main;
