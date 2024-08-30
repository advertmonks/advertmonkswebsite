import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
    return (
       <>
        <div className="px-20">
        <nav className=" flex justify-between align-middle mt-5">
        <div className="flex justify-center text-2xl">
          <Link href="/">AdvertMonks</Link>
        </div>
          <div className="flex justify-center gap-10  items-center ">
            <div className="flex gap-8 text-xl">
              <Link href="/about">About</Link>
              <Link href="/about#services">Services</Link>
              <Link href="/#reviews">Reviews</Link>
              <Link href="/#team">Team</Link>
              <Link href="/#contact">Contact</Link>
            </div>
            
             
           
          </div>
        </nav>
      </div>
       </>
    );
}