import ImageItem from "./ImageItem";
import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Navbar from "../Navbar/Navbar";

const Image = () => {
  const [articles, setarticle] = useState([]);
  const [totalResult, settotalResult] = useState(0);
  const [img, setImg] = useState("");
  const [page, setpage] = useState(1);

  const getImage = (image) => {
    setImg(image);
  };

  const fetchMoreData = async () => {
    let url = `https://pixabay.com/api/?key=34747400-f1e2efd17448c375ffc346561&q=${img}&page=${page + 1}&per_page=20&image_type=photo`;
    setpage(page + 1);
    let data = await fetch(url);
    let parseddata = await data.json();
    setarticle(articles.concat(parseddata.hits));
    settotalResult(parseddata.totalHits);
  };

  const updateData = async () => {
     let url = `https://pixabay.com/api/?key=34747400-f1e2efd17448c375ffc346561&q=${img}&page=${page}&per_page=20&image_type=photo`;
     let data = await fetch(url);
     let parseddata = await data.json();
     setarticle(articles.concat(parseddata.hits));
    settotalResult(parseddata.totalHits);
  }

  useEffect(() => {
    updateData();
    //eslint-disable-next-line
  }, [img]);

  return (
    <>
      <Navbar getImage={getImage} />
      <div className="mt-5"></div>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={
          <h4
            className="text-center"
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            Loading...
          </h4>
        }
      >
        {articles ? (
          <div className="container-fluid">
            <div className="row">
              {articles
                .filter((value) => {
                  if (img === "") {
                    return value;
                  } else if (
                    value.tags.toLowerCase().includes(img.toLowerCase())
                  ) {
                    return value;
                  }
                  return null;
                })
                .map((element, index) => {
                  return (
                    <div className="col-md-3" key={index}>
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
        ) : (
          <div class="text-center mt-3">
            <span>No Data Available for the search keyword</span>
          </div>
        )}
      </InfiniteScroll>
    </>
  );
};

export default Image;
