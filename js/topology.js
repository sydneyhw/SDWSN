 // var svgns = "http://www.w3.org/2000/svg";
 // $.svg = function $svg(tagName) {
 // 	return $(document.createElementNS(svgns, tagName));
 // };
 var node = [{
 	"id": 0,
 	"ip": "1.1.1.1",
 }, {
 	"id": 1,
 	"ip": "1.1.1.2",
 }, {
 	"id": 2,
 	"ip": "1.1.1.3",
 }, {
 	"id": 3,
 	"ip": "1.1.1.4",
 }, {
 	"id": 4,
 	"ip": "1.1.1.4",
 }, {
 	"id": 5,
 	"ip": "1.1.1.4",
 }, {
 	"id": 6,
 	"ip": "1.1.1.4",
 }, {
 	"id": 7,
 	"ip": "1.1.1.4",
 }, {
 	"id": 8,
 	"ip": "1.1.1.4",
 }, {
 	"id": 9,
 	"ip": "1.1.1.4",
 }, {
 	"id": 10,
 	"ip": "1.1.1.4",
 }, {
 	"id": 11,
 	"ip": "1.1.1.4",
 }, {
 	"id": 12,
 	"ip": "1.1.1.4",
 }, {
 	"id": 13,
 	"ip": "1.1.1.4",
 }, {
 	"id": 14,
 	"ip": "1.1.1.4",
 }, {
 	"id": 15,
 	"ip": "1.1.1.4",
 }, {
 	"id": 16,
 	"ip": "1.1.1.4",
 }, {
 	"id": 17,
 	"ip": "1.1.1.4",
 }, {
 	"id": 18,
 	"ip": "1.1.1.4",
 }, {
 	"id": 19,
 	"ip": "1.1.1.4",
 }];
 // var topo = [[0, 0, 0, 5, 5, 5, 0, 7, 8, 5, 9, 0, 0, 9, 0, 7, 0, 6, 10, 7], [0, 0, 9, 5, 8, 0, 9, 9, 5, 0, 0, 7, 0, 5, 0, 9, 8, 7, 0, 0], [0, 9, 0, 0, 0, 8, 0, 0, 0, 9, 10, 0, 6, 0, 8, 7, 0, 0, 0, 7], [5, 5, 0, 0, 0, 9, 5, 0, 0, 7, 0, 0, 8, 10, 0, 5, 0, 6, 8, 0], [5, 8, 0, 0, 0, 0, 7, 10, 0, 0, 10, 5, 0, 0, 9, 10, 5, 0, 0, 0], [5, 0, 8, 9, 0, 0, 0, 0, 10, 6, 7, 7, 0, 10, 0, 5, 10, 5, 0, 9], [0, 9, 0, 5, 7, 0, 0, 10, 8, 10, 0, 8, 0, 5, 0, 5, 10, 0, 10, 0], [7, 9, 0, 0, 10, 0, 10, 0, 0, 0, 9, 0, 0, 0, 7, 10, 5, 0, 0, 10], [8, 5, 0, 0, 0, 10, 8, 0, 0, 8, 8, 0, 5, 0, 0, 8, 5, 10, 5, 9], [5, 0, 9, 7, 0, 6, 10, 0, 8, 0, 0, 0, 0, 0, 6, 0, 5, 0, 8, 0], [9, 0, 10, 0, 10, 7, 0, 9, 8, 0, 0, 0, 5, 8, 0, 10, 0, 5, 7, 6], [0, 7, 0, 0, 5, 7, 8, 0, 0, 0, 0, 0, 10, 0, 7, 5, 0, 0, 5, 5], [0, 0, 6, 8, 0, 0, 0, 0, 5, 0, 5, 10, 0, 10, 8, 10, 7, 0, 7, 8], [9, 5, 0, 10, 0, 10, 5, 0, 0, 0, 8, 0, 10, 0, 10, 0, 9, 6, 10, 0], [0, 0, 8, 0, 9, 0, 0, 7, 0, 6, 0, 7, 8, 10, 0, 6, 0, 0, 0, 10], [7, 9, 7, 5, 10, 5, 5, 10, 8, 0, 10, 5, 10, 0, 6, 0, 0, 8, 6, 0], [0, 8, 0, 0, 5, 10, 10, 5, 5, 5, 0, 0, 7, 9, 0, 0, 0, 0, 0, 0], [6, 7, 0, 6, 0, 5, 0, 0, 10, 0, 5, 0, 0, 6, 0, 8, 0, 0, 7, 0], [10, 0, 0, 8, 0, 0, 10, 0, 5, 8, 7, 5, 7, 10, 0, 6, 0, 7, 0, 0], [7, 0, 7, 0, 0, 9, 0, 10, 9, 0, 6, 5, 8, 0, 10, 0, 0, 0, 0, 0]];
 var topo = [
 	["0", "5", "8", "9", "8", "8", "8", "9", "9", "9", "9", "10", "8", "8", "9", "9", "9", "9", "10", "8"],
 	["5", "0", "6", "10", "10", "10", "10", "10", "10", "10", "10", "10", "9", "9", "10", "9", "10", "9", "10", "10"],
 	["8", "6", "0", "9", "9", "10", "9", "10", "9", "10", "9", "10", "9", "10", "9", "9", "10", "10", "10", "9"],
 	["9", "10", "9", "0", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
 	["8", "10", "9", "10", "0", "10", "10", "10", "10", "10", "10", "10", "9", "10", "10", "10", "9", "10", "10", "10"],
 	["8", "10", "10", "10", "10", "0", "9", "10", "10", "10", "10", "10", "10", "10", "9", "10", "10", "10", "10", "10"],
 	["8", "10", "9", "10", "10", "9", "0", "10", "10", "10", "10", "10", "10", "10", "10", "9", "10", "10", "10", "10"],
 	["9", "10", "10", "10", "10", "10", "10", "0", "10", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
 	["9", "10", "9", "10", "10", "10", "10", "10", "0", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
 	["9", "10", "10", "10", "10", "10", "10", "9", "10", "0", "10", "10", "9", "10", "10", "9", "10", "10", "10", "10"],
 	["9", "10", "9", "10", "10", "10", "10", "10", "10", "10", "0", "10", "10", "10", "10", "10", "10", "10", "10", "10"],
 	["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "0", "9", "10", "10", "10", "10", "10", "10", "10"],
 	["8", "9", "9", "10", "9", "10", "10", "10", "10", "9", "10", "9", "0", "9", "9", "10", "10", "9", "10", "9"],
 	["8", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "9", "0", "9", "9", "10", "10", "10", "9"],
 	["9", "10", "9", "10", "10", "9", "10", "10", "10", "10", "10", "10", "9", "9", "0", "10", "10", "10", "10", "10"],
 	["9", "9", "9", "10", "10", "10", "9", "10", "10", "9", "10", "10", "10", "9", "10", "0", "10", "9", "10", "10"],
 	["9", "10", "10", "10", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "0", "10", "10", "10"],
 	["9", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "9", "10", "10", "9", "10", "0", "10", "10"],
 	["10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "0", "10"],
 	["8", "10", "9", "10", "10", "10", "10", "10", "10", "10", "10", "10", "9", "9", "10", "10", "10", "10", "10", "0"]
 ];
 // function ink() {
 // 	$.ajax({
 // 		type: "get",
 // 		async: true,
 // 		cache: false,
 // 		url: " /nodes",
 // 		success: function(data) {
 // 			// flag后台用于判断是否有新的数据
 // 			if (data.flag) {
 // 				$('svg').children().remove();
 // 				var nodes = nodeLayout(data.node,data.control);
 // 				var links = generateLinks(data.topo);
 // 				addLinks(links);
 // 				addNodes(nodes);
 // 			}
 // 		}
 // 	});

 // }
 // setInterval("ink()", 2000);


 var nodes = nodeType(node, 0);
 var links = generateLinks(topo);
 console.log(links);
 console.log(nodes);

 function nodeType(nodes, controlId) {
 	$.each(nodes, function(index, el) {
 		if (el.id == controlId) {
 			//0表示控制节点
 			el.type = 0;

 		} else {
 			// 1表示普通节点
 			el.type = 1;
 		}
 	});
 	return nodes;
 }

 function generateLinks(topo) {
 	var m = 0;
 	var links = new Array();
 	for (var i = 0; i < topo.length; i++) {
 		for (var j = i + 1; j < topo[i].length; j++) {
 			if (topo[i][j] >= 5) {
 				links[m] = {
 					'source': -1,
 					'target': -1,
 					'color': '#fff',
 					'length': 300

 				};
 				for (var k = 0; k < nodes.length; k++) {
 					if (nodes[k].id == i) {
 						links[m].source = k;
 						// console.log(nodes[k].id);

 					} else if (nodes[k].id == j) {
 						links[m].target = k;
 						// console.log(nodes[k].id);
 					}
 				}
 				// console.log(typeof topo[i][j]);
 				topo[i][j] = parseInt(topo[i][j]);
 				switch (topo[i][j]) {
 					case 10:
 						links[m].color = '#00CD00';
 						links[m].length = 200;
 						break;
 					case 9:
 						links[m].color = '#00CD00';
 						links[m].length = 200;

 						break;
 					case 8:
 						links[m].color = '#FFD700';
 						links[m].length = 400;
 						break;
 						ß
 					case 7:
 						links[m].color = '#FFD700';
 						links[m].length = 400;
 						break;
 					case 6:
 						links[m].color = '#FF0000';
 						links[m].length = 600;
 						break;
 					case 5:
 						links[m].color = '#FF0000';
 						links[m].length = 600;
 						break;
 					default:
 						break;
 				}
 				console.log(links[m].length);
 				m++;
 			}
 		}
 	}
 	return links;

 }
 var width = $(window).width(),
 	height = 800;
 // d3.json("force.php", function(error, graph) {})
 var force = d3.layout.force()
 	.nodes(d3.values(nodes))
 	.links(links)
 	.size([width, height])
 	// .linkDistance(function(d){return d.length;})
 	.linkDistance(300)
 	.charge(-400)
 	.on("tick", tick)
 	.start();

 var svg = d3.select("body").append("svg")
 	.attr("width", width)
 	.attr("height", height);


 var zoom = d3.behavior.zoom()
 	.center([width / 2, height / 2])
 	.scaleExtent([-1, 10])
 	.on("zoom", zoomed);
 svg.append('rect')
 	.attr('class', 'overlay')
 	.attr('x', 0)
 	.attr('y', 0)
 	.attr('width', width)
 	.attr('height', height)
 	.call(zoom);
 var container = svg.append("g");
 var link = container.selectAll(".link")
 	.data(force.links())
 	.enter().append("line")
 	.attr("class", "link")
 	.call(zoom);

 link.style("stroke", function(d) {
 	return d.color
 });


 var nodeAll = container.selectAll(".node")
 	.data(force.nodes())
 	.enter().append("g")
 	.attr("class", "node")
 	.call(force.drag);


 nodeAll.append("circle")
 	.attr("r", 14)
 	.attr("class", function(d) {
 		if (d.type) {
 			return 'normalNode node';
 		} else {
 			return 'iNode node';
 		};
 	});

 nodeAll.append("text")
 	.attr("x", -10)
 	.attr("dy", ".35em")
 	.text(function(d) {
 		return d.id;
 	});



 function tick() {
 	link
 		.attr("x1", function(d) {
 			return d.source.x;
 		})
 		.attr("y1", function(d) {
 			return d.source.y;
 		})
 		.attr("x2", function(d) {
 			return d.target.x;
 		})
 		.attr("y2", function(d) {
 			return d.target.y;
 		});

 	nodeAll
 		.attr("transform", function(d) {
 			return "translate(" + d.x + "," + d.y + ")";
 		});
 }

 function zoomed() {


 	container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");


 }