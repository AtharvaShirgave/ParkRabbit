export default function LoginComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-white via-gray-50 to-gray-100 px-4">

      <div className="w-full max-w-sm bg-white rounded-2xl shadow-xl px-8 py-10">
        
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center tracking-wide text-gray-900">
          Sign in to Park Rabbit
        </h2>

        {/* Subtitle */}
        <p className="mt-2 text-center text-sm text-gray-500">
          Manage your parking seamlessly
        </p>

        {/* Form */}
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2
                         focus:ring-black focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-gray-300 px-4 py-2
                         text-gray-700 focus:outline-none focus:ring-2
                         focus:ring-black focus:border-transparent"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full rounded-xl bg-black py-3 text-white
                       font-medium tracking-wide hover:bg-gray-900
                       transition active:scale-[0.98] shadow-md"
          >
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}
