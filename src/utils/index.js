export const disallowPropagation = (callback) => {
  return function (e) {
    e.stopPropagation();
    callback();
  };
};
