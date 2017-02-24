angular.module('shared')
        .service('fileContentService', function () {

            // Convert standard javascript object file to base64 format uri
            this.objToBase64 = function (files) {

                var base64Content = new Array();

                angular.forEach(files, function (file, i) {

                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
//                        console.log(this.result);
//                        base64Content.push(uri);
                    };

                    fileReader.readAsDataURL(file);
                    console.log(fileReader.result);
                });

                return base64Content;
            }

            this.serializeBlob = function (files) {
                var list = [];
                angular.forEach(files, function (files, fKey) {

                    var binaryFile = atob(files.file);
                    var byteNumbers = new Array(binaryFile.length);
                    for (var i = 0; i < binaryFile.length; i++) {
                        byteNumbers[i] = binaryFile.charCodeAt(i);
                    }
                    var byteArray = new Uint8Array(byteNumbers);
                    var blob = new Blob([byteArray.buffer], {type: "image/png"});

                    list[fKey] = blob;
                });
            }
            
            this.getFormatFromBase64Url = function(imageContent){
                return imageContent.split(";")[0].split("/")[1];
            }
            
            this.getContentFromBase64Url = function(imageContent){
                return imageContent.split(",")[1];
            }
        });