import React, { Component } from "react";
import { Button } from "@/components/ui/button";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = `dtyey9uos`;
    const uploadPreset = `kofgxo4l`;

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          this.props.handleImageUpload(result.info.url);
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
    return (
      <div className="flex justify-center items-center">
        <Button type="button" id="upload_widget">
          Upload Your Meme
        </Button>
      </div>
    );
  }
}

export default CloudinaryUploadWidget;
