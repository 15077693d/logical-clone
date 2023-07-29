export const getAnimationValueByScrollY = (
  startScrollY: number,
  endScrollY: number,
  currentScrollY: number,
  maxAnimationValue: number,
  minAnimationValue: number
) => {
  return (
    maxAnimationValue -
    ((maxAnimationValue - minAnimationValue) * (endScrollY - currentScrollY)) /
      (endScrollY - startScrollY)
  );
};
