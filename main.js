function getfile(file,callback)
{
  var xhr=new XMLHttpReqest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange =function(){
    if(xhr.readystate===4 && xhr.status=="200"){
callback(xhr.responseText);
}
  };
  xhr.send();
}
getfile("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  details(data.basics);
})



var chidl1=document.createElement("div");
chidl1.classList.add("profile");
parent.appendChild(chidl1);

var chidl1=document.createElement("div");
chidl1.classList.add("content");
parent.appendChild(chidl2);
function eduction(edu){
  var heading=document.createElement("h2");
  chidl2.appendChild(heading);
  haeading.textContent="Education Qualification";
}

function details(basics){
var img=document.querySelector("img");
  img.src=basics.photo;
  chidl1.appendChild(img);

  var name =document.createElement("h3");
    name.textContent=basics.name;
    chidl1.appendChild(name);


    var email =document.createElement("a");
      email.href="djhansilakshmi.1997@emai.com";
chidl1.appendChild(email);


var phone =document.createElement("h3");
  phone.textContent=basics.mobile;
chidl1.appendChild(phone);

var Addr=document.createElement("h3");
Addr.textContent="Address:";
chidl1.appendChild(Addr);


var hr=document.createElement("hr")
chidl1.appendChild(hr);

var Addr=document.createElement("p")
Addr.textcontent=basics.Address;
chidl1.appendChild(Addr);
}

function  carrer(obj){
var heading=document.createElement("h2");
chidl2.appendChild(heading);
heading.textContent="career objective";
var hline=document.createElement("hr");
chidl2.appendChild(hline);
var p=document.createElement("p");
p.textContent=obj.info;
child2.appendChild(p);
}
function eduction(end)
{
var heading=document.createElement("h2");
chidl2.appendChild(heading);
heading.textContent="Educational Qualification";
var hline=document.createElement("hr");
child2.appendChild("hline");
}
for(var i=0;i<edu.length;i++)
{
var listm=document.createElement("li");
list.appendChild("li")
litem.textContent=edu[i].course;
}
}
