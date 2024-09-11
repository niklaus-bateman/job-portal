import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Button } from "./ui/button";
import {
	SignIn,
	SignInButton,
	SignedIn,
	SignedOut,
	UserButton,
	useUser,
} from "@clerk/clerk-react";
import { BellRing, BriefcaseBusiness, Heart, PenBox } from "lucide-react";

const Header = () => {
	const [showSignIn, setShowSignIn] = useState(false);
	const [search, setSearch] = useSearchParams();
	const { user } = useUser();

	useEffect(() => {
		if (search.get("sign-in")) {
			setShowSignIn(true);
		}
	}, [search]);

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			setShowSignIn(false);
			setSearch({});
		}
	};

	return (
		<div>
			<nav className="py-4 flex justify-between items-center">
				<Link to="/">
					<img src="/logo.png" className="h-20" alt="logo" />
				</Link>
				<div className="flex gap-8">
					<SignedOut>
						<Button variant="outline" onClick={() => setShowSignIn(true)}>
							Login
						</Button>
					</SignedOut>
					<SignedIn>
						{user?.unsafeMetadata?.role === "recruiter" && (
							<Link to="post-job">
								<Button variant="destructive" className="rounded-full">
									<PenBox size={30} className="mr-2" />
									Post a job
								</Button>
							</Link>
						)}
						<UserButton
							appearance={{
								elements: {
									avatarBox: "h-10 w-10",
								},
							}}
						>
							<UserButton.MenuItems>
								<UserButton.Link
									label="My Jobs"
									labelIcon={<BriefcaseBusiness size={15} />}
									href="/my-job"
								/>
								<UserButton.Link
									label="Saved Jobs"
									labelIcon={<Heart size={15} />}
									href="/saved-jobs"
								/>
							</UserButton.MenuItems>
						</UserButton>
					</SignedIn>
				</div>
			</nav>
			{showSignIn && (
				// we have attached the listener on parent , so e.target === e.currentTarget---> refers to object on which listener is attached
				<div
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10"
					onClick={handleOverlayClick}
				>
					<SignIn
						// after signing in , it will redirect to /onboarding
						signUpForceRedirectUrl="/onboarding"
						fallbackRedirectUrl="/onboarding"
					/>
				</div>
			)}
		</div>
	);
};

export default Header;
