exports.handle = function handle(promise) {
  return promise
    .then(data => {
      if (data instanceof Error) {
        return {
          error: data
        };
      }
      return {
        error: null,
        data: data
      };
    })
    .catch(err => ({
      error: err
    }));
};
