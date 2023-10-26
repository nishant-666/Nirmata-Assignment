export function sortFunction(selectedOption: string, playerList: any) {
  const sortedItems = [...playerList];
  if (selectedOption === "name") {
    sortedItems.sort((a: { name: "" }, b: { name: "" }) => {
      return a.name.localeCompare(b.name);
    });
  }

  if (selectedOption === "age") {
    sortedItems.sort((a: { dob: number }, b: { dob: number }) => {
      return b.dob - a.dob;
    });
  }

  if (selectedOption === "rank") {
    sortedItems.sort((a: { rank: number }, b: { rank: number }) => {
      return a.rank - b.rank;
    });
  }

  return sortedItems;
}
