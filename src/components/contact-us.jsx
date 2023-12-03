const ContactUs = () => {
  return (
    <div className="contact-us w-[60%] px-4 py-8 mx-auto max-w-screen-xl">
      <h1 className="mb-[50px] font-bold text-[#3D006B] text-2xl">
        Contact us
      </h1>
      <form action="" className="flex flex-col gap-4">
        <div className="flex flex-col w-2/4 gap-2">
          <label htmlFor="email" className="font-bold text-lg text-[#3D006B]">
            Enter your email
          </label>
          <input
            className="border-2 border-zinc-300 px-2 py-[0.2em] text-lg"
            type="email"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>
        <div className="flex flex-col w-2/4 gap-2">
          <label htmlFor="message" className="font-bold text-lg text-[#3D006B]">
            Enter your message
          </label>

          <input
            className="border-2 border-zinc-300 px-2 py-[0.2em] text-lg"
            type="text"
            id="message"
            placeholder="I have a query regarding.."
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#3D006B] rounded-full text-bold text-lg px-4 py-1 text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
