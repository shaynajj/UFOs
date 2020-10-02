// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");
var filters = {datetime:"",city:"",state:"",country:"",shape:""}

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
//var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {

  var datefilter = d3.select("#datetime").property("value")
  var date_filterId = d3.select("#datetime").property("id")

  if (datefilter != ""){
    filters[date_filterId] = datefilter_Value;
  }
  else {
    delete filters.datetime;
  }

  var cityfilter = d3.select("#city").property("value")
  var city_filterId = d3.select("#city").property("id")

  if (cityfilter != ""){
    filters[city_filterId] = cityfilter_Value;
  }
  else {
    delete filters.city;
  }

  var statefilter = d3.select("#state").property("value")
  var state_filterId = d3.select("#state").property("id")


  if (statefilter != ""){
    filters[state_filterId] = statefilter_Value;
  }
  else {
    delete filters.state;
  }
  
  var countryfilter = d3.select("#country").property("value")
  var country_filterId = d3.select("#country").property("id")


  if (countryfilter != ""){
    filters[country_filterId] = countryfilter_Value;
  }
  else {
    delete filters.country;
  }

  var shapefilter = d3.select("#shape").property("value")
  var shape_filterId = d3.select("#shape").property("id")


  if (shapefilter != ""){
    filters[shape_filterId] = shapefilter_Value;
  }
  else {
    delete filters.shape;
  }
}
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let filteredData = tableData;
  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values
    //data.forEach(filters) {
    //if(filters) {
    //for (var i = 0; i < filters.length; i++) {
      //filteredData = filteredData.filter(row => row.filterId === elementValue);
      //}
    //}

    object.entries(filters).forEach(([key,value])=>{
      filterData = filteredData.filter(row=>row[key]===value)
    });

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filterData);
  }
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  //button = d3.selectAll("#filter-button")

  // Build the table when the page loads
  buildTable(tableData);
