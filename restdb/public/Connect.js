
function Conn() {

  var data = null;
  let Url='https://assignment-85ac.restdb.io';

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;

  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === 4) {
      console.log(this.responseText);

      var json = JSON.parse(this.responseText);
      DisplayData(json);
    }
  });

  xhr.open("GET", "https://assignment-85ac.restdb.io/rest/assignment");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.setRequestHeader("x-apikey", "6334019932330102d591d25c");
  xhr.setRequestHeader("cache-control", "no-cache");

  xhr.send(data);

  function DisplayData(info) {
    var displayText = "";
    for (var i = 0; i < info.length; i++) {
      displayText += `
        <div className="mt-3 p-3 border rounded shadow">
          <h2 className="text-center">${info[i].SCP}</h2>
          <p className="fst-italic">${info[i].Description}</p>
          <p className="fst-italic">${info[i].Containment}</p>
        <div>
        `;
    }
    document.getElementById("root").innerHTML = displayText;
  }

  
}