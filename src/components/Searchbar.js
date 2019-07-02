import React, { Component } from 'react'

export default class Searchbar extends Component {
    state = { input: ''};
    onInputChange = event => {
        this.setState({ input: event.target.value});
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.Formsubmit(this.state.input);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input value={this.state.input}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
