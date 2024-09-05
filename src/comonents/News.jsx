import React, { Component } from "react";
import NewsItems from "./NewsItems";
import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  capatizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  static defaultProps = {
    country: "us",
    pageSize: 12,
    category: "sports",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    setProgress: PropTypes.func,
    apikey : PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${this.capatizeFirstLetter(
      this.props.category
    )} - CatchNews`;
  }

  async updateNews() {
    try {
      this.props.setProgress(10);
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      this.props.setProgress(30);

      let apiData = await fetch(url);
      if (!apiData.ok) {
        throw new Error("Network response was not ok");
      }
      this.props.setProgress(50);

      apiData = await apiData.json();
      this.setState({
        articles: this.state.articles.concat(apiData.articles),
        totalResults: apiData.totalResults,
        loading: false,
      });
      this.props.setProgress(100);

    } catch (error) {
      console.error("Fetch error:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  getRandomIntegerInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
  
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  render() {
    return (
      <>
        <h1 className="text-center mt-3">
          CatchNews - Top {this.capatizeFirstLetter(this.props.category)}{" "}
          Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          loader={<Loader />}
        >
          <div className="d-flex flex-wrap justify-content-around align-self-start">
            {!this.state.loading &&
              this.state.articles.map((article) => {
                return (
                  <div
                    key={this.getRandomIntegerInclusive(1, 1000000000000)}
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
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-center mb-5 mt-2">
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
        </div> */}
      </>
    );
  }
}
