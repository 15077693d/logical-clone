export const getAnimationValueByScrollY = (values: {
  start: number;
  end: number;
  scrollY: number;
  max: number;
  min: number;
}) => {
  const { start, end, scrollY, max, min } = values;
  return max - ((max - min) * (end - scrollY)) / (end - start);
};
