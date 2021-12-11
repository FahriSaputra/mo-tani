//Layout
import { PrimaryButton, TextInput } from "../components";
import MainLayout from "../layout/MainLayout";

const Login = () => {
  return (
    <MainLayout className="bg-gray-200">
      <div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="bg-white p-4 rounded w-9/12 sm:w-1/2 lg:w-96 filter drop-shadow-lg">
          <h1 className="mb-5 font-semibold text-xl">Login</h1>
          <form>
            <TextInput label="Email" />
            <TextInput label="Password" containerStyle="mt-4" />
            <div className="flex justify-end">
              <div className="mt-5 md:w-32">
                <PrimaryButton title="Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
