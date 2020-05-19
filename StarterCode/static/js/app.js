function optionChanged(OTU_id) {
  // Prevent refresh
  d3.event.preventDefault();

  // Select the input value
  var OTU_id = d3.select("#selDataset").node().value;
  console.log(OTU_id);


  // Build plot
  buildPlot(OTU_id);
}


function buildPlot(OTU_ID) {
    var data = d3.json("samples.json");

    data.then(function(data)  {

    // Grab values  to build the plots
    var trace1 = {
      x: data.samples.map(row => row[3]),
      y: data.samples.map(row => row[1]),
      text: data.samples.map(row => row[2]),
      name: "OTU",
      type: "bar",
      orientation: "h"
    };

    var chart_data = [trace1];

    Plotly.newPlot("bar", chart_data);
  });
};

buildPlot();
