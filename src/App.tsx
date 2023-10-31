import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { Loading } from '@/components'
const Dashboard = lazy(() => import('@/pages/dashboard'))
const Products = lazy(() => import('@/pages/products'))
const Transactions = lazy(() => import('@/pages/transactions'))
const Customers = lazy(() => import('@/pages/customers'))
function App() {


  return (
		<Router>
			<Suspense fallback={<Loading/>} >
				<Routes>
					<Route path='/admin/dashboard' element={<Dashboard />} />
					<Route path='/admin/products' element={<Products />} />
					<Route path='/admin/transactions' element={<Transactions />} />
					<Route path='/admin/customers' element={<Customers />} />

					{/* Charts */}

					{/* Apps */}
				</Routes>
			</Suspense>
		</Router>
	);
}

export default App
