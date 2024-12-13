const Contact = () => {
    return (
      <div className="bg-white rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;