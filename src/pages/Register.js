//Layout
import { PrimaryButton, TextInput } from "../components";
import MainLayout from "../layout/MainLayout";

const Register = () => {
  return (
    <MainLayout className="bg-gray-200">
      <div className="flex justify-center items-center bg-gray-200 h-screen">
        <div className="bg-white p-4 rounded w-9/12 sm:w-1/2 lg:w-96 filter drop-shadow-lg">
          <h1 className="mb-5 font-semibold text-xl">Register</h1>
          <form>
            <TextInput label="Email" placeholder="jhon doe" />
            <TextInput
              label="Password"
              containerStyle="mt-4"
              type="password"
              placeholder="********"
            />
            <TextInput
              label="Confirm Password"
              containerStyle="mt-4"
              type="password"
              placeholder="********"
            />
            <TextInput
              label="Phone Number"
              containerStyle="mt-4"
              type="number"
            />
            <div className="flex justify-end">
              <div className="mt-5 md:w-32">
                <PrimaryButton title="Register" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
