import React, { Component } from 'react'

const NewsCard = (props) => {
    let { title, description, imageURL, newsURL, author, date } = props;
    return (
        <div>
            <div className="card my-2 rounded" >
                <img src={imageURL} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsURL} target='_blank' className="btn btn-sm btn-dark">More Details</a>
                    <p className="card-text"><small className="text-body-secondary">{`By-${author ? author : 'Unkown'}  On-${new Date(date).toDateString()}`}</small></p>
                </div>
            </div>

        </div>
    )
}

export default NewsCard