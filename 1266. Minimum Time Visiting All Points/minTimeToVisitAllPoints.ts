function minTimeToVisitAllPoints(points: number[][]): any {
  const xSum: number[] = []
  const ySum: number[] = []

  for (let i = 1; i < points.length; i++) {
    xSum.push(points[i][0] - points[i - 1][0])
    ySum.push(points[i][1] - points[i - 1][1])
  }
  console.log(xSum, ySum)
}

const points = [[1, 1], [3, 4], [-1, 0]]
// const points = [[3,2],[-2,2]]
console.log(minTimeToVisitAllPoints(points))