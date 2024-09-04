import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from 'prop-types'

export default class News extends Component {
  capatizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "sports",
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };

    document.title = `${this.capatizeFirstLetter(this.props.category)} - CatchNews`;
  }

  async updateNews() {
    try {
      this.setState({ loading: true });

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b0f598935b564d8a904721d8c84dcf56&page=${this.state.page}&pageSize=${this.props.pageSize}`;


      let apiData = await fetch(url);
      if (!apiData.ok) {
        throw new Error('Network response was not ok');
      }

      apiData = await apiData.json();
      this.setState({
        articles: apiData.articles,
        totalResults: apiData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error('Fetch error:', error);
      this.setState({ loading: false }); 
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
   this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  handlePrev = async () => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  render() {
    return (
      <>
        <h1 className="text-center mt-3">CatchNews - Top {this.capatizeFirstLetter(this.props.category)} Headlines</h1>
        {this.state.loading && <Loader />}
        <div className="d-flex flex-wrap justify-content-around align-self-start">
          {!this.state.loading && this.state.articles.map((article) => {
            return (
              <div
                key={article.url}
                className="d-flex flex-wrap my-4 justify-content-around align-self-start align-items-center"
              >
                <NewsItems
                  title={article.title}
                  description={article.description}
                  imageUrl={article.urlToImage}
                  newsUrl={article.url}
                  auther={article.author}
                  date={article.publishedAt}
                  source={article.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center mb-5 mt-2">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePrev}
            className="btn btn-primary mx-5 px-3"
          >
            &larr; Prev
          </button>
          <button
            type="button"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)}
            onClick={this.handleNext}
            className="btn btn-primary mx-5"
          >
            Next &rarr;
          </button>
        </div>
      </>
    );
  }
}
