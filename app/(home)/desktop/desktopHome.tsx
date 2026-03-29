import { DesktopHomepageOverlay } from "./desktopHomeOverlay";
import dynamic from "next/dynamic";

const DesktopCanvas = dynamic(() => import('./canvas/canvas'), {
  ssr: false,
})

export default function DesktopPage() {
  return (
    <>
      <DesktopHomepageOverlay />
      <DesktopCanvas />
      
    </>
  )
}
