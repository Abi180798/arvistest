import firebase from "../Config/firebase-config";

function SocialMediaAuth(provider) {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res;
    })
    .catch((er) => {
      return er;
    });
}

export default SocialMediaAuth;
