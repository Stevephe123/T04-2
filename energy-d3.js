// style the h1
d3.select("h1")
    .style("color", "green");

// append a paragraph inside the div
d3.select("#content")
  .append("p")
  .text("Purchasing a low energy consumption TV will help with your energy bills!");

// append an empty rect (invisible)
d3.select("svg")
    .append("rect");

// append a visible rect
d3.select("svg")
    .append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 30)
    .style("fill", "green");
