"use client"
import dynamic from "next/dynamic";
import useIsDesktop from "../components/helpers/mediaQuery";
import { DesktopHomepageOverlay } from "./desktop/desktopHomeOverlay";
import { MobileHomepageOverlay } from "./mobile/mobileHome";
import PixelDitherCanvas from "./mobile/pixelAnimation";
import DitherReveal from "./ditherReveal";

const DesktopCanvas = dynamic(() => import("./desktop/canvas/canvas"), { ssr: false });
const SceneIndex = dynamic(() => import("./desktop/canvas/sceneIndex"), { ssr: false });

export default function Home() {
  const isDesktop = useIsDesktop();

  return (
    <>
      <h1 className="sr-only">Victoria Onajobi</h1>

      {/* mobile background loads only on phones (before the text so the text stays on top) */}
      {isDesktop === false && 
      <DitherReveal
        cell={3}
        scale={.02}
        radius= {100}
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
      />}

      <div className="hidden md:block">
        <DesktopHomepageOverlay />
      </div>
      <div className="md:hidden w-full">
        <MobileHomepageOverlay />
      </div>

      {isDesktop === true && (
        <DesktopCanvas>
          <SceneIndex />
        </DesktopCanvas>
      )
    }
    </>
  );
}
