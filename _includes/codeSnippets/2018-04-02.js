< !DOCTYPE html >
  <
  html >

  <
  head >
  <
  meta charset = "UTF-8" >
  <
  title > D3introsketch < /title> <
  script src = "https://d3js.org/d3.v3.min.js" > < /script> <
  script src = "http://d3js.org/topojson.v0.min.js" > < /script> <
link rel = "stylesheet"
href = "style.css" >

  <
  /script>

  <
  body >
  <
  script >
  var width = 900;
var height = 700;
var projection = d3.geo.mercator()
  .center([11.7, 56.3])
  .scale(6500)
  .translate([width / 2, height / 2])

var svg = d3.select("body").append("svg")
  .attr("width", width)
  .attr("height", height);

var path = d3.geo.path()
  .projection(projection);

var g = svg.append("g");

d3.json("Denmark.json", function(error, topology) {
  console.log(topology.objects.DNK_adm2.geometries[0].properties.NAME_2)
  //console.log(topology.objects.IND_adm1.geometries[0].properties.ID_1)
  g.selectAll("path")
    .data(topojson.object(topology, topology.objects.DNK_adm2)
      .geometries)
    .enter()
    .append("path")
    .attr("class", function(d, i) {
      //return "state" + topology.objects.IND_adm1.geometries[i].properties.ID_1;
      return "state";
    })
    .on("mouseover", handlemouseover)
    .on("mouseout", handlemouseout)

    // .attr("text-anchor", "middle")
    // .text(function(d,i) {
    //  return topology.objects.DNK_adm2.geometries[0].properties.NAME_2
    // })

    .attr("d", path);
})

d3.selectAll("svg")
  .attr("class", "path")
  .transition()
  .delay(1000)
  .duration(5000)
  .style("fill", "lightgreen");


function handlemouseover() {
  d3.select(this)
    .transition()
    .duration(2000)
    .attr("transform", "translate(0, -50)");
}

function handlemouseout() {
  d3.select(this)
    .transition()
    .duration(2000)
    .attr("transform", "translate(0, 0)");
}


d3.selection.prototype.moveToFront = function() {
  return this.each(function() {
    this.parentNode.appendChild(this);
  });
}; <
/script>

<
/body>


<
/html>
