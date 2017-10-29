// $(document).ready(function() {
//     $('img').each(function() {
//         //var link = $(this).attr('src');
//         var link = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCv6H7_xMSZThMwvqItUNlWlHvK-xGH4Pg"
//
//         // $(this).attr('crossOrigin', 'anonymous');
//         // this.crossOrigin = "anonymous";
//
//         var file = $(this);
//         var reader = new FileReader();
//         reader.onloadend = processFile;
//         reader.readAsDataURL(file);
//         // var base64 = getBase64Image(this);
//         function stripBase64Header(content) {
//             if (content.includes("data:image/jpeg") || content.includes("data:image/jpg")) {
//                 return content.replace('data:image/jpeg;base64,', '');
//             } else if (content.includes("data:image/png")) {
//                 return content.replace('data:image/png;base64,', "");
//
//             }
//         }
//         /**
//          * Event handler for a file's data url - extract the image data and pass it off.
//          */
//         function processFile(event) {
//             var content = event.target.result;
//             sendFileToCloudVision(stripBase64Header(content));
//         }
//
//         /**
//          * Sends the given file contents to the Cloud Vision API and outputs the
//          * results.
//          */
//         function sendFileToCloudVision(content) {
//             var type = $('#fileform [name=type]').val();
//
//             // Strip out the file prefix when you convert to json.
//             var request = {
//                 requests: [{
//                     image: {
//                         content: content
//                     },
//                     features: [{
//                         type: type,
//                         maxResults: 200
//                     }]
//                 }]
//             };
//
//             $('#results').text('Loading...');
//             $.post({
//                 url: CV_URL,
//                 data: JSON.stringify(request),
//                 contentType: 'application/json'
//             }).fail(function(jqXHR, textStatus, errorThrown) {
//                 $('#results').text('ERRORS: ' + textStatus + ' ' + errorThrown);
//             }).done(displayJSON);
//         }
//
//         /**
//          * Displays the results.
//          */
//         function displayJSON(data) {
//             var contents = JSON.stringify(data, null, 4);
//             $('#results').text(contents);
//             var evt = new Event('results-displayed');
//             evt.results = contents;
//             document.dispatchEvent(evt);
//         }
//
//         var request = {
//             requests: [{
//                 image: {
//                     content: base64
//                 },
//                 features: [{
//                     type: "LABEL_DETECTION",
//                     maxResults: 10
//                 }]
//             }]
//         };
//
//         $.post(link, {
//                 request: request
//             })
//             .done(function(json) {
//                 alert(json)
//             });
//     });
// });
//
// function getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;
//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);
//     var dataURL = canvas.toDataURL("image/png");
//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }
