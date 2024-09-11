import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import AppLayout from './layout/AppLayout';
import Onboarding from './pages/onboarding';
import JobListing from './pages/job-listing';
import PostJob from './pages/post-job';
import MyJobs from './pages/my-jobs';
import SavedJob from './pages/saved-job';
import Job from './pages/job';
import LandingPage from './pages/landing';
import { ThemeProvider } from './components/theme-provider';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path:"/",
				element: <LandingPage/>
			},
			{
				path:"/onboarding",
				element: <Onboarding/>
			},
			{
				path:"/jobs",
				element: <JobListing/>
			},
			{
				path:"/post-job",
				element: <PostJob/>
			},
			{
				path:"/my-job",
				element: <MyJobs/>
			},
			{
				path:"/saved-jobs",
				element: <SavedJob/>
			},
			{
				path:"/job/:id",
				element: <Job/>
			},
		]
	}
])
function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App
