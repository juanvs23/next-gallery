import React from "react";
import Layout from "../../components/layout/index";
import { FunctionalsContent } from "../../context/contextApi";
import { useRouter } from "next/router";
import MansoryList from "../../components/layout/mansoryList";
import { fetchImage } from "../../helpers/fetch";

const Collection = () => {
  const router = useRouter();
  const {
    query: { collection },
  } = router;

  const {
    title,
    setSelect,
    setTitle,
    imageList,
    setimageList,
  } = React.useContext(FunctionalsContent);

  React.useEffect(() => {
    if (collection) {
      setSelect(collection);
      fetchImage(`https://api.unsplash.com/collections/${collection}?`).then(
        (res) => {
          setTitle(res.title);
        }
      );
      fetchImage(
        `https://api.unsplash.com/collections/${collection}/photos?`
      ).then((res) => {
        setimageList(res);
      });
    }
  }, [collection]);
  return (
    <Layout>
      <h1 className="mb-5 text-center display-4">{title}</h1>
      <div className="container-fluid">
        <div className="p-0 col-12">
          <MansoryList />
        </div>
      </div>
    </Layout>
  );
};

export default Collection;
