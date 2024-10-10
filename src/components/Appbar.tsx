import { SearchBar } from "./Searchbar"
import { SignInButton } from "./SignInButton"

export const Appbar =()=>{
    return <div className="flex justify-between p-2">
        <div className="text-md inline-flex items-center cursor-pointer">
            <img src="youtube-logo.svg" className="w-32 h-11 object-cover"></img>
        </div>
        <div className="w-2/3 sm:w-2/3 md:w-3/5 lg:w-2/5">
            <SearchBar/>
        </div>
        <div className="text-md inline-flex items-center">
            <SignInButton />
        </div>

    </div>
}