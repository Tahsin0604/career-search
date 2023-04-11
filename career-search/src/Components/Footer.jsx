import React from "react";
import social from "../../public/Icons/Group 9969.png";

const Footer = () => {
  return (
    <div className="bg-slate-900 mt-5">
      <div className="container py-16">
        <div className="grid gri-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between gap-4">
          <div className="space-y-3 px-3 border-b border-solid pb-4 lg:border-0">
            <h1 className="text-white text-xl font-bold">Career Search</h1>
            <p className="text-slate-200">
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={social} alt="social icons" />
          </div >
          <div className="space-y-3 px-3 border-b border-solid pb-4 lg:border-0">
            <h1 className="text-white text-xl font-bold">Company</h1>
            <ul className="text-slate-200">
              <li>About Us</li>
              <li>Work</li>
              <li>Latest News</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="space-y-3 px-3 border-b border-solid pb-4 lg:border-0">
            <h1 className="text-white text-xl font-bold">Product</h1>
            <ul className="text-slate-200">
              <li>Prototype</li>
              <li>Plans & Pricing</li>
              <li>Customers</li>
              <li>Integrations</li>
            </ul>
          </div>
          <div className="space-y-3 px-3 border-b border-solid pb-4 lg:border-0">
            <h1 className="text-white text-xl font-bold">Support</h1>
            <ul className="text-slate-200">
              <li>Help Desk</li>
              <li>Sales</li>
              <li>Become a Partner</li>
              <li>Developers</li>
            </ul>
          </div>
          <div className="space-y-3 px-3 border-b border-solid pb-4 lg:border-0">
            <h1 className="text-white text-xl font-bold">Contact</h1>
            <p className="text-slate-200">524 Broadway , NYC</p>
            <p className="text-slate-200">+1 777 - 978 - 5570</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
