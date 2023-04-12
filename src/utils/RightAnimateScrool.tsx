export default function getScrollRightAnimation() {
  return {
    offscreen: {
      x: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 1 } = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    }),
  };
}
