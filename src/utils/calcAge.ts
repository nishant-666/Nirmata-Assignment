export function calculateAge(timestamp: string) {
  const timestampSeconds = Number(timestamp) / 1000;
  const currentDate = new Date();
  const birthDate = new Date(timestampSeconds * 1000);
  const age =
    currentDate.getFullYear() -
    birthDate.getFullYear() -
    (currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
      ? 1
      : 0);

  return age;
}
