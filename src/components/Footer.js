import React from "react";
import { categories, importantLinks } from "@/app/data";
import payments from "../asstes/images/payments.png"
import Image from "next/image";
import footerlogo from '../asstes/images/footerlogo.png'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="grid grid-cols-12 sm:gap-10">
            <div className="md:col-span-4 col-span-12">
              <Image src={footerlogo} width={150}/>
              <p>
                loreVelit ullamco consectetur dolor quis dolor id elit. Fugiat
                pariatur sunt eiusmod incididunt. Ut sunt dolor nisi velit ut
                non incididunt enim. Elit incididunt magna non deserunt tempor
                sit. Proident pariatur amet ea amet sit pariatur et culpa. Dolor
                mollit veniam ea ipsum laborum enim exercitation labore fugiat
                deserunt ullamco. Est incididunt commodo velit tempor id dolore
                aliqua eiusmod reprehenderit.
              </p>
            </div>
            <div className="md:col-span-2 col-span-6">
              <h5>Categories</h5>
              <ul className="p-0 link-list-footer">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a href="#">{category.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 col-span-6">
              <h5>Important Links</h5>
              <ul className="p-0 link-list-footer">
                {
                    importantLinks.map((item, index)=>(
                        <li key={index}>    
                            <a href="#">{item}</a>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className="md:col-span-3 col-span-12">
              <h5>Contact</h5>
              <ul className="p-0 link-list-footer">
                  <li>
                    <strong>Address:</strong> Your address here
                  </li>
                  <li>
                    <strong>E-mail:</strong> your.email@mail.com
                  </li>
                  <li>
                    <strong>Mobile:</strong> +0** 8989 89 89
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container footer-bottom flex items-center justify-between py-2">
        <p>Copyright © 2023 </p>
        <Image src={payments} width={200}/>
      </div>
    </>
  );
}
