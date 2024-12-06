export default function FormPage() {
  return (
    <div className="md:flex md:items-center mx-auto max-w-3xl w-full">
      <div className="bg-n0 rounded-md w-full my-6 mx-2 p-6 shadow-lg relative">
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="sr-only">
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="sr-only">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="E-mail address like name@company.com"
            />
          </div>

          <div>
            <label htmlFor="tel" className="sr-only">
              Phone:
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900"
              placeholder="Phone number like +12345678901"
            />
          </div>

          <div>
            <label htmlFor="desc" className="sr-only">
              Message:
            </label>
            <textarea
              name="desc"
              id="desc"
              className="w-full bg-transparent border-2 border-n90 rounded-md p-2 text-n400 font-paragraph focus:outline-none focus:ring-2 focus:ring-n900 focus:border-n900 resize-none"
              placeholder="Message for us"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="px-4 py-2 text-lg font-medium text-center text-white bg-green-600 rounded-md "
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
