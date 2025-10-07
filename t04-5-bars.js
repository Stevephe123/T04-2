// t04-5-bars.js
const createBarChart = (data) => {
    const svg = d3.select(".responsive-svg-container")
        .append("svg")
        .attr("viewBox", "0 0 1200 400")
        .style("border", "1px solid black");

    svg.selectAll("rect")
        .data(data)
        .join("rect")
        .attr("class", d => `bar bar-${d.count}`)
        .attr("width", d => d.count)
        .attr("height", 16)
        .attr("x", 0)                    // all bars start from the left
        .attr("y", (d, i) => i * 25);    // space them 25 px apart vertically
};
