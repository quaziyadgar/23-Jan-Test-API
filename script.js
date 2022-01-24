var btn_search = document.getElementById("search");
var universities = document.getElementById("universites");
function getData(){
    var country = document.getElementById("country").value;
    // console.log("Started fetching...")
    universities.innerText="Started fetching...";
    
    url = "http://universities.hipolabs.com/search?country="+country;
           
    fetch(url).then((response)=>{
        console.log("inside first then");
        return response.json();
    }).then((data)=>{
        console.log("inside second then");
        for(let i in data){
            var div = document.createElement('div');
            div.innerText = data[i].name;
            universities.appendChild(div);

        }
        // universities.innerText = data;
    }).catch(arg=>{
        universities.innerText = "wrong country"+ arg;
    })

}

btn_search.addEventListener('click', getData);
