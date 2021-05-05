import React from "react";
import Head from "next/head";
import { FunctionalsContent } from "../../context/contextApi";
import Header from "../header/header";
import styled from "@emotion/styled";

const Footer = styled.footer`
  background: #000;
  color: white;
  display: flex;
  a {
    font-size: 1rem;
    color: white;
    font-weight: 300;
  }
  .right,
  .left {
    text-align: center;
  }
  @media (min-width: 768px) {
    .left {
      text-align: left;
    }
    .right {
      text-align: right;
    }
  }
`;

const Layout = ({ children }) => {
  const { title } = React.useContext(FunctionalsContent);
  const date = new Date();
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Audiowide&family=Bangers&family=Lobster&family=Rochester&family=Satisfy&family=UnifrakturMaguntia&family=Zen+Dots&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <div className="wrapper-container">{children}</div>
      <Footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 ">
              <h4 className="left">
                <a
                  href="http://coltman-desing.tk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Created by juanvs23 - {date.getFullYear()}
                </a>
              </h4>
            </div>
            <div className="col-md-6">
              <h4 className="right">
                <a
                  href="https://unsplash.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Powered by Unsplash
                </a>
              </h4>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Layout;
