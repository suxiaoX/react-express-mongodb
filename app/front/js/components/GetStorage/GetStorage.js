import React, { Component } from 'react';

const GetStorage = (key) => (WrappedComponent) => {
    return class extends Component {
        componentWillMount() {
            const data = localStorage.getItem(key);
            this.setState({data});
        }

        render() {
            return <WrappedComponent data={this.state.data} {...this.props} />
        }
    }
}

export default GetStorage;
