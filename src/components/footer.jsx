// import Image from "next/image";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin} from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import Link from "next/link";

// const Footer = () => {
//   return (
//     <>
//       <footer id="contact" className="bg-white mt-20 md:flex md:flex-row flex-col">
//         <div className="mx-auto max-w-screen-xl space-y-2 px-4 py-6 sm:px-6 lg:space-y-4 lg:px-2">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
//             <div>
//               <div className="text-teal-600 flex justify-center md:justify-normal">
//                 <Image  src="/admonk.png" alt="Logo" width="130" height="80" />
//               </div>

//               <ul className="mt-8 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
//                 <li>
//                   <Link href="https://www.facebook.com/profile.php?id=61550268785044">
//                     <FaFacebook size={23} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.instagram.com/mcyberacademy/">
//                     <FaInstagram size={23} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.linkedin.com/company/mcyberacademy/">
//                     <FaLinkedin size={23} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link href="https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg">
//                     <FaYoutube size={23} />
//                   </Link>
//                 </li>
//               </ul>
//             </div>

//             <div className="grid grid-cols-1 gap- sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">

//               <div>
//                 <p id="contactUs" className="font-medium text-gray-900">Support</p>

//                 <ul className="mt-6 space-y-4 text-sm">
//                   <li>
//                     <Link
//                       href="/"
//                       className="text-gray-700 transition hover:opacity-75"
//                     >
//                       {" "}
//                       About Us{" "}
//                     </Link>
//                   </li>

//                   <li>
//                     <Link
//                       href="/"
//                       className="text-gray-700 transition hover:opacity-75"
//                     >
//                       {" "}
//                       Gallery{" "}
//                     </Link>
//                   </li>

//                 </ul>
//               </div>

//               <div>
//                 <p className="font-medium text-gray-900">Contact Info</p>

//                 <ul className="mt-6 space-y-4 text-sm">
//                   <li>
//                     <div
//                       className="text-gray-700 transition hover:opacity-75"
//                     >
//                       {" "}
//                       +91 9653533324, 9653533325{" "}
//                     </div>
//                   </li>

//                   <li>
//                     <Link
//                       href="mailto:info@mcyberacadmey.com"
//                       className="text-gray-700 transition hover:opacity-75"
//                     >
//                       {" "}
//                       info@mcyberacadmey.com{" "}
//                     </Link>
//                   </li>

//                   <li>
//                     <div

//                       className="text-gray-700 transition hover:opacity-75"
//                     >
//                       {" "}
//                       2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town , Rohtak, Haryana ,India ,124001
//                     </div>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>

//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;

import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Logo and Mission Statement */}
          <div className="text-center mb-12">
            <div className="mb-6 flex justify-center">
              <Image src="/admonk.png" alt="Logo" width="130" height="80" />
            </div>
            <p className="text-gray-800 max-w-3xl mx-auto leading-relaxed">
              We Indians love stuff customised for us. So whether it&apos;s
              sending a parcel to your Chandigarh waali mausi, or booking that
              Goa trip, Hanumax helps you plan your travel. Ready to turn it
              into a reality? Let&apos;s look at our services below!
            </p>
          </div>

          {/* Contact Information Grid */}
          <div className="flex justify-center">
            <ul className="mt-4 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
              <li>
                <Link href="https://www.facebook.com/profile.php?id=61550268785044">
                  <FaFacebook size={23} />
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/mcyberacademy/">
                  <FaInstagram size={23} />
                </Link>
              </li>
              <li>
                <Link href="https://www.linkedin.com/company/mcyberacademy/">
                  <FaLinkedin size={23} />
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCYgQk1T9VR_P78oNbq5J_jg">
                  <FaYoutube size={23} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
