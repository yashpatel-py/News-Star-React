import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <div className='container my-3'>
                <h2>NewsStar top headlines</h2>
                <div className="row">
                    <div className="col-md-4 mt-2">
                        <NewsItem title="My title" description="My description"/>
                    </div>
                    <div className="col-md-4 mt-2">
                        <NewsItem title="My title" description="My description"/>
                    </div>
                    <div className="col-md-4 mt-2">
                        <NewsItem title="My title" description="My description"/>
                    </div>
                    <div className="col-md-4 mt-2">
                        <NewsItem title="My title" description="My description"/>
                    </div>
                    <div className="col-md-4 mt-2">
                        <NewsItem title="My title" description="My description"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
