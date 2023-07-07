export function vizData(svg, data, links) {

  // svg
  //   .selectAll('circle')
  //   .data(data)
  //   .join('circle')
  //   .attr('r', (d) => d.r)
  //   .attr('cx', (d) => d.x)
  //   .attr('cy', (d) => d.y)
  //   .attr('fill', (d) => d.fill);

  svg
    .selectAll('line')
    .data(links)
    .join('line')
    .attr('x1', (d) => d.x1)
    .attr('y1', (d) => d.y1)
    .attr('x2', (d) => d.x2)
    .attr('y2', (d) => d.y2)
  	.attr('stroke', 'black')
  	.attr('stroke-width', '5px');
}
