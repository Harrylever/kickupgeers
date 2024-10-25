import ContactForm from "./ContactForm"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pt-[calc(1rem+120px)] relative w-full px-12"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="w-full max-w-[400px] flex flex-col gap-1">
          <p className="text-5xl text-black font-medium">Contact</p>
          <p className="text-sm text-[#4B4B4B] font-normal">
            Working with Kickup Geers is more than just a career; it&rsquo;s
            meaningful work that improves the lives of millions of people.
          </p>
        </div>

        <div className="mt-10 pb-20 flex flex-col lg:flex-row justify-start gap-10">
          <ContactForm />

          <div className="">
            <p className="text-2xl font-semibold">Our location</p>

            <div className="mt-5 flex flex-col gap-10">
              <div className="w-full max-w-[180px] flex flex-col gap-1">
                {/* Location */}
                <p className="text-[#1F1F1F] font-semibold">Rivers</p>

                {/* Address */}
                <p className="inline-flex gap-1 text-[#4B4B4B]">
                  <FaLocationDot size={20} className="mt-0.5" />
                  <span> 28 Agip Road, Rumueme Mile 4, Port harcourt.</span>
                </p>

                <a
                  href="tel:+2348035878467"
                  className="inline-flex gap-1 text-[#4B4B4B] group"
                >
                  <FaPhone size={14} className="mt-1" />
                  <span className="group-hover:underline">+234 803 587 8467</span>
                </a>
                <a
                  href="tel:+2348090600151"
                  className="inline-flex gap-1 text-[#4B4B4B] group"
                >
                  <FaPhone size={14} className="mt-1 opacity-0" />
                  <span className="group-hover:underline">+234 809 060 0151</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
