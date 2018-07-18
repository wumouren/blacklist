import React, { Component } from 'react';
import './App.less';
import { Button, Upload } from 'antd';

class App extends Component {
 
  render() {

    const props = {
      name: 'file',
      action: 'http://127.0.0.1:9998/upload',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
      },
    };

    return (
      <Upload {...props}>
        <Button>上传</Button>
      </Upload>
    );
  }
}

export default App;
