import React from "react"
import Header from "./assets/components/Header/Header"
import {createGlobalStyle} from "styled-components"
import Main from "./assets/components/Main/Main.jsx"
import Footer from "./assets/Footer/Footer.jsx"



const GlobalStyle = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
    
    
    
  }
`


function App(){
  return(
    <>
   <GlobalStyle/>
   <Header/>
   <Main />
   <Footer />
  
   
    </>
  )
}




export default App
