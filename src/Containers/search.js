import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }
    render() {
        return (
            <React.Fragment>
                <div classname='container col-8'>
                    <div className="input-group mb-3 mt-5">
                        <input onChange={this.handleSearchText} type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button onClick={this.handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                            <button onClick={this.handleSubmit} className="btn btn-outline-secondary" type="button" id="button-addon2">Upload</button>
                        </div>
                    </div>
                </div> {/* END OF CONTAINER */}
            </React.Fragment>
        );
    }
}





export default Search;


