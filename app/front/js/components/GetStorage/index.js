/*
 * @Author: leo 
 * @Date: 2017-10-19 17:10:11 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-20 15:59:29
 */

// 自动生成注释 control + option + i
import React, { Component } from 'react';

const GetStorage = (key) => (WrappedComponent) => class extends Component {
    componentWillMount() {
        const data = localStorage.getItem(key);
        this.setState({data});
    }

    testClick() {
        console.log('----test----');
    }

    render() {
        return <WrappedComponent data={this.state.data} testClick={this.testClick} {...this.props} />
    }
}

export default GetStorage;
