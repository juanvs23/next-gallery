import React from "react";
import Layout from "../../components/layout/index";
import { FunctionalsContent } from "../../context/contextApi";
import { useRouter } from "next/router";
import { fetchImage } from "../../helpers/fetch";
import styled from "@emotion/styled";
import ItemImage from "../../components/itemimage/index";

const PhotoContainer = styled.section`
  background: ${(props) => props.bg};
  min-height: 81vh;
  display: flex;
  align-items: center;
`;

const PhotoPage = () => {
  const router = useRouter();
  const {
    query: { photo },
  } = router;
  const [photoItem, setPhotoItem] = React.useState();
  const {
    title,
    setSelect,
    setTitle,
    keyword,
    imageList,
    setimageList,
  } = React.useContext(FunctionalsContent);
  console.log(photo);
  React.useEffect(() => {
    if (photo) {
      fetchImage(`https://api.unsplash.com/photos/${photo}?`).then((res) => {
        setPhotoItem(res);
        console.log(res);
        setTitle(res.alt_description);
      });
    }
  }, [photo]);

  if (photoItem) {
    const { description, urls, color, related_collections } = photoItem;
    console.log(photoItem);
    const text = description ? description : "";
    return (
      <Layout>
        <PhotoContainer bg={color}>
          <div className="container pt-5 pb-5">
            <div className="row ">
              <div className="col-lg-6">
                <img src={urls.regular} className="img-fluid" />
              </div>
              <div className="col-lg-6">
                <h1 className="text-white fw-light display-5">{title}</h1>
                <p className="text-white">{text}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <h2 className="mt-5 mb-2 text-white fw-light display-5">
                  Related Collections
                </h2>
              </div>
            </div>
            <div className="row">
              {related_collections.results.map((image, i) => {
                return (
                  <div key={i} className="col-md-4">
                    <ItemImage image={image.cover_photo} url={`photo`} />
                  </div>
                );
              })}
            </div>
          </div>
        </PhotoContainer>
      </Layout>
    );
  } else {
    return (
      <Layout>
        <PhotoContainer bg={"#fff"}></PhotoContainer>
      </Layout>
    );
  }
};
export default PhotoPage;
