import { select } from 'd3';
import { vizData } from './vizData';
import { makeData } from './makeData';
import { makeLinks } from './makeLinks';

const width = window.innerWidth;
const height = window.innerHeight;

const svg = select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height);

const n = 1000;

let t = 0;
setInterval(() => {
  const data = makeData(n, t);
  const links = makeLinks(data);
  svg.call(vizData, data, links);
  t += 0.02;
}, 100 / 6);
