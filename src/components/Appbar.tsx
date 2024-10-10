import { SearchBar } from "./Searchbar"

export const Appbar =()=>{
    return <div className="flex justify-between">
        <div>
            Youtube
        </div>
        <div className="w-2/5">
            <SearchBar/>
        </div>
        <div>
            Sign in
        </div>

    </div>
}