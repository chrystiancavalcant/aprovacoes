import React, { Component } from 'react'


class Search extends Component {
    render(){
        return(

            <div className="navbar-right">                          
            <ul className="nav navbar-nav">
              <li>
              <div className="search-dashboard">
                  <form>
                       <input placeholder="Search here" type="text" />
                       <button type="submit"><i className="fa fa-search"></i></button>
                  </form>
             </div>							
              </li>
              </ul>
              </div>
        )
    }
}
export default Search