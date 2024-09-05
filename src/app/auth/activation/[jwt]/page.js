import { activateUser } from "@/lib/jwt";


const ActivationPage = async ({ params }) => {
  const result = await activateUser(params.jwt);
  console.log(result)
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      {result === "userNotExist" ? (
        <p className="text-red-500 text-2xl">The user does not exist</p>
      ) : result === "alreadyActivated" ? (
        <p className="text-red-500 text-2xl">The user is already activated</p>
      ) : result === "success" ? (
        <p className="text-green-500 text-2xl">
          Success! The user is now activated
        </p>
      ) : (
        <p className="text-yellow-500 text-2xl">Oops! Something went wrong!</p>
      )}
      <div className="text-center underline"><a href="/">Go home</a></div>
    </div>
  );
};

export default ActivationPage;