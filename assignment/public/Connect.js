function Conn()
{
    var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === 4) {
    console.log(this.responseText);
    
    var json =JSON.parse(this.responseText);
    DisplayData(json);
  }
});

xhr.open("GET", "https://assignment-85ac.restdb.io/rest/assignment");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("x-apikey", "6334019932330102d591d25c");
xhr.setRequestHeader("cache-control", "no-cache");

xhr.send(data);

function DisplayData(info)
{
    var displayText = "";
    for(var i = 0; i< info.length; i++)
    {
        displayText += `
          <h2>${info[i].Scp}</h2>
          <p>${info[i].Description}</p>
        `;
    }
    document.getElementById("root").innerHTML = displayText;
}


}