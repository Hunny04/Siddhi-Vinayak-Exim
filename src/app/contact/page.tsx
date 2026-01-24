export default function ContactPage() {
  return (
    <section className="bg-[#f4f7f4]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="text-center text-gray-600 mb-12">We'd love to hear from you. Reach out anytime.</p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <form className="bg-white p-8 rounded-xl shadow">
            <input placeholder="Name" className="input" />
            <input placeholder="Email" className="input" />
            <input placeholder="Phone" className="input" />
            <textarea placeholder="Message" rows={4} className="input" />
            <button className="btn-primary w-full">Send Message</button>
          </form>

          {/* INFO */}
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>India - Export Office</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>info@siddhivinayakexim.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+91 XXXXX XXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
