'use strict';


var mongoose = require('mongoose');


var fs = require('fs');
var formidable = require('formidable');

exports.uploadFile = function (req, res) {
    
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
        
        var filesize = files.filetoupload.size;
        console.log("file size");
        console.log(filesize);
        if (filesize >1024 * 1024) {
            res.send('file size exceeded 1 MB');
        }
        var oldpath = files.filetoupload.path
        var newpath = 'C:/Users/sakshi tripathi/RecordNodeApp/images/' + files.filetoupload.name;
        res.write('File uploaded');
        fs.rename(oldpath, newpath, function (err) {
            if (err) throw err;
            res.write('File uploaded and moved!');
           
            
            res.end();
    });   
});

};

exports.renameFile = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log('fields:', fields);
        
        var oldpath = 'C:/Users/sakshi tripathi/RecordNodeApp/images/' + fields.oldFile;
        var newpath = 'C:/Users/sakshi tripathi/RecordNodeApp/images/' + fields.renamedFile;
        fs.rename(oldpath, newpath, function (err) {

            if (err) {
                console.log(oldpath);
                console.log(newpath);
                res.send(err);
            }
            res.send("file renamed successfully");
        });
    });
    
    
};
exports.deleteFile = function (req, res) {
    var form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
        console.log('fields:', fields);

        var path = 'C:/Users/sakshi tripathi/RecordNodeApp/images/' + fields.deleteFile;


        fs.unlink(path, function (err) {
            if (err) throw err;
            res.send('File deleted!');
        });
    });
};
//exports.list_all_tasks = function (req, res) {
   // Task.find({}, function (err, task) {
     //   if (err)
       //     res.send(err);
       // res.json(task);
   // });