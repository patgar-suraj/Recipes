const Contact = () => {
  return (
    <div className="w-full min-h-screen mt-20 py-10 px-5 md:px-20">
      {/* Title */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold font-mono">Contact Us</h1>
        <p className="text-gray-400 mt-3">
          Have questions, feedback, or recipe ideas? We'd love to hear from you! 🍳
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <form className="bg-gradient-to-tr from-[#0E0D13] via-[#0E0D13] to-[#1b1924] rounded-2xl shadow-lg p-8 flex flex-col gap-5">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-3 rounded-lg outline-none min-h-[150px]"
          />
          <button
            type="submit"
            className="bg-amber-400 hover:bg-amber-500 font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Right - Info */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-tr from-[#0E0D13] via-[#0E0D13] to-[#1b1924] p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">📧 Email</h2>
            <p className="text-gray-400 mt-2">support@recipebox.com</p>
          </div>
          <div className="bg-gradient-to-tr from-[#0E0D13] via-[#0E0D13] to-[#1b1924] p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">📞 Phone</h2>
            <p className="text-gray-400 mt-2">+91 98765 43210</p>
          </div>
          <div className="bg-gradient-to-tr from-[#0E0D13] via-[#0E0D13] to-[#1b1924] p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">📍 Address</h2>
            <p className="text-gray-400 mt-2">
              Bangalore, Karnataka, India
            </p>
          </div>
        </div>
      </div>

      {/* Map (Optional) */}
      <div className="mt-12 bg-[#0F0E15] flex items-center justify-center p-5 rounded-3xl">
        <p>All ©️ rights reserved 2025-26</p>
      </div>
    </div>
  );
};

export default Contact;
