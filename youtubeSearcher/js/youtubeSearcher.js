var key = "AIzaSyAb-U9kZFj9O7_UlG-7oK_WzKJyseDbk0U";

var input = document.querySelector(".form-control");
var div = document.querySelector(".videos");
var button = document.querySelector(".dugme");
var playVideo = document.querySelector(".playvideo")
var iframe = document.querySelector("iframe");

button.onclick = function () {
    div.innerHTML = "";
    var request = new XMLHttpRequest();
    request.open("GET", 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + input.value + '&key=' + key);
    request.send();


    request.onload = function () {
        var data = JSON.parse(request.responseText);


        for (var i = 0; i < data.items.length; i++) {
            var divVideo = document.createElement("div");
            var img = document.createElement("img");
            img.setAttribute("src", data.items[i].snippet.thumbnails.default.url);
            divVideo.appendChild(img);
            divVideo.className = "video col-4";
            divVideo.setAttribute("data-id", data.items[i].id.videoId);
            div.appendChild(divVideo);
            var h4 = document.createElement("h4")
            h4.textContent = data.items[i].snippet.title;
            divVideo.appendChild(h4);
            var p = document.createElement("p");
            p.textContent = data.items[i].snippet.description;
            divVideo.appendChild(p);
            divVideo.addEventListener("click", function (event) {
                var videoId = event.currentTarget.dataset.id;
                iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId)
            })
        }
    }
}
