import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'
import PlaceholderImg from '../../src/images/placeholder-news.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'


export class NewsCont extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: '8',
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        apiKey: PropTypes.string
    }


    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            results: 0,
            progress: 0
        }
    }
    async componentDidMount() {

        await this.fetchNews();
    }

    async fetchNews() {
        this.setState({progress : 20})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        this.setState({
            loading: true
        })
        const data = await fetch(url);
        this.setState({progress : 40})
        const parsedData = await data.json();
        this.setState({progress : 60})
        this.setState({
            articles: parsedData.articles,
            loading: false,
            results: parsedData.totalResults
        });
        this.setState({progress : 100})
        // this.setState({progress : 0})
    }

    fetchMoreData = async() => {
        console.log(this.props.apiKey);
        this.setState({progress : 20})
        this.state.page++;
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&language=en&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
        
        const data = await fetch(url);
        this.setState({progress : 40})
        const parsedData = await data.json();
        this.setState({progress : 60})
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            loading: false,
        });
        this.setState({progress : 100})
    }

    
    render() {

        return (
            <>
                <LoadingBar progress={this.state.progress} color='#3EB489'/>           
                <h2 className='my-4 text-center'>Info-Bytes - Byte Sized News</h2>
                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.results}
                    loader={<Spinner />}>
                    <div className='container my-6 '>
                        <div className="row row-cols-1 row-cols-sm-4 my-4">
                            {this.state.articles.map((el) => {
                                return <div className="col" key={el.url}>
                                    <NewsCard title={el.title} description={el.description} imageURL={el.urlToImage ? el.urlToImage : PlaceholderImg} newsURL={el.url} author={el.author} date={el.publishedAt} publisher={el.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default NewsCont