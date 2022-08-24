export const getBatchedArray = <T>(array: T[], batchLength: number) => {
  const batches: T[][] = [];
  for (let i = 0; i < array.length; i += batchLength) {
    const batch: T[] = [];
    for (let j = i; j < i + batchLength; j++) batch.push(array[j]);
    batches.push(batch);
  }
  return batches;
};