export const environment = {
  production: true,
  apiConfig: {
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: '6b8499058fcff2dd77f83343bacd10b2',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
  }
};

export const configOAuthGoogle = {
  issuerUri: 'https://accounts.google.com',
  clientId:
    '552213338758-b80960vcdvop6o0anc6o7d1i6omfcu1n.apps.googleusercontent.com',
  clientSecret: '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',
  scope: 'openid profile email'
};
