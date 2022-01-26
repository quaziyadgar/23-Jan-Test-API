var btn_search = document.getElementById("search");
var universities = document.getElementById("universites");
function getData(){
    var country = document.getElementById("country").value;
    // console.log("Started fetching...")
    universities.innerText="Started fetching...";
    
    url = "https://api2.binance.com/api/v3/ticker/24hr";
           
    fetch(url).then((response)=>{
        // console.log("inside first then");
        return response.json();
    }).then((data)=>{
        // console.log("inside second then");
        var table = document.createElement('table');
        var tr = document.createElement('tr');
        var td0 = document.createElement('th');
        td0.innerText = "S.No.";
        var td1 = document.createElement('th');
        td1.innerText = "Coin Name";
        var td2 = document.createElement('th');
        td2.innerText = "Price";
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            universities.appendChild(table);
        for(let i in data){
            let tr = document.createElement('tr');
            let td0 = document.createElement('td');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');
            td0.innerText = i;
            td1.innerText = data[i].symbol;
            td2.innerText = data[i].priceChange;
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);
            universities.appendChild(table);

        }
        // universities.innerText = data;
    }).catch(arg=>{
        universities.innerText = "404 "+ arg;
    });

}

btn_search.addEventListener('click', getData);
