
  // eslint-disable-next-line no-restricted-globals
  self.onmessage = (message) => {
    const results =  message.data.reduce((acc, movie) => {
      if (!(movie.Year in acc)) {
        acc[movie.Year] = [movie];
      } else {
        acc[movie.Year].push(movie);
      }
      return acc;
    }, {});
    
    self.postMessage(results);
  };
