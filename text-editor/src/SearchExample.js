import React from 'react'
class SearchExample extends React. Component {
    constructor() {
        super();
        this.state = {
            searchString: ""
        };
    }

    handleChange(e) {

        this.setState({searchString: e.target.value});
    }

    render() {
        var libraries = this.props.items, searchString = this.state.searchString;
        if (searchString.length > 0) {
            const libraries = libraries.filter(function (l) {
                return l.name.match(searchString);
            });
            return (<div>
                <input type="text" value={this.state.searchString} onChange={()=>this.handleChange()}
                       placeholder="Type here"/>

                <ul>
                    { libraries.map(function (l) {
                        return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                    }) }
                </ul>
            </div>);

        }


    }
}
export default SearchExample;