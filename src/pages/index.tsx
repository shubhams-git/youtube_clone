import { VideoCard } from "@/components/VideoCard";
export default function Home() {
  return (
    <div>
      <VideoCard thumbnail={"photo.jpg"}
        logo={"logo.jpg"}
        title={"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan"}
        author={"Study IQ IAS"}
        views={"1M views"}
        timestamp={"50 minutes ago"}/>
    </div>
  );
}
