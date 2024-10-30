export const SignInButton = () => {
    return (
      <div className="">
        <button
          type="button"
          className="flex justify-between items-center w-full text-lightSignIn dark:text-white bg-transparent hover:bg-[#def1ff]  dark:hover:bg-gray-500 rounded-full border-2 dark:border-gray-800 text-sm px-1 sm:px-4 py-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="bg-white border-[1px] border-white rounded-full size-6 md:size-7 lg:size-9">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <p className="hidden md:block text-[12px] md:text-sm lg:text-xl font-semibold">Sign in</p>
        </button>
      </div>
    );
  };
  