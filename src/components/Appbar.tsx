import { MicButton } from "./MicButton"
import { SearchBar } from "./Searchbar"
import { SignInButton } from "./SignInButton"

export const Appbar =()=>{
    return <div className="flex justify-between p-2">
        <div className="hidden dark:block cursor-pointer">
            <img src="youtube-logo.svg" className="w-36 h-12 object-cover cursor-pointer"></img>
        </div>
        <div className="block dark:hidden cursor-pointer">
            <img src="YouTube-Logo.wine.svg" className="w-44 h-12 object-cover cursor-pointer"></img>
        </div>
        <div className="flex items-center w-2/3 sm:w-2/3 md:w-3/5 lg:w-2/5">
            <SearchBar/>
            <MicButton />
        </div>
        <div className="text-md inline-flex items-center">
            <SignInButton />
        </div>

    </div>
}