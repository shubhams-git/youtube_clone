import { VideoGrid } from "@/components/VideoGrid";
import { Appbar } from "@/components/Appbar";
export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <Appbar />
      <VideoGrid />
    </div>
  );
}
