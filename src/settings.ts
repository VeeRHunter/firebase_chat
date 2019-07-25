import { TabsPage } from './pages/tabs/tabs';

export namespace Settings {

  export const firebaseConfig = {
    apiKey: "AIzaSyBzRCx6EMooeWruqKkJ3kVAkSVgPgh3CcE",
    authDomain: "itf-enterprise-chat-v1.firebaseapp.com",
    databaseURL: "https://itf-enterprise-chat-v1.firebaseio.com",
    projectId: "itf-enterprise-chat-v1",
    storageBucket: "itf-enterprise-chat-v1.appspot.com",
    messagingSenderId: "198467169234"
  };

  export const facebookLoginEnabled = true;
  export const googleLoginEnabled = true;
  export const phoneLoginEnabled = true;

  export const facebookAppId: string = "767580770058358";
  // export const googleClientId: string = "845839389008-s0scp3mghdi67t5ga9t56j6265ibonp5.apps.googleusercontent.com";
  export const googleClientId: string = "198467169234-5vj73j88b1d1auvbhcfjo7dqnleigf75.apps.googleusercontent.com";
  export const customTokenUrl: string = "https://us-central1-chatapp-3f829.cloudfunctions.net/getCustomToken";

  export const homePage = TabsPage;
}