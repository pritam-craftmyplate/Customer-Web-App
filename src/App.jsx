// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import CustomerLoginPage from "./pages/Customer/CustomerLoginPage";
// import CustomerBasicInfo from "./pages/Customer/CustomerBasicInfo";
// import EventDetailPage from "./pages/Customer/EventDetailPage";
// import CustomerFinalPaymentSummery from "./pages/Customer/CustomerFinalPaymentSummery";
// import AddLocationForAddress from "./pages/Customer/AddLocationForAddress";
// import EnterFullAddressForm from "./pages/Customer/EnterFullAddressForm";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* -------- Customer Payment Flow -------- */}
//         <Route path="/customer-login" element={<CustomerLoginPage />} />
//         <Route path="/customer/basic-info" element={<CustomerBasicInfo />} />
//         <Route path="/customer/event-details" element={<EventDetailPage />} />
//         <Route path="/customer/final-payment" element={<CustomerFinalPaymentSummery />} />
//         <Route path="/customer/select-address" element={<AddLocationForAddress />} />
//         <Route path="/add-address-form" element={<EnterFullAddressForm />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import CustomerLoginPage from "./pages/Customer/CustomerLoginPage";
// import CustomerBasicInfo from "./pages/Customer/CustomerBasicInfo";
// import EventDetailPage from "./pages/Customer/EventDetailPage";
// import CustomerFinalPaymentSummery from "./pages/Customer/CustomerFinalPaymentSummery";
// import AddLocationForAddress from "./pages/Customer/AddLocationForAddress";
// import EnterFullAddressForm from "./pages/Customer/EnterFullAddressForm";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Navigate to="/customer/login" />} />  
//         <Route path="/customer/login" element={<CustomerLoginPage />} />
//         <Route path="/customer/basic-info" element={<CustomerBasicInfo />} />
//         <Route path="/customer/event-detail" element={<EventDetailPage />} />
//         <Route path="/customer/payment-summary" element={<CustomerFinalPaymentSummery />} />
//         <Route path="/customer/select-address" element={<AddLocationForAddress />} />
//         <Route path="/add-address-form" element={<EnterFullAddressForm />}/>
//         <Route path="*" element={<Navigate to="/customer/login" />} />  
//       </Routes>
//     </Router>
//   );
// }

// export default App;




import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LogoSpinner from "./components/spinner/LogoSpinner";

// Lazy load customer pages
const CustomerLoginPage = lazy(() => import("./pages/Customer/CustomerLoginPage"));
const CustomerBasicInfo = lazy(() => import("./pages/Customer/CustomerBasicInfo"));
const EventDetailPage = lazy(() => import("./pages/Customer/EventDetailPage"));
const CustomerFinalPaymentSummery = lazy(() => import("./pages/Customer/CustomerFinalPaymentSummery"));
const AddLocationForAddress = lazy(() => import("./pages/Customer/AddLocationForAddress"));
const EnterFullAddressForm = lazy(() => import("./pages/Customer/EnterFullAddressForm"));



function App() {
  return (
    <Router>
      <Suspense fallback={<LogoSpinner />}>
        <Routes>
        <Route path="/" element={<Navigate to="/groupId/Quotation-023/+918372833221" />} />
        <Route path="/groupId/:quoteGroupId/:phoneNumber" element={<EventDetailPage />} />
        <Route path="/customer/payment-summary" element={<CustomerFinalPaymentSummery />} />
          <Route path="/customer/login" element={<CustomerLoginPage />} />
          {/* <Route path="/customer/basic-info" element={<CustomerBasicInfo />} /> */}
          
          <Route path="/customer/select-address" element={<AddLocationForAddress />} />
          <Route path="/add-address-form" element={<EnterFullAddressForm />} />
          <Route path="*" element={<Navigate to="/groupId/:quoteGroupId/:phoneNumber" />} /> 
          
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
