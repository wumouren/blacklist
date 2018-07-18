const express = require('express');
const path = require('path');
const xlsx = require('node-xlsx');
const formidable = require('formidable');
const util = require('util');

const fs= require('fs');
const app = express();
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  next();
});
app
  .post('/upload', (req,res) => {
    const form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.keepExtensions = true;
    form.maxFieldsSize = 20 * 1024 * 1024;
    form.uploadDir = __dirname + "/";
    form.parse(req, (err, fields, files) => {
      if(err){
        res.send({ type: 0 ,data: [] })
      }
      // ----- 改名
      // //拿到扩展名
      // const extname = path.extname(files.file.name);
      // //旧的路径
      // const oldpath = files.file.path;
      // //新的路径
      // const newpath = __dirname + '/list' + extname;
      // fs.rename(oldpath,newpath,(err) =>{
      //   if(err){
      //     console.log(err)
      //     throw  Error("改名失败");
      //   }
      //   res.send({info: 1});
      // });
      const arr = [];
      const obj = xlsx.parse(files.file.path)[0];
      obj.data.forEach((item, index) => {
        const _obj = {};
        let flag;
        item.forEach((_item, _index) => {
          if(_index - flag >  1){
            for(let i = 0; i < _index - flag; i++){
              _obj[flag + i + 1] = '--';
            }
          }
          _obj[_index] = _item;
          flag = _index;
        })
        arr.push(_obj);
      })
      fs.readdir(__dirname, 'utf-8', (err, data) => {
        console.log(data,'data')
      })
      res.send({type: 1, data: arr})
    });
  })
  .listen(9998, console.log('server run 9998'))

