import React from "react";
import styled from "styled-components";
import * as S from "./StyleFooter";
import CartoonR from "../Footer/cartoon2024.png";

function Footer() {
  return (
    <S.StyleFooter>
      <img src={CartoonR} alt="logo marca registrada cartoon" />
    </S.StyleFooter>
  );
}

export default Footer;
