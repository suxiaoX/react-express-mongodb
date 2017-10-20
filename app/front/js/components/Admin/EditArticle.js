/*
 * @Author: leo 
 * @Date: 2017-10-19 17:29:25 
 * @Last Modified by: leo
 * @Last Modified time: 2017-10-19 22:07:56
 */
import React from 'react';
import LzEditor from 'react-lz-editor';

export class EditArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            htmlContent:  '',
            markdownContent: '## HEAD 2 \n markdown examples \n ``` welcome ```',
            responseList: []
        }
        this.receiveHtml = this.receiveHtml.bind(this);
        this.submitArticle = this.submitArticle.bind(this);
    }
    receiveHtml(content) {
    console.log('recieved HTML content', content);
    // this.setState({responseList:[]});
    }
    submitArticle() {
        console.log(this.state.htmlContent);
    }
    render() {
    // let policy = '';
    const uploadProps = {
        action: 'http://v0.api.upyun.com/devopee',
        onChange: this.onChange,
        listType: 'picture',
        fileList: this.state.responseList,
        data: (file) => {
            // console.log(file);
        },
        multiple: true,
        beforeUpload: this.beforeUpload,
        showUploadList: true
    }
    const { htmlContent } = this.state;
    return (
        <div>
            <LzEditor 
                active={false} 
                importContent={htmlContent} 
                cbReceiver={this.receiveHtml} 
                video={false}
                audio={false}
                fullScreen={false}
                uploadProps={uploadProps}
                lang=""/>
            {/* 
                * markdown 实例
                <div>
                    <LzEditor
                    active={true}
                    importContent={this.state.markdownContent}
                    cbReceiver={this.receiveHtml}
                    uploadConfig={uploadConfig}
                    video={false}
                    audio={false}
                    fullScreen={false}
                    convertFormat="markdown"/>
                </div>
            */}
            <div className="submit" onClick={this.submitArticle}>发布</div> 
        </div>
    )      
    }
}