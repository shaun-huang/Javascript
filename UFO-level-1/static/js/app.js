// from data.js

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

// select the filter button
var filtered = d3.select('#filter-btn');

filtered.on('click', function(){
    d3.event.preventDefault();
    // select input element and get the raw html node
    var inputElement = d3.select('#datetime');

    //get the value property of the input element
    var inputValue = inputElement.property('value')
    
    console.log(inputValue);
    console.log(data);

    var filteredData = data.filter(i => i.datetime === inputValue);

    console.log(filteredData);
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