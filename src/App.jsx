import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import { Button } from './components/ui/button'
import AppLayout from './layout/AppLayout';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path:"/",
				element: <div>Home</div>
			}
		]
	}
])
function App() {
  return (
	<RouterProvider router={router} />
  );
}

export default App
