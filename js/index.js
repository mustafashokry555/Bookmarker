var siteName = document.getElementById("siteName");
var siteUrl = document.getElementById("siteUrl");
var cont ;
if(localStorage.getItem("site")==null)
{
  cont = [];
}
else
{
  cont = JSON.parse(localStorage.getItem("site"));
}
function submit() {
  siteNameAlert();
  siteUrlAlert();
  var site = {
    name: siteName.value,
    url: siteUrl.value,
  }
  if (site.name !== "" && site.url !== "") 
  {
    cont.push(site);
    localStorage.setItem("site",JSON.stringify(cont));
    addSite();
    reset();
  }
}
function siteNameAlert() {
  if (siteName.value === "") {
    document.getElementById("siteNameAlert").innerHTML = 
    `<p class="bg-FFB2B2 w-75 mt-2 p-1 mb-4 mx-auto rounded">
        Name is required
      </p>`;
  } 
  else {
    document.getElementById("siteNameAlert").innerHTML = ``;
  }
}
function siteUrlAlert() {
  if (siteUrl.value === "") {
    document.getElementById("siteUrlAlert").innerHTML = 
    `<p class="bg-FFB2B2 w-75 mt-2 p-1 mb-4 mx-auto rounded">
       URL is required
        </p>`;
  } 
  else {
    document.getElementById("siteUrlAlert").innerHTML = ``;
  }
}
function addSite() {
  var data = "";
  for (var i = 0; i < cont.length; i++) {
    data +=
      `<div class="webwell">
      <h2>` + cont[i].name + `</h2>
      <a href = "http://` + cont[i].url + `" target="_blank" >visit</a>
      <button onclick="deleteSite(` + i + `) ">Delete</button>
      </div>`;
  }
  document.getElementById("bookmarkList").innerHTML = data;
}
function reset() {
  siteName.value = "";
  siteUrl.value = "";
}
function deleteSite(index) {
  cont.splice(index, 1);
  addSite();
}
