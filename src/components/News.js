import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page:1,

        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=<API KEY>&page=1";
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=<API KEY>&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page-1,
            articles: parsedData.articles
        })
    }

    handleNextClick = async () => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/20)){

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=<API KEY>&page=1`;
            let data = await fetch(url);
            let parsedData = await data.json()
    
            this.setState({
                page: this.state.page+1,
                articles: parsedData.articles
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h1>NewsStar top headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 mt-2" key={element.url}>
                            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick} >Nest &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
