import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ParentRenders from "./Layouts/ParentRenders";

import Home from "./pages/Home/Home";
import Loader from "./pages/Home/Loader/Loader";
import DynamicPage from "./pages/Home/DynamicPage/DynamicPage";
import PrivacyPolicy from "./pages/PrivacyPolisy/PrivacyPolicy";
import TermsCondition from "./pages/TermsCondition/TermsCondition";
import DrVrushali from "./pages/DrVrushali/DrVrushali";
// import Drsumit from "./pages/DrSumit/DrSumit";
import DrSumit from "./pages/DrSumit/DrSumit"
import AboutClinic from "./pages/AboutClinic/AboutClinic";
import BookingAppointment from "./pages/BookingAppointment/BookingAppointment";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import BeforeAfter from "./pages/BeforeAfter/BeforeAfter";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ParentRenders />}>
          <Route index element={<Home />} />
          {/* Static example */}
          <Route path="/about/dr-Sumit-Sudhir" element={<DrSumit/>} />
          <Route path="/about/dr-Vrushali-Joshi" element={<DrVrushali />} />
          <Route path="/about/about-clinic" element={<AboutClinic />} />
          <Route path="gallery/before-&-after" element={<BeforeAfter />} />

          {/* Dynamic Page for all menus */}
          <Route path="/:menu" element={<DynamicPage />} />
          <Route path="/:menu/:link" element={<DynamicPage />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsCondition" element={<TermsCondition />} />
          <Route path="/BookingAppointment" element={<BookingAppointment />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
