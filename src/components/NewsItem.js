import React from 'react'

const NewsItem =(props)=>{

  
    let { Title, description, Imageurl, newsUrl, author, date,source } = props
    return (
      <div>
        <div className="card" style={{ margin: "8px" }}>
      <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }>

                        <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
          <img src={Imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{Title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target=" _blank" className="btn btn-dark"> Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
