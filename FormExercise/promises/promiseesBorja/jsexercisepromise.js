var urls = ["index1.html", "index2.html", "index3.html", "index4.html", "index5.html"];

urls.map(function(value) {

    $.ajax({
            url: value,
            method: 'get',
        })
        .done(function(data) {
            console.log('data :', data);
            $('#div1').append(
                '<div class= "jumbotron">' +
                data + '</div>');

        });
});



// urls.map(function(value) {

//     $.ajax({
//             url: value,
//             method: 'get',
//         })
//         .done(function(data) {
//             console.log('data :', data);
//             $('#div2').append(
//                 '<div class= "jumbotron">' +
//                 data + '</div>');

//         });
// })
// urls.map(function(value) {

//     $.ajax({
//             url: value,
//             method: 'get',
//         })
//         .done(function(data) {
//             console.log('data :', data);
//             $('#div3').append(
//                 '<div class= "jumbotron">' +
//                 data + '</div>');

//         });
// })
// urls.map(function(value) {

//     $.ajax({
//             url: value,
//             method: 'get',
//         })
//         .done(function(data) {
//             console.log('data :', data);
//             $('#div4').append(
//                 '<div class= "jumbotron">' +
//                 data + '</div>');

//         });
// })
// urls.map(function(value) {

//     $.ajax({
//             url: value,
//             method: 'get',
//         })
//         .done(function(data) {
//             console.log('data :', data);
//             $('#div5').append(
//                 '<div class= "jumbotron">' +
//                 data + '</div>');

//         });
// })