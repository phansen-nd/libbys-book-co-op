// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCLfJT1Vh19r0LKgGfSUruOEWm2fWg5Q1Y",
    authDomain: "libby-s-book-co-op.firebaseapp.com",
    databaseURL: "https://libby-s-book-co-op.firebaseio.com",
    projectId: "libby-s-book-co-op",
    storageBucket: "libby-s-book-co-op.appspot.com",
    messagingSenderId: "373578804492"
  }
};
