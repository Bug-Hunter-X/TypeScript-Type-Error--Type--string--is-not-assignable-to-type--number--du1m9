function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Or throw an error
  }
  return numA + numB;
}

let result1 = add(1, 2); // Correct: result1 = 3
let result2 = addSafe(1, "2"); // Correct: result2 = 3
let result3 = addSafe("1", "2"); // Correct: result3 = 3
let result4 = addSafe("a", 2); // Correct: result4 = 0 (handles the error)
