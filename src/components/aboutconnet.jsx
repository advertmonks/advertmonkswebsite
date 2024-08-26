// import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function ContactPage() {
  return (
    // <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row items-center justify-between bg-purple-500 p-8 rounded-lg shadow-lg">
        {/* Left Side - Text Content */}
        <div className="text-white md:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">
            Take the first step towards unlocking your brand's potential
          </h1>
          <p className="text-lg mb-6">
            Non fermentum dictum donec ut. In mi feugiat ac condimentum in cras
            maecenas maecenas bibendum. Turpis amet velit et integer proin
            pellentesque massa.
          </p>
        </div>

        {/* Right Side - Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg md:w-1/2">
          <h2 className="text-gray-800 text-lg font-semibold mb-6">
            Please fill in the information below
          </h2>

          <form action="#" className="space-y-4">
            <div>
              <label htmlFor="company-name" className="sr-only">
                Company Name
              </label>
              <input
                type="text"
                id="company-name"
                className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                placeholder="Your company name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                placeholder="youremail@gmail.com"
                required
              />
            </div>

            <div>
              <label htmlFor="website-url" className="sr-only">
                Website URL
              </label>
              <input
                type="url"
                id="website-url"
                className="w-full rounded-lg border-gray-300 p-4 text-sm shadow-sm"
                placeholder="yourwebsite.com"
                required
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full rounded-lg bg-gray-800 px-5 py-3 text-sm font-medium text-white shadow-md hover:bg-gray-900"
              >
                Get a quote
              </button>
            </div>
          </form>
        </div>
      </div>
    // </MaxWidthWrapper>
  );
}
