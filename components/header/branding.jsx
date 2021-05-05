import React from "react";
import styled from "@emotion/styled";
import { fetchImage, getRandomInt, morePage } from "../../helpers/fetch";

import Link from "next/link";
import { FunctionalsContent } from "../../context/contextApi";

const fonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Helvetica Neue",
  "Arial",
  "Noto Sans",
  "Liberation Sans",
  "sans-serif",
  "'Audiowide', cursive",
  "'Bangers', cursive",
  "'Lobster', cursive",
  "'Rochester', cursive",
  "'Satisfy', cursive",
  "'UnifrakturMaguntia', cursive",
  "'Zen Dots', cursive",
];

const brandTitle = [
  "Hello ",
  "Great Gallery",
  "More photos",
  "It's a simple gallery",
  "Hello... again",
  "Full gallery",
  "Awesome photos",
];

const BrandingContainer = styled.div`
  .navbar-brand {
    font-family: ${(props) => props.fontNumber};
    font-size: 1.8rem;
  }
  @media (max-width: 767px) {
    .navbar-brand {
      line-height: 1.2;

      font-size: 1.2rem;
      white-space: break-spaces;
    }
  }
`;

const Branding = () => {
  const { imageList } = React.useContext(FunctionalsContent);
  const [fontNumber, setFontNumber] = React.useState(
    fonts[getRandomInt(0, fonts.length)]
  );
  const [name, Setname] = React.useState("Image gallery");
  React.useEffect(() => {
    setFontNumber(fonts[getRandomInt(0, fonts.length)]);
    Setname(brandTitle[getRandomInt(0, brandTitle.length)]);
  }, [imageList]);

  return (
    <BrandingContainer fontNumber={fontNumber}>
      <Link href="/">
        <a className="pt-3 navbar-brand">{name}</a>
      </Link>
    </BrandingContainer>
  );
};
export default Branding;
