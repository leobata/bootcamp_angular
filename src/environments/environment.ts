// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCTPRmlSaVjugAZ_xCylenhTuB_d1jje-o",
    authDomain: "vntlebo-shopping-list.firebaseapp.com",
    databaseURL: "https://vntlebo-shopping-list.firebaseio.com",
    projectId: "vntlebo-shopping-list",
    storageBucket: "vntlebo-shopping-list.appspot.com",
    messagingSenderId: "740552102043"
  }
};
