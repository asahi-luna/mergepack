const rootdir = '.';  //根目录

//合并js文件，并去除console
var fs = require('fs');
var path = require('path');  //解析需要遍历的文件夹
// var filePath = path.resolve(mergedir);  //当前绝对路径
console.log(path.resolve('./src'));

//清理文件夹
// cleanDir(path.resolve('./input'));
cleanDir(path.resolve('./babel'));

//清理文件夹
function cleanDir(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                //根据文件路径获取文件信息，返回一个fs.Stats对象
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();//是文件
                        var isDir = stats.isDirectory();//是文件夹
                        if(isFile){
                            // console.log(path.basename(filedir));  //打印文件名
                            console.log('读取' + filedir +'成功');
                            // var basen = path.basename(filedir);
                            fs.unlinkSync(filedir);
                            console.log('删除' + filedir +'成功');
                            // console.log(path.extname(filedir));  //打印拓展名
　　　　　　　　　　　　　　　 // 读取文件内容
                            // var content = fs.readFileSync(filedir, 'utf-8');
                            // console.log(content);
                        }
                        if(isDir){
                            fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                        }
                    }
                })
            });
        }
    });
}