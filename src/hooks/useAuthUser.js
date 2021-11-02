import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, createTimestamp, db } from "../firebase";

export default function useAuthUser() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      const ref = db.collection("users").doc(user.uid);
      ref.get().then((doc) => {
        if (!doc.exists) {
          ref.set({
            name: user.displayName,
            photoURL: user.photoURL,
            timestamp: createTimestamp(),
          });
        }
      });
    }
  }, [user]);

  return user;
}
