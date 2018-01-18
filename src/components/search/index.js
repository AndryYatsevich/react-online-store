import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div>
                <form><input className={'search'} type={'text'}/><button className={'search-btn'}>Search</button></form>
            </div>
        );
    }
}

export default Search;