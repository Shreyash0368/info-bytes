import React, { Component, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import NewsCard from './NewsCard'
import PlaceholderImg from '../../src/images/placeholder-news.jpg'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'


const NewsCont = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [results, setResults] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        fetchNews();
    }, [])

    const fetchNews = async () => {
        setProgress(0);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=en&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        setLoading(true);
        const data = await fetch(url);
        setProgress(40);
        const parsedData = await data.json();
        setProgress(60);
        setArticles(parsedData.articles);
        setLoading(false);
        setPage(page + 1);
        setResults(parsedData.totalResults);
        setProgress(100);
    }
    
    const fetchMoreData = async () => {
        setProgress(20);
        setPage(page + 1);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&language=en&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
        
        const data = await fetch(url);
        setProgress(40);
        const parsedData = await data.json();
        setProgress(60);
        setArticles(articles.concat(parsedData.articles));
        setLoading(false);        
        setProgress(100);
    }

    return (
        <>
            <LoadingBar progress={progress} color='#3EB489' />
            <h2 className='my-4 text-center'>Info-Bytes - Byte Sized News</h2>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={page <= Math.floor(results/props.pageSize) + 1}
                loader={<Spinner />}>
                <div className='container my-6 '>
                    <div className="row row-cols-1 row-cols-sm-4 my-4">
                        {articles.map((el) => {
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

NewsCont.defaultProps = {
    country: 'in',
    pageSize: '8',
    category: 'general'
}

NewsCont.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string
}

export default NewsCont