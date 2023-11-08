import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'
import PlaceholderImg from '../../src/images/placeholder-news.jpg'
import Spinner from './Spinner';


export class NewsCont extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '8',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            limit: 1
        }
    }
    async componentDidMount() {
       
        await this.fetchNews();
    }

    async fetchNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=967158990b304bf4a3083f87c3c27455&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({
            loading: true
        })
        const data = await fetch(url);
        const parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            limit: Math.ceil(parsedData.totalResults / 20),
            loading: false
        });
    }

    nextPage = () => {
        this.state.page++;
        console.log(this.state.page);
        this.fetchNews();
    }
    prevPage = () => {
        this.state.page--;
        console.log(this.state.page);        
        this.fetchNews();
    }
    render() {

        return (

            <div className='container my-6 '>
                <h2 className='my-4 text-center'>Info-Bytes - Byte Sized News</h2>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <div className="row row-cols-1 row-cols-sm-4 my-4">
                    {this.state.articles.map((el) => {
                        return <div className="col" key={el.url}>
                            <NewsCard title={el.title} description={el.description} imageURL={el.urlToImage ? el.urlToImage : PlaceholderImg} newsURL={el.url} author={el.author} date={el.publishedAt} publisher={el.source.name} />
                        </div>
                    })}
                    <div className="d-flex justify-content-between w-100">
                        <button type="button" disabled={(this.state.page <= 1)} className="btn btn-dark" onClick={this.prevPage}>Previous</button>
                        <button type="button" disabled={(this.state.page >= this.state.limit)} className="btn btn-dark" onClick={this.nextPage}>Next</button>
                    </div>
                </div>}



            </div>
        )
    }
}

export default NewsCont