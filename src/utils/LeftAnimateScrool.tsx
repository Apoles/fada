export default function getScrollLeftAnimation() {
  return {
    offscreen: {
      x: -150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration,
      },
    }),
  };
}
