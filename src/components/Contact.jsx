const Contact = () => {
  return (

    <section id="contact" className="py-16 px-6 bg-white text-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="mb-8 text-lg">Feel free to reach out for collaborations or just a friendly hello! 👋</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="p-3 border border-gray-300 rounded-lg" />
          <textarea rows="5" placeholder="Your Message" className="p-3 border border-gray-300 rounded-lg"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
        <p className="mt-6 text-sm text-gray-500">Or email me at: <a className="underline" href="pritampatra.fb@gmail.com">pritampatra.fb@gmail.com</a></p>
      </div>
    </section>
  );
};

export default Contact;
