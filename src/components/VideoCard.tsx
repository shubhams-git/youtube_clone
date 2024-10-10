export function VideoCard(){
    return <div>
        <img src= "/photo.jpg" className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1">
                <img className="rounded-full w-11 h-11" src= "/logo.jpg"></img>
            </div>
            <div className="col-span-11 pl-1 pt-0.5">
                <div className="font-bold text-xl">
                    RATAN TATA PASSED AWAY | Every Indian 
                    Salutes the Great Man | By Prashant Dhawan
                </div>
                <div className="col-span-11 text-gray-400 text-lg">
                    Study IQ IAS
                </div>
                <div className="col-span-11 text-gray-400 text-lg">
                    1M views・50 minutes ago
                </div>
            </div>
            
        </div>
    </div>
}