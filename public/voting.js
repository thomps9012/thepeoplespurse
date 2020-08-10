//bar chart from: https://observablehq.com/@d3/horizontal-bar-chart.  This chart did not have a slider to allow the user to move back and forth
//to cast their vote for whichever department they wanted their taxes to go toward.  Not sure if that is something we can add in later or not.
//also I am having difficulty getting the actual chart to display. There are some synatax errors as well but as I copied
//the code directly from the website I really didn't want to putz around with it too much. 
// chart = {
//     const svg = d3.create("svg")
//         .attr("viewBox", [0, 0, width, height]),

//     svg.append("g")
//         .attr("fill", "steelblue")
//         .selectAll("rect")
//         .data(data)
//         .join("rect")
//         .attr("x", x(0))
//         .attr("y", (d, i) => y(i))
//         .attr("width", d => x(d.value) - x(0))
//         .attr("height", y.bandwidth());

//     svg.append("g")
//         .attr("fill", "white")
//         .attr("text-anchor", "end")
//         .attr("font-family", "sans-serif")
//         .attr("font-size", 12)
//         .selectAll("text")
//         .data(data)
//         .join("text")
//         .attr("x", d => x(d.value))
//         .attr("y", (d, i) => y(i) + y.bandwidth() / 2)
//         .attr("dy", "0.35em")
//         .attr("dx", -4)
//         .text(d => format(d.value))
//         .call(text => text.filter(d => x(d.value) - x(0) < 20) // short bars
//             .attr("dx", +4)
//             .attr("fill", "black")
//             .attr("text-anchor", "start"));

//     svg.append("g")
//         .call(xAxis);

//     svg.append("g")
//         .call(yAxis);

//     return svg.node();
// }

//Below is the remaining code from the chart page.  Not sure if all the code is necessary or just some.

// data = Object.assign(d3.csvParse(await FileAttachment("alphabet.csv").text(), ({letter, frequency}) => ({name: letter, value: +frequency})).sort((a, b) => d3.descending(a.value, b.value)), {format: "%"})

// format = x.tickFormat(20, data.format)

// x = d3.scaleLinear()
//     .domain([0, d3.max(data, d => d.value)])
//     .range([margin.left, width - margin.right])

//     y = d3.scaleBand()
//     .domain(d3.range(data.length))
//     .rangeRound([margin.top, height - margin.bottom])
//     .padding(0.1)

//     xAxis = g => g
//     .attr("transform", `translate(0,${margin.top})`)
//     .call(d3.axisTop(x).ticks(width / 80, data.format))
//     .call(g => g.select(".domain").remove())

//     yAxis = g => g
//     .attr("transform", `translate(${margin.left},0)`)
//     .call(d3.axisLeft(y).tickFormat(i => data[i].name).tickSizeOuter(0))

//     barHeight = 25

//     height = Math.ceil((data.length + 0.1) * barHeight) + margin.top + margin.bottom

//     margin = ({top: 30, right: 0, bottom: 10, left: 30})

//     margin = ({top: 30, right: 0, bottom: 10, left: 30})

//     d3 = require("d3@5")