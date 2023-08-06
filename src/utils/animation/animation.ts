export const getAnimationValueByScrollY = (values: {
  start: number;
  end: number;
  scrollY: number;
  max: number;
  min: number;
}) => {
  const { start, end, scrollY, max, min } = values;
  const value = max - ((max - min) * (end - scrollY)) / (end - start);
  if (value < min) return min;
  if (value > max) return max;
  return value;
};
