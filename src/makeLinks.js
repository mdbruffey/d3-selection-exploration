export function makeLinks(data){
  const links = data.map((d, i, array) => {
    if(i === 0) return 0;
    else {
      const link = {
        x1: array[i-1].x,
        y1: array[i-1].y,
        x2: d.x,
        y2: d.y,
      }
      return link;
    }
  });
  return links.slice(1);
}