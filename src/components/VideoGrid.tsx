import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        title:"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan",
        thumbnail:"photo.jpg",
        logo:"logo.jpg",
        author:"Study IQ IAS",
        views:"1M views",
        timestamp:"50 minutes ago"
    },
    {
        title:"This Airplane Lost its Roof at 24,000 ft | What Happened Next? | Dhruv Rathee",
        thumbnail:"photo2.jpg",
        logo:"logo2.jpg",
        author:"Dhruv Rathee",
        views:"3.5M views",
        timestamp:"19 hours ago"
    },
    {
        title:"Shorts, Reels and short attention spans || Acharya Prashant, with Delhi University (2023)",
        thumbnail:"photo1.jpg",
        logo:"logo1.jpg",
        author:"Breaking Free",
        views:"811 views",
        timestamp:"11 hours ago"
    },
    {
        title:"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan",
        thumbnail:"photo.jpg",
        logo:"logo.jpg",
        author:"Study IQ IAS",
        views:"1M views",
        timestamp:"50 minutes ago"
    },
    {
        title:"This Airplane Lost its Roof at 24,000 ft | What Happened Next? | Dhruv Rathee",
        thumbnail:"photo2.jpg",
        logo:"logo2.jpg",
        author:"Dhruv Rathee",
        views:"3.5M views",
        timestamp:"19 hours ago"
    },
    {
        title:"Shorts, Reels and short attention spans || Acharya Prashant, with Delhi University (2023)",
        thumbnail:"photo1.jpg",
        logo:"logo1.jpg",
        author:"Breaking Free",
        views:"811 views",
        timestamp:"11 hours ago"
    },
    {
        title:"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan",
        thumbnail:"photo.jpg",
        logo:"logo.jpg",
        author:"Study IQ IAS",
        views:"1M views",
        timestamp:"50 minutes ago"
    },
    {
        title:"This Airplane Lost its Roof at 24,000 ft | What Happened Next? | Dhruv Rathee",
        thumbnail:"photo2.jpg",
        logo:"logo2.jpg",
        author:"Dhruv Rathee",
        views:"3.5M views",
        timestamp:"19 hours ago"
    },
    {
        title:"Shorts, Reels and short attention spans || Acharya Prashant, with Delhi University (2023)",
        thumbnail:"photo1.jpg",
        logo:"logo1.jpg",
        author:"Breaking Free",
        views:"811 views",
        timestamp:"11 hours ago"
    },
    {
        title:"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan",
        thumbnail:"photo.jpg",
        logo:"logo.jpg",
        author:"Study IQ IAS",
        views:"1M views",
        timestamp:"50 minutes ago"
    },
    {
        title:"This Airplane Lost its Roof at 24,000 ft | What Happened Next? | Dhruv Rathee",
        thumbnail:"photo2.jpg",
        logo:"logo2.jpg",
        author:"Dhruv Rathee",
        views:"3.5M views",
        timestamp:"19 hours ago"
    },
    {
        title:"Shorts, Reels and short attention spans || Acharya Prashant, with Delhi University (2023)",
        thumbnail:"photo1.jpg",
        logo:"logo1.jpg",
        author:"Breaking Free",
        views:"811 views",
        timestamp:"11 hours ago"
    },
    {
        title:"RATAN TATA PASSED AWAY | Every Indian Salutes the Great Man | By Prashant Dhawan",
        thumbnail:"photo.jpg",
        logo:"logo.jpg",
        author:"Study IQ IAS",
        views:"1M views",
        timestamp:"50 minutes ago"
    }
]

export const VideoGrid = ()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=>
            <div className="pl-3 pt-5 pb-5 pr-3">
                <VideoCard 
                    title={video.title}
                    thumbnail={video.thumbnail}
                    logo={video.logo}
                    author={video.author}
                    views={video.views}
                    timestamp={video.timestamp}/>
            </div>
        )}
    </div>
}