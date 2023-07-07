import { range } from 'd3';
export function makeData(n, t) {
  const width = window.innerWidth;
  const height = window.innerHeight;
	const space = width / n;
  //const data = range(Math.abs(Math.sin(t)) * n)
  const data = range(n)
  	.map((d) => ({
      x: d * space + space / 2,
      y: height / 2 + Math.sin(0.005 * d + t) * 200,
      r: 20,
      fill: `#${parseInt(Math.abs(Math.sin(t/10))*16777216).toString(16).padStart(6, "0")}`,
  	}));
  return data;
}