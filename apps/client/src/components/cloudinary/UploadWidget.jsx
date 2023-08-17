import React, { Component } from "react";


class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = `dtyey9uos`;
    const uploadPreset = `kofgxo4l`; 
   
    
   
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          
          // document
          // .getElementById("uploadedimage").src = result.info.secure_url
          //   .setAttribute("src", result.info.url); NO BORRAR POR EL MOMENTO
          this.props.handleImageUpload(result.info.url);
          //this.props.handleImageId(result.info.public_id);

            
          
            }
        
        
          }
          );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (<div className="flex justify-center items-center h-screen">

      <button  type="button" id="upload_widget" className="cloudinary-button bg-blue-300">
        Upload
      </button>
      </div>
    );
  }
}

export default CloudinaryUploadWidget;
