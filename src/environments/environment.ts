// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiConfig: {
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: '6b8499058fcff2dd77f83343bacd10b2',
    originalImage: (imgPath: string) =>
      `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500${imgPath}`,
  },
};

export const configOAuthGoogle = {
  issuerUri: 'https://accounts.google.com',
  clientId:
    '552213338758-b80960vcdvop6o0anc6o7d1i6omfcu1n.apps.googleusercontent.com',
  clientSecret: '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',
  scope: 'openid profile email'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
