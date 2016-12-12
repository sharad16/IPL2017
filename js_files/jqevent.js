$(document).ready(function() {

    $(document).on('click','a.product-photo', function(e) {
        console.log("calling onclick method....");
        e.preventDefault();
        var index = $(this).attr("id");
        from(index);
      });

    function from(index) {
      var fref = firebase.database().ref();
        fref.on("value", function(data) {
          console.log("calling..."+data.val()[index].team_players.length);
          $('h1.title').replaceWith("<h1 class='title' style='margin-top:80px;'>"+data.val()[index].team_name+"<b></b><h1> ")
          $("ul").replaceWith("<ul></ul>");
            $.each(data.val()[index].team_players, function(i, f) {
             $('body').css('background','#000 url("'+data.val()[index].team_back+'"');

                    $("ul").append('<li style="display:inline-block;repeat:no-repeat;"><div>\
                    <marquee direction="left">  <img style="max-width:180px;max-height:220px;" data-toggle="modal" data-target="#'+i+'" class="align"  src="' + f.player_img_url + ' "  alt="image1" /></marquee>' +
                 '<h6 style="color:black;"><h1>&nbsp;&nbsp;&nbsp;&nbsp;' + f.player_name + '</h1></h6>' +
                 '</div></li>');

                 $("div.playerModal").append('<div class="modal fade" id="'+i+'" role="dialog">\
                 <div class="modal-dialog modal-sm">\
               <!-- Modal content--><div class="modal-content">\
                       <div lass="modal-body">\
                       <p style="color:black;"><strong><b>'+"Name:"+ f.player_name+ '<br>' +"Batting Style:"+f.player_batting_style+'<br>'+"Bowling Style:"+f.player_bowling_style+'<br>'+"DOB:"+f.player_dob+'<br>'+"Nationality:"+f.player_nationality+'<br>'+"Role:"+f.player_role+'</b></strong><hr></hr></p>\
                       </div>\
                       <div class="modal-footer">\
                         <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
                       </div>\
                     </div>\
                   </div>\
                 </div>'

            );
        });
      });

    }
});
