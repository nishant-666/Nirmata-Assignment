export function calculateDOB(timestamp: number) {
  const dob = new Date(timestamp);
  const year = dob.getUTCFullYear();
  const month = dob.getUTCMonth() + 1;
  const day = dob.getUTCDate();

  return `Date of Birth: ${day}-${month}-${year}`;
}
