import { memo, useContext } from "react";
import MainLayout from "../layout/MainLayout";
import { UserContext } from "../context/UserContext";
import { PrimaryButton } from "../components";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/mutations/Auth.mutations";
import { QueryClient } from "react-query";

const ProfileSection = memo((props) => {
  const { name, value, containerStyle } = props;
  return (
    <div className={`row flex ${containerStyle}`}>
      <p className="font-semibold">{name}</p>
      <p className="ml-3">{value}</p>
    </div>
  );
});

const Profile = () => {
  const [state, dispatch] = useContext(UserContext);
  const logout = useLogout();
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const onLogout = () => {
    logout.mutate("", {
      onSuccess: () => {
        dispatch({
          type: "LOGOUT",
        });
        queryClient.clear();
        queryClient.removeQueries("user");
        window.alert("Success");
        navigate("/");
      },
      onError: () => {
        window.alert("Error");
      },
    });
  };

  return (
    <MainLayout>
      <div className="w-full rounded-lg filter drop-shadow-lg bg-white mt-5">
        <div className="p-10">
          <h1 className="text-2xl font-bold">Profile</h1>
          <div className="mt-3">
            <ProfileSection name="Full Name : " value={state?.user?.fullname} />
            <ProfileSection
              name="Email : "
              value={state?.user?.email}
              containerStyle="mt-3"
            />
            <ProfileSection
              name="Phone Number : "
              value={state?.user?.handphone}
              containerStyle="mt-3"
            />
            <ProfileSection
              name="address : "
              value={state?.user?.address}
              containerStyle="mt-3"
            />
          </div>
          <div className="flex justify-end">
            <div className="w-1/4">
              <PrimaryButton title="Logout" onClick={onLogout} />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
