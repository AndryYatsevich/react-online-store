import React from 'react';

class Search extends React.Component {

    search = (e) => {
      console.log('keyDown: ', e.location

      );
    };
    searchKeyPress = (e) => {
      console.log('keyPress: ', e);
    };

    onDoubleClick = (e) => {
        console.log('doubleclick: ', e);
    };

    render() {
        return (
            <div>
                <div onToggle={this.onDoubleClick}>дабл клик</div>
                <form><input className={'search'} type={'text'} onKeyDown={this.search} onKeyPress={this.searchKeyPress}/><button className={'search-btn'}>Search</button></form>
            </div>
        );
    }
}

export default Search;