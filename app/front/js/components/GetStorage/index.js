/*
 * @Author: leo 
 * @Date: 2017-10-19 17:10:11 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-19 17:15:30
 */

// 自动生成注释 control + option + i
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
