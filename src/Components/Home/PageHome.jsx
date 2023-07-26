import React from "react";
import Header from './Header';
import Content from './Content';
import Introduce from "./Introduce";

function PageHome() {
    return (
        <>
            <Introduce></Introduce>
            <Header></Header>
            <Content></Content>
        </>
    )
}
export default PageHome