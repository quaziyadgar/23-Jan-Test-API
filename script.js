var country = document.getElementById('country').value;
var btn_search = document.getElementById('search');

function getData(){
    console.log("Started fetching...")
    url = "http://universities.hipolabs.com/search?country={"+country+"}";
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.text();
    }).then((data)=>{
        console.log("inside second then");
        console.log(data);
    })
}

getData();