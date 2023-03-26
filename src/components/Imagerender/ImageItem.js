import {React} from 'react';
import { saveAs } from 'file-saver';

const  ImageItem = (props) => {
   



    const downloadImage = () => {
        saveAs(imageurl, 'image.jpg')
      }
      const viewImage = () => {
       document.getElementById('image')?.requestFullscreen()
      }

  
    let { title, imageurl, source } = props
    return (
      <div className="my-3" >
               
        <div className="card ">

    

          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-secondary" style={{ left: "50%", zIndex: '1' }}>
            {source}

          </span>
 <img src={imageurl} id='image' className="card-img-top" alt="..." style={{height: '500px'}} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <button type="button" class="btn btn-info" onClick={downloadImage}>Download</button>
           <span>{'                       '}</span>
            <button type="button" class="btn btn-secondary float-right" onClick={viewImage}>View</button>
           
                   </div> 
        </div>
      </div>
    )
  }


export default ImageItem