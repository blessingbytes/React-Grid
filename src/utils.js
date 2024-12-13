export const range = (start, end, step = 1) => {
  let output = [];

  // If end is not provided, treat start as the end and start as 0
  if (end === undefined) {
    end = start;
    start = 0;
  }

  // Generate the range from start to end with the given step
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};
