export function VideoCard(props:any){
    return <div>
        <img src={props.thumbnail} className="rounded-xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1">
                <img className="rounded-full w-11 h-11" src={props.logo}></img>
            </div>
            <div className="col-span-11 pl-1 pt-0.5">
                <div className="font-bold text-xl">
                    {props.title}
                </div>
                <div className="col-span-11 text-gray-400 text-lg">
                    {props.author}
                </div>
                <div className="col-span-11 text-gray-400 text-lg">
                    {props.views}・{props.timestamp}
                </div>
            </div>
            
        </div>
    </div>
}