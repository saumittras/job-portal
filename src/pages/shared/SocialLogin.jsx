import React, { useContext } from "react";
import AuthContext from "../../contex/AuthContex/AuthContext";
import { FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="w-full flex justify-center flex-col items-center m-4 mb-4">
      <div className="divider">OR</div>
      <button onClick={handleGoogleSignin} className="btn btn-wide">
        <span>
          <FaGoogle />
        </span>
        Sign In
      </button>
    </div>
  );
};

export default SocialLogin;
