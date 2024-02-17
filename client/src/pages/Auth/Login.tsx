import AuthenticationPage from "@/components/auth/auth-page";

const Login = () => {
  return (
    <>
      <div className="flex h-full w-full items-center justify-center p-5">
        <AuthenticationPage
          title="Login"
          description="Enter your email to login to your account"
          value="Signup"
          authFor="login"
        />
      </div>
    </>
  );
};

export default Login;
