export const SignInButton = () => {
    return (
      <div className="">
        <button
          type="button"
          className="flex justify-between items-center w-full text-white bg-transparent hover:bg-gray-500 rounded-full border-2 border-gray-800 font-medium text-sm px-1 sm:px-4 py-2"
        >
          <img
            src="user.png"
            alt="User Icon"
            className="bg-white border-[1px] border-white rounded-full size-6 md:size-7"
          />
          <p className="hidden md:block text-[12px] font-light md:text-sm lg:tex-base sm:font-bold md:pl-2">Sign in</p>
        </button>
      </div>
    );
  };
  