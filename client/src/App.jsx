// import { Suspense, useState } from "react";
// import "./App.css";
// import Layout from "./components/Layout/Layout";
// import Website from "./pages/Website";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Properties from "./pages/Properties/Properties";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Property from "./pages/Property/Property";
// import UserDetailContext from "./context/UserDetailContext";
// import Bookings from "./pages/Bookings/Bookings";
// import Favourites from "./pages/Favourites/Favourites";
// import Estimate from "./pages/Estimate/Estimate";
// import Gallery from "./pages/Gallery/Gallery";
// import DetailedPlansPage from "./pages/DetailedPlansPage/DetailedPlansPage";
// import FAQ from "./pages/Faq/Faq";
// import PlansPage from "./pages/Plans/PlansPage";
// import Admin from "./pages/Admin/Admin";


// function App() {
//   const queryClient = new QueryClient();

//   const [userDetails, setUserDetails] = useState({
//     favourites: [],
//     bookings: [],
//     token: null,
//   });

//   return (
//     <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
//       <QueryClientProvider client={queryClient}>
//         <BrowserRouter>
//           <Suspense fallback={<div>Loading...</div>}>
//             <Routes>
//               <Route element={<Layout />}>
//                 <Route path="/" element={<Website />} />
//                 <Route path="/properties">
//                   <Route index element={<Properties />} />
//                   <Route path=":propertyId" element={<Property />} />
//                 </Route>
//                 <Route path="/bookings" element={<Bookings />} />
//                 <Route path="/favourites" element={<Favourites />} />
//                 <Route path="/estimate" element={<Estimate />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/plans/:id" element={<DetailedPlansPage />} />
//                 <Route path="/faq" element={<FAQ />} />
//                 <Route path="/plans" element={<PlansPage />} />
//                 <Route path="/admin" element={<Admin />} />
//               </Route>
//             </Routes>
//           </Suspense>
//         </BrowserRouter>
//         <ToastContainer />
//         <ReactQueryDevtools initialIsOpen={false} />
//       </QueryClientProvider>
//     </UserDetailContext.Provider>
//   );
// }

// export default App;






import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";
import Estimate from "./pages/Estimate/Estimate";
import Gallery from "./pages/Gallery/Gallery";
import DetailedPlansPage from "./pages/DetailedPlansPage/DetailedPlansPage";
import FAQ from "./pages/Faq/Faq";
import PlansPage from "./pages/Plans/PlansPage";
import Admin from "./pages/Admin/Admin";

function App() {
  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
    email: "user@example.com", // Replace this with real user data
  });

  // List of allowed admin emails
  const allowedAdmins = ["ayomatthew891@gmail.com", "admin2@example.com"];

  // PrivateRoute component to protect admin route
  const PrivateRoute = ({ children }) => {
    const isAdmin = allowedAdmins.includes(userDetails.email);
    return isAdmin ? children : <Navigate to="/" />;
  };

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Website />} />
                <Route path="/properties">
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                </Route>
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/estimate" element={<Estimate />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/plans/:id" element={<DetailedPlansPage />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/plans" element={<PlansPage />} />
                {/* Admin route protected */}
                <Route
                  path="/admin"
                  element={
                    <PrivateRoute>
                      <Admin />
                    </PrivateRoute>
                  }
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
