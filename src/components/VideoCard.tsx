export function VideoCard(props:any){
    return <div className="cursor-pointer">
        <img src={props.thumbnail} className="rounded-3xl"></img>
        <div className="grid grid-cols-12 pt-3">
            <div className="col-span-1 size-14">
                <img className="rounded-full size-12" src={props.logo}></img>
            </div>
            <div className="col-span-11 pl-7 pt-0.5">
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