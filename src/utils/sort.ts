export const sortFunction = (
  obj: { [key: string]: number | string }[],
  sortBy: string
) => {
  obj.sort((a, b) => {
    const valueA = String(a[sortBy]).toLowerCase();
    const valueB = String(b[sortBy]).toLowerCase();
    if (valueA > valueB) return 1;
    else if (valueA < valueB) return -1;
    else return 0;
  });
  return obj;
};
