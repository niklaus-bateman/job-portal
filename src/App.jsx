import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Onboarding from "./pages/onboarding";
import JobListing from "./pages/job-listing";
import PostJob from "./pages/post-job";
import MyJobs from "./pages/my-jobs";
import SavedJob from "./pages/saved-job";
import Job from "./pages/job";
import LandingPage from "./pages/landing";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <LandingPage />,
			},
			{
				path: "/onboarding",
				element: (
					<ProtectedRoute>
						<Onboarding />
					</ProtectedRoute>
				),
			},
			{
				path: "/jobs",
				element: (
					<ProtectedRoute>
						<JobListing />
					</ProtectedRoute>
				),
			},
			{
				path: "/post-job",
				element: (
					<ProtectedRoute>
						<PostJob />
					</ProtectedRoute>
				),
			},
			{
				path: "/my-job",
				element: (
					<ProtectedRoute>
						<MyJobs />
					</ProtectedRoute>
				),
			},
			{
				path: "/saved-jobs",
				element: (
					<ProtectedRoute>
						<SavedJob />
					</ProtectedRoute>
				),
			},
			{
				path: "/job/:id",
				element: (
					<ProtectedRoute>
						<Job />
					</ProtectedRoute>
				),
			},
		],
	},
]);
function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
