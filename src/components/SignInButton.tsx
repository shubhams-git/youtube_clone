export const SignInButton = () => {
    return (
      <div>
        <button
          type="button"
          className="flex justify-between items-center w-full text-white bg-transparent hover:bg-gray-500 rounded-full border-2 border-gray-800 font-medium text-sm px-4 py-2"
        >
          <img
            src="user.png"
            alt="User Icon"
            className="bg-white border-[1px] border-white rounded-full w-7 h-7"
          />
          <p className="text-base font-bold pl-2">Sign in</p>
        </button>
      </div>
    );
  };
  