export const environment = {
  production: true,
  apiConfig: {
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: '6b8499058fcff2dd77f83343bacd10b2',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
  }
};
