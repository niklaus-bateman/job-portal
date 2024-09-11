import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
	const navigate = useNavigate();
	const { user, isLoaded } = useUser();

	const navigateUser = (role) => {
		role === "recruiter" ? navigate("/post-job") : navigate("/jobs");
	};
	const handleRoleSelection = async (role) => {
		await user
			.update({
				unsafeMetadata: { role },
			})
			.then(() => {
				navigateUser(role);
			})
			.catch((err) => console.log(err));
  };
  
  useEffect(() => {
    if (user?.unsafeMetadata?.role) {
      navigateUser(user?.unsafeMetadata?.role);
    }
  },[user])
	return (
		<div className="flex flex-col items-center justify-center mt-40">
			<h2 className="gradient-title font-extrabold text-7xl sm:text-8xl tracking-tighter">
				I am a...
			</h2>
			<div className="mt-16 grid grid-cols-2 gap-4 w-full md:px-40">
				<Button
					variant="blue"
					className="h-36 text-2xl"
					onClick={handleRoleSelection}
				>
					Candidate
				</Button>
				<Button
					variant="destructive"
					className="h-36 text-2xl"
					onClick={handleRoleSelection}
				>
					Recruiter
				</Button>
			</div>
		</div>
	);
};

export default Onboarding;
