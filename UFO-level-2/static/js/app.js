// use d3 to locate tbody in html and name it tbody.
var tbody = d3.select("tbody");

// append one table row 'tr' for each ufo data object.
// use 'Object.entries' to console.log each ufo data value.
data.forEach(function(ufodata){
    var row = tbody.append("tr");

    Object.entries(ufodata).forEach(function([key,value]){
        console.log(key,value);
        //append a cell to the row for each value
        var cell = row.append('td')
        cell.text(value);
    });
});


var listcontrol = d3.select("#option1");

function listchange(selectObject) {
    var val = selectObject.value;

    if(val == "city")
    {
        listcontrol.text("Select a City");
        document.getElementById('userinput').placeholder='benton';
    }
    else if(val == 'date')
    {
        listcontrol.text("Select a Date");
        document.getElementById('userinput').placeholder='1/1/2010';
    }
    else if(val == "state")
    {
        listcontrol.text("Select a State");
        document.getElementById('userinput').placeholder='ny';
    }
    else if(val == "country")
    {
        listcontrol.text("Select a Country");
        document.getElementById('userinput').placeholder='us';
    }
    else if(val == "shape")
    {
        listcontrol.text("Select a Shape")
        document.getElementById('userinput').placeholder='round';
    };

};


var filtered = d3.select('#filter-btn');

filtered.on('click', function(){
    d3.event.preventDefault();
    // select input element and get the raw html node
    var inputElement = d3.selectAll('.form-control');

    //get the value property of the input element
    var inputValue = inputElement.property('value').toLowerCase()
    
    console.log(inputValue);
    console.log(data);

    var e = document.getElementById("list");
    var val = e.options[e.selectedIndex].value;

    if(val == "city")
    {
        var filteredData = data.filter(i => i.city === inputValue);
    }
    else if(val == 'date')
    {
        var filteredData = data.filter(i => i.date === inputValue);
    }
    else if(val == "state")
    {
        var filteredData = data.filter(i => i.state === inputValue); 
    }
    else if(val == "country")
    {
        var filteredData = data.filter(i => i.country === inputValue);
    }
    else if(val == "shape")
    {
        var filteredData = data.filter(i => i.shape === inputValue); 
    }


    //remove contents in table.
    tbody.html("");

    // append filtered data to html
    filteredData.forEach((ufodata) => {
        var row = tbody.append('tr');
        Object.entries(ufodata).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });    
    });
});