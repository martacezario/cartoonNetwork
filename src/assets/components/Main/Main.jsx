import React, { useState } from "react";

import Scooby from "./imagensMain/scooby.png";
import Ben from "./imagensMain/ben10.png";
import Frajola from "./imagensMain/frajola.png";
import styled from "styled-components";
import * as S from "./StyleMain.jsx";
import Gumball from "./imagensMain/gumball.png";
import Meninas from "./imagensMain/meninas.png";
import Tom from "./imagensMain/tom.png";
import Warner from "./imagensMain/warner.png";
import Github from "./imagensMain/github.png";
import Linkedin from "./imagensMain/linkedin.png";

function Main() {
  return (
    <S.StyleMain>
      <S.Div1>
        <S.Img src={Scooby} alt="desenho animado scooby" />
        <S.Img src={Ben} alt="desenho animado ben 10" />
        <S.Img src={Frajola} alt="desenho animado frajola e piu piu" />
      </S.Div1>

      <S.Div2>
        <S.Img src={Gumball} alt="desenho animano gumball" />
        <S.Img src={Meninas} alt="desenho animado meninas super poderosas" />
        <S.Img src={Tom} alt="desenho animado Tom e Jerry" />
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
  );
}

export default Main;
