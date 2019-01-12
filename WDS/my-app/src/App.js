import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './searchResults.css';
import './share.css';
import './site.css';
import birdhouse from './birdhouse.jpg';
import birdhouse2 from './birdhouse2.jpg';
import bom from './bom.jpg';
import lowes from './lowes.png';
import homedepot from './homedept.png';
import ace from './ace.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div class="row body-content">
            <h1>
                BOM Factory
            </h1>
            <h3>
                Welcome to BOM Factory. Here's a little example of how I imagine things work (or jump straight to the project plan <a href="/Home/About">here</a>):
            </h3>
          </div>

          <div class="row body-content">
            <div class="col-md-4">
                <p>
                    Find some cool project. On pinterest or something.
                    Like, let's say this one: https://www.skiptomylou.org/diy-birdhouse/
                </p>
            </div>
            <div class="col-md-8">
                <img src={birdhouse} height="160" />
                <img src={birdhouse2} height="160" />
            </div>
        </div>

        <div class="row body-content">
          <div class="col-md-4">
              <p>
                  Find the list of materials:
              </p>
          </div>
          <div class="col-md-8">
            <p>1 – 3/8 inch dowel rod 8 inches long</p>
            <p>1 – 4” diameter perforated PVC pipe cut 5 inches long</p>
            <p>2 – #212 eye hooks</p>
            <p>
                1 – 1 X 6 piece of pine cut into 2- 5 1/2 inch X 5 1/2 inch squares
                (you may use types of other wood i.e. cedar)
            </p>
            <p>
                12 inches wire or small chain for hanging
            </p>
            <p>
                1 – 3/16“ Fir plywood cut into 1- 6” X 8 inch
            </p>
            <p>1 – 5 13/16” X 8 inch rectangles</p>
            <p>
                Small nails or brads 1” long for assembly
            </p>
            <div id="share-buttons">
              <p>Share on social media:</p>
                {/* Facebook */}
                <a href="http://www.facebook.com/sharer.php?u=https://simplesharebuttons.com" target="_blank" >
                    <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook" height="20" />
                </a>

                {/* Reddit */}
                <a href="http://reddit.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank" >
                    <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit" height="20" />
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/share?url=https://simplesharebuttons.com&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank" >
                    <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter" height="20" />
                </a>
          </div>
        </div>

        <div>
          <Search></Search>
        </div>
        </div>
          
        </header>
      </div>
    );
  }
}

class Result extends React.Component {
  render() {
    return (
      <div className="Result">
        <p>Here are our results:</p>
        <table>
            <tr>
                <td class="results-cell selected">
                    <div class="results-cell-container">
                        <img src={lowes} alt="Lowe's" height="50" />
                        <p class="results-cell-copy">Your Total: $50</p>
                        <button class="btn btn-primary">Check Out</button>
                    </div>
                    
                </td>
                <td class="results-cell">
                    <div class="results-cell-container">
                        <img class="" src={homedepot} alt="Home Depot" height="50" />
                        <br class="results-cell-copy" />
                        <button class="btn btn-default">Check Prices</button>
                    </div>
                </td>
                <td class="results-cell">
                    <div class="results-cell-container">
                        <img class="" src={ace} alt="ACE" height="50" />
                        <br class="results-cell-copy" />
                        <button class="btn btn-default">Check Prices</button>
                    </div>
                </td>
            </tr>
        </table>
      </div>
    )
  }
}

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch : false,
      value : null
    }
  }

  render() {
    return (
      <div>
            <p>Click here to do a search:</p>
            <button className="search"onClick={() => this.handleClick(this.state.isSearch)} >
                  <img src={bom} alt="BOM" height="20"/>
            </button>
            {this.renderSearchResults(this.state.isSearch, this.state.value)}
          </div>
    )
  }

  handleClick(searchState) {
    this.setState({isSearch: !searchState, value: "search result"})
  }

  renderSearchResults(isSearch, value) {
      if(isSearch) {
        return <Result value={value} />;
      }
  }
}

export default App;
