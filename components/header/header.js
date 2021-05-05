import React from "react";
import style from "./header.module.css";
import MenuItemLlist from "./menuItem";
import { FunctionalsContent } from "../../context/contextApi";
import { fetchImage, getRandomInt } from "../../helpers/fetch";

import styled from "@emotion/styled";
import HeaderTop from "./headerTop";

const HeaderContainer = styled.header`
  border-bottom: 1px solid #444;
  button {
    transition: 0.2s all;
  }
  a.active span {
    border-bottom: 2px solid #444;
  }
  a span {
    border-bottom: 2px solid transparent;
  }
  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 12px;
  }
  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 13px;
    color: black;
    font-weight: bolder;
  }
  a {
    color: #212529;
    text-decoration: none !important;
  }
  a:hover,
  a.active {
    color: #444;
    text-decoration: none !important;
  }
`;
const Header = () => {
  const { setList } = React.useContext(FunctionalsContent);
  React.useEffect(() => {
    fetchImage(
      `https://api.unsplash.com/collections?per_page=20&page=${getRandomInt(
        1,
        8
      )}&`
    ).then((res) => {
      setList(res);
    });
  }, []);
  return (
    <HeaderContainer>
      <HeaderTop />
      <nav className={style.headerNav}>
        <MenuItemLlist />
      </nav>
    </HeaderContainer>
  );
};

export default Header;
