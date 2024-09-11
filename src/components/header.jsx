import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
		<div>
			<nav className="p-4 flex justify-between items-center">
				<Link to="/">
					<img src="/logo.png" className="h-20" alt="logo" />
				</Link>
				<header>
					<SignedOut>
						<SignInButton />
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</header>
			</nav>
		</div>
  );
}

export default Header