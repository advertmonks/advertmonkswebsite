// import Image from "next/image";

// export default function Footer() {
//     return (
//         <>
//         <div className="flex justify-center mx-auto">
//         <div>
//         <Image
//                 src="/images/john.png"
//                 alt="John Stewart"
//                 width={40}
//                 height={40}
//                 className="w-24 h-24"
//               />
//         </div>
//             <footer className="flex justify-center gap-8 mt-8 pt-8 border-t border-gray-200 w-full">
//         <div className="flex flex-col gap-2">
//         <h1>Company</h1>
//           <a href="#" className="text-gray-700 hover:underline">About us</a>
//           <a href="#" className="text-gray-700 hover:underline">Careers</a>
//           <a href="#" className="text-gray-700 hover:underline">Press</a>
//           <a href="#" className="text-gray-700 hover:underline">News</a>
//           <a href="#" className="text-gray-700 hover:underline">Contact</a>
//         </div>
//         <div className="flex flex-col gap-2">
//         <h1>Resources</h1>
//           <a href="#" className="text-gray-700 hover:underline">Blog</a>
//           <a href="#" className="text-gray-700 hover:underline">Help center</a>
//           <a href="#" className="text-gray-700 hover:underline">Tutorials</a>
//           <a href="#" className="text-gray-700 hover:underline">Support</a>
//         </div>
//         <div className="flex flex-col gap-2">
//         <h1>Legal</h1>
//           <a href="#" className="text-gray-700 hover:underline">Terms</a>
//           <a href="#" className="text-gray-700 hover:underline">Privacy</a>
//           <a href="#" className="text-gray-700 hover:underline">Cookies</a>
//         </div>
//       </footer>
//       <div></div>
//       </div>
//         </>
//     );
// }


import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";



const Footer = () => {
  return (
    <>
      <footer id="contact" className="bg-white mt-20 md:flex md:flex-row flex-col">
        <div className="mx-auto max-w-screen-xl space-y-2 px-4 py-6 sm:px-6 lg:space-y-4 lg:px-2">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="text-teal-600 flex justify-center md:justify-normal">
                <Image  src="/logo.png" alt="Logo" width="220" height="180" />
              </div>

              <ul className="mt-8 flex gap-6 justify-center md:justify-normal mb-4 md:mb-0">
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

            <div className="grid grid-cols-1 gap- sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
              <div>
                <p className="font-medium text-gray-900">Company</p>

                <ul className="mt-6 space-y-4 text-sm">

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Directors{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Jobs{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Summer Training{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Placement Cell{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Courses</p>

                <ul className="mt-6 space-y-4 text-sm w-36">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Six Months of certification in digital forensics{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Six Months Certification in cybersecurity{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      One Year diploma course in cybersecurity{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p id="contactUs" className="font-medium text-gray-900">Support</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      About Us{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Blogs{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Gallery{" "}
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Refund Policy{" "}
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-medium text-gray-900">Contact Info</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <div
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      +91 9653533324, 9653533325{" "}
                    </div>
                  </li>

                  <li>
                    <Link
                      href="mailto:info@mcyberacadmey.com"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      info@mcyberacadmey.com{" "}
                    </Link>
                  </li>

                  <li>
                    <div
                      
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      2nd Floor, Plot No - 129L, Maheshwara Complex, Model Town , Rohtak, Haryana ,India ,124001
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
        
        </div>
      </footer>
    </>
  );
};

export default Footer;

