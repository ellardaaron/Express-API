//Load preexisting chirps on page load
$( document ).ready(function getThemChirps() {

      $.ajax({
        type: "GET",
        url: "http://localhost:3000/api/chirps/",
        data:{ get_param: 'value' },
        dataType: 'json',
        success: function (data) { 
            $.each(data, function(index, element) {
                $('#chirpDisplay').append($('<div>', {
                    text: `${element.user} said: ${element.text} at: ${element.timeStamp}`
                }));
            });
        }
      });
});

//Post chip when button is clicked
$("#postChirpButton").click(function() {
    var chirpText = $("#chirpText").val();
  var userName = $("#userName").val();


  $.ajaxSetup({
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  });

  $.ajax({
    type: "POST",
    url: "http://localhost:3000/api/chirps/",
    data: JSON.stringify({
      user: userName,
      text: chirpText,
      timeStamp: timeStamp()
    }),
    success: 200
  });

  location.reload();

});

//Function to get a formatted timestamp
function timeStamp() {
    var now = new Date();
    var date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    var time = [now.getHours(), now.getMinutes(), now.getSeconds()];
    var suffix = time[0] < 12 ? "AM" : "PM";
    time[0] = time[0] < 12 ? time[0] : time[0] - 12;
    time[0] = time[0] || 12;
  
    for (var i = 1; i < 3; i++) {
      if (time[i] < 10) {
        time[i] = "0" + time[i];
      }
    }
    return date.join("/") + " " + time.join(":") + " " + suffix;
  }

//Function to get and display chirps

