
import Link from "next/link"
import { Suspense } from "react";
import ProjectsMenu from "./projectMenu";
import SoundToggle from "./soundToggler";

  export const Navbar = () => {
    return (
      <nav 
      aria-label = "Main"
      className="absolute 
                top-0 
                left-0 
                right-0 
                
                z-20 flex 
                items-center 
                justify-between 
                
                w-full 
                px-5 
                sm:px-10 
                lg:px-20 
                pt-5 pb-5 
                
                border-b 
                text-white/75 
                border-b-white/20 
                backdrop-blur-sm
      ">

      {/* HOME */}
      <span className="mix-blend-difference font-bold">
        <Link href="/">HOME</Link>
      </span>

      <ul className="flex text-sm font-light tracking-wider space-x-4 md:space-x-10 font-ubuntu">

        {/* PROJECTS DROPDOWN */}
        <Suspense
          fallback={
            <li className="hover-effect">
              <Link href="/projects">#PROJECTS</Link>
            </li>
          }
        >
          <ProjectsMenu />
        </Suspense>

        <li className="hover-effect">
          <Link href="/sketchbook">#SKETCHBOOK</Link>
        </li>
        <li>
          <SoundToggle/>
        </li>
      </ul>
    </nav>
    )
  }


export default Navbar
