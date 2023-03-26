//rcc
import ImageItem from "./ImageItem";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Image = () => {
  const [articles, setarticle] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResult, settotalResult] = useState(0);
  const [img, setImg] = useState("");

  const submit = () => {
   fetchMoreData();
  };

  const fetchMoreData = async () => {
    let url = `https://pixabay.com/api/?key=34747400-f1e2efd17448c375ffc346561&q=${img}&per_page=20&image_type=photo`;
    console.log("urlll", url);
    setpage(page + 1);
    let data = await fetch(url); //it gives promise and return in which we will convert in text, json etc
    let parseddata = await data.json();
    console.log("parseddata", parseddata);
    setarticle(articles.concat(parseddata.hits));
    settotalResult(parseddata.totalHits);
  };

  useEffect(() => {
    fetchMoreData();
    //eslint-disable-next-line
  }, [img]);

  //runs second

  console.log("render");
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <h2 class="navbar-brand" style={{ color: "white" }}>
            SearchImage
          </h2>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="float-right" id="navbarSupportedContent">
            <div class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success"
               
                onClick={submit}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="my-3"></div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<h4>Loading...</h4>}
      >
        <div className="container-fluid">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.pageURL}>
                  <ImageItem
                    title={element.tags ? element.tags : ""}
                    imageurl={element.previewURL}
                    source={element.user}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

Image.defaultProps = {
  searchname: "all",
  pageSize: 5,
};
Image.propsTypes = {
  searchname: PropTypes.string,
  pageSize: PropTypes.number,
};

export default Image;
