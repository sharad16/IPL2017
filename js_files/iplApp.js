$(function () {

//  $(window).scroll(function() {
//         var scroll = $(window).scrollTop();
//         if (scroll >= 500) {
//             $(".header").addClass('smaller');
//         } else {
//             $(".header").removeClass("smaller");
//         }
//     });
    var products = [];

    function readFirebase(callback) {
        var ref = firebase.database().ref();
        ref.on("value", function (data) {
            console.log("firebase");
            products = data.val();
            callback(products);
        });
    }


    readFirebase(function (data) {

        $(window).trigger('hashchange');
        console.log("After Firebase");
        var list = $('.all-products .products-list');
        var theTemplateScript = $("#products-template").html();
        // debugger;
        //Compile the template​
        var theTemplate = Handlebars.compile(theTemplateScript);
        //appending to html with json data
        list.append(theTemplate(data));

        // Each products has a data-index attribute.
        // On click change the url hash to open up a preview for this product only.

    });








});
