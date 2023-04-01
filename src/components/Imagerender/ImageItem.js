import { React } from "react";
import { saveAs } from "file-saver";

const ImageItem = (props) => {
  const downloadImage = () => {
    saveAs(imageurl, "image.jpg");
  };
  const viewImage = () => {
    document.getElementById("image")?.requestFullscreen();
  };

  let { title, imageurl, source } = props;
  return (
    <div className="my-4">
      <div className="card">
        <span
          className="position-absolute top-0  translate-middle badge rounded-pill bg-secondary"
          style={{ left: "50%", zIndex: "1" }}
        >
          Picture By : {source}
        </span>
        <img
          src={imageurl}
          id="image"
          className="card-img-top"
          alt="..."
          style={{ height: "300px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-truncate" style={{ fontSize: "16px" }}>
            <b>About : </b>
            {title}
          </h5>
          <button
            type="button"
            className="btn btn-info me-2 mt-2"
            onClick={downloadImage}
          >
            Download
          </button>

          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={viewImage}
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageItem;
