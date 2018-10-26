//var result = "";

// values.map((value, index) => {
//     var id = '#div' + (index + 1);
//     $(id).append(
//         '<div class= "jumbotron">' +
//         value + '</div>');
// })


// var urls = ["index1.html", "index2.html", "index3.html", "index4.html", "index5.html"];
// var promises = [];
// urls.map(function(value) {
//     $.ajax({
//             url: value,
//             method: 'get',
//         })
//         .done(function(data) {
//             console.log('data :', data);
//             $('#div1').append(
//                 '<div class= "jumbotron">' +
//                 data + '</div>');
//         });
// });

var promises = [];
var urls = ["index1.html", "index2.html", "index3.html", "index4.html", "index5.html"];

urls.map((url) => {
    promises.push(new Promise((resolve, reject) => {
        $.ajax({
                url: url,
                method: 'get'
            })
            .done(function(data) {
                resolve(data);
            }).fail(function(error) {
                reject();
            });
    }));
});
Promise.all(promises).then((values) => {
    console.log('values :', values);
    console.log('promises :', promises);
    setTimeout(() => {
        $('#div1').append(
            '<div class= "jumbotron">' +
            values + '</div>');
    }, 1000)
    setTimeout(() => {
        $('#div2').append(
            '<div class= "jumbotron">' +
            values[1] + '</div>');
    }, 2000)
    setTimeout(() => {
        $('#div3').append(
            '<div class= "jumbotron">' +
            values[2] + '</div>');
    }, 3000)
    setTimeout(() => {
        $('#div4').append(
            '<div class= "jumbotron">' +
            values[3] + '</div>');
    }, 4000)
    setTimeout(() => {
        $('#div5').append(
            '<div class= "jumbotron">' +
            values[4] + '</div>');
    }, 5000)
}).catch(function() {
    $("values").append("ERROR");
})