import KMeans from 'kmeans-js';

function findDominantColor(imageData: ImageData): [number, number, number] {
  const pixels = [];
  for (let i = 0; i < imageData.data.length; i += 4) {
    const r = imageData.data[i];
    const g = imageData.data[i + 1];
    const b = imageData.data[i + 2];
    pixels.push([r, g, b]);
  }

  const kmeans = new KMeans();
  const clusters = kmeans.cluster(pixels, 5); // Using 5 clusters for demonstration
  const dominantCluster = clusters.reduce((a, b) => (a.length > b.length ? a : b));
  const dominantColor = dominantCluster.centroid;

  return dominantColor as [number, number, number];
}

export default findDominantColor;
