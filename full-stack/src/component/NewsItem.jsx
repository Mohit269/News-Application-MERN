import React, { Component } from 'react'
const axios = require("axios");
export default class NewsItem extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          Data: [],
          loading: true,
          like:0
        };
      }
    
      async componentDidMount() {
        this.setState({ loading: true })
        const param = new URLSearchParams(window.location.href);
        let url1;
        for (const para of param) {
          url1=para[0];
          console.log(para[0]);
        }
        console.log(url1);
        let url = url1;
        try {
          const response = await axios.post(url);
          this.setState({
            Data: response.data,
            loading: false
          });
        } catch (error) {
          console.log(error);
        }
    
      }
      
      render() {
        return (
          <div className='justify-content-center'>
            <h1 className='text-center' ><span style={{ backgroundColor: "#CEE5D0", borderRadius:"100px" }}> &nbsp;Top-Headlines&nbsp; </span></h1>
            {this.state.loading && <div className="text-center">
              <div className="spinner-border" role="status">
    
              </div>
              <h3><i>Wait while we load your items</i></h3>
            </div>}
            <div className='container my-4 justify-content-center'>
    
              <div className='row ml-4 fixed-fluid'>
                {this.state.Data.map((element) => (
    
                  <div className='border border-4  rounded col-md-3 mx-3 py-2 my-2'>
                    <p>
                      <strong>{element.title.slice(0,100)}...</strong>
                    </p>
                    <p>{element.description?element.description.slice(0,30):""}...</p>
                    <img
                      className="img-thumbnail"
                      src={element.urlToImage ? element.urlToImage : "https://winfort.net/wp-content/themes/consultix-1/images/no-image-found-360x260.png"} url1={element.url}
                      alt="no images found"
                    />
                    <a href={element.url}> <button className="container btn btn-outline-info btn-sm mt-1">
                      Read More
                    </button></a>
                  <button className="mt-2 " style={{borderRadius:"100px",border:'none'}}>Read Later</button>
                    </div>
      
                  
    
    
                ))}
    
    
              </div>
            </div>
          </div>
    )
  }
}
