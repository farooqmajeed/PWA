import React, { Component } from 'react';

class Uploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
          files: [],
          imagesPreviewUrls: []
        }
    }
    handleonChamhe=(e)=>{

      // FileList to Array
      let files = Array.from(e.target.files);

      // File Reader for Each file and and update state arrays
      files.forEach((file, i) => {
          let reader = new FileReader();

          reader.onloadend = () => {
              this.props.getUploadContent(file,reader.result)
              this.setState(prevState => ({
                files: [...prevState.files, file],
                imagesPreviewUrls: [...prevState.imagesPreviewUrls, reader.result]
            }));
          }

          reader.readAsDataURL(file);
      });
    }
  render() {
      const {imagesPreviewUrls} =this.state
    return (
        <div>
            <div className='row mb-3 ' style={{display: 'flex',justifyContent: 'center'}}>
            {imagesPreviewUrls.map((imagePreviewUrl, i)=>{
                    return <div style={{width:120,height:120,border:'1px solid',margin:5}}>
                    <img src={imagePreviewUrl}  style={{width:120,height:120}}/>
                    </div>
                })}
            </div>
        <div className='row '>
            <div className='Uploader'>
                    <input className='Uploader-input' onChange={(e)=>this.handleonChamhe(e)} type="file" multiple />
                    <p className='Uploader-title'>Drag your files here or click in this area.</p>
            </div>
        </div>
        </div>
    );
  }
}

export default Uploader;

