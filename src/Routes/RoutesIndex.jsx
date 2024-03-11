import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CustomerTable from "../Pages/Customer/CustomerTable";
import CreatePartner from "../Pages/Partner/CreatePartner";
import AllCustomers from "../Pages/Customer/AllCustomers";
import GenerateCoupons from "../Pages/Coupons/Coupons";
import Layout from "../Layout/Layout";
const RoutesIndex = () => {
  return (
    <Layout>
      <Routes>
        {
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/campaigns" element={<CustomerTable />} />
            <Route path="/createpartner" element={<CreatePartner />} />
            <Route path="/allcustomer" element={<AllCustomers />} />
            <Route path="/generatecoupons" element={<GenerateCoupons />} />
          </>
        }
      </Routes>
      </Layout>
  );
};
export default RoutesIndex;