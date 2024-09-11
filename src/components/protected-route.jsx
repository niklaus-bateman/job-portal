import { useUser } from "@clerk/clerk-react";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
	const { isSignedIn, user, isLoaded } = useUser();
    const { pathname } = useLocation();
    // if user is not signed in
	if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
		return <Navigate to="/?sign-in=true" />;
    }
    // if user is signed in but role not selected
    if (user && !user.unsafeMetadata.role && pathname !== "/onboarding") {
        return <Navigate to='/onboarding'/>
    }

	return children;
};

export default ProtectedRoute;
