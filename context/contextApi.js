import React, { createContext, useState } from "react";
// import firebase from '../config/firebase'

export const FunctionalsContent = createContext();

const FunctionalsProvider = ({ children }) => {
  const [title, setTitle] = useState("Loading...");
  const [list, setList] = React.useState();
  const [select, setSelect] = React.useState();
  const [imageList, setimageList] = React.useState();
  const [keyword, setKeyword] = React.useState();
  const [page, setPage] = React.useState(0);
  return (
    <FunctionalsContent.Provider
      value={{
        title,
        setTitle,
        list,
        setList,
        select,
        setSelect,
        imageList,
        setimageList,
        keyword,
        setKeyword,
        page,
        setPage,
      }}
    >
      {children}
    </FunctionalsContent.Provider>
  );
};
export default FunctionalsProvider;
