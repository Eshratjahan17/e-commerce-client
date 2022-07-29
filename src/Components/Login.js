import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import github from "../images/icons/github.svg";
import google from "../images/icons/google.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  // const [signInWithFacebook, facebookUser, facebookLoading, facebookError] =
  //   useSignInWithFacebook(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div className="bg-primary py-8">
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse  shadow-2xl  py-0 px-0 w-3/6 bg-accent justify-between">
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  ">
            <div class="card-body ">
              <form onSubmit={handleSubmit(onSubmit)}>
                
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text">
                      Email <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="email"
                    placeholder="Email here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is reqiured",
                      },
                      pattern: {
                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message: "Please enter a valid email",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.email?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span class="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control mx-auto">
                  <label class="label">
                    <p class="label-text">
                      Password <span className="text-red-600">*</span>
                    </p>
                  </label>
                  <input
                    type="password"
                    placeholder="password here"
                    class="input input-bordered w-full max-w-xs"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is reqiured",
                      },
                      minLength: {
                        value: 6,
                        message: "Password must be more than 6 charecters",
                      },
                    })}
                  />
                  <label class="label">
                    {errors.password?.type === "required" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span class="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <input
                  type="submit"
                  value="Log in"
                  className="btn  rounded-lg 
                  border-none hover:bg-nutral hover:text-primary bg-secondary text-primary mt-5 "
                />
              </form>
            </div>
          </div>
          <div class=" lg:text-left pl-11  ">
            {/* <img className="w-14 h-16 " src={logo} alt="" /> */}
            <div>
              <h1 class="  text-3xl font-bold text-white mb-5 ">
                Social log in
              </h1>
              <div className="flex  mt-4 ">
                {/* <button onClick={() => signInWithFacebook()}>
                  <img className="w-11 h-11 mr-4" src={facebok} alt="" />
                </button> */}
                <button onClick={() => signInWithGoogle()}>
                  <img className="w-11 h-11 mr-4" src={google} alt="" />
                </button>
                <button onClick={() => signInWithGithub()}>
                  <img className="w-11 h-11 mr-4" src={github} alt="" />
                </button>
              </div>
              <p className="text-center font-semibold my-3 text-white">
                Create new account
                <Link to="/signup" className="text-secondary ">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;