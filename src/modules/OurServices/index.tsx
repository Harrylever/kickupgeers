import ServiceTab from "./ServiceTab"
import Achievements from "./Achievements"

const ourServicesList: {
  icon: string
  title: string
  description: string
  tags: string[]
}[] = [
  {
    icon: "/svg/bridge-icon.svg",
    title: "Civil Insfrastructure",
    description:
      "The geographical diversity, project complexity and public nature of civil work results in an exceptionally challenging industry that demands a high level of technical construction expertise.",
    tags: ["Hospitality", "Public Buildings", "Musuem", "Hospitals"],
  },
  {
    icon: "/svg/house-building-icon.svg",
    title: "Buildings",
    description:
      "We offers substantial construction experience, competitive pricing, financial strength, integrity and a commitment to your project that is supported by a foundation of quality and workplace safety.",
    tags: ["Residential", "Houses", "Business"],
  },
  {
    icon: "/svg/coin-up-icon.svg",
    title: "Equipment Rental",
    description:
      "Kickup geers respond to the unique needs of clients in the oil and gas, petrochemical, mining, and power and renewable industries",
    tags: ["Factory", "Refinery"],
  },
]

const OurServices = () => {
  return (
    <section id="our-services" className="pt-[calc(4rem+120px)] relative xl:h-[110vh] w-full px-6 sm:px-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <h2 className="text-5xl text-black font-medium">Our Services</h2>

        <div className="mt-10 w-full flex flex-wrap lg:justify-evenly">
          {ourServicesList.map((service) => (
            <ServiceTab key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div className="mt-20 w-full max-w-[1400px] mx-auto">
        <div>
          <p className="text-4xl text-black font-medium">
            We are a Company Miles ahead of our time.
          </p>
          <p className="mt-3 text-sm text-[#FF8C00]">
            Over Three Decades of First-Class Engineering
          </p>
        </div>

        <Achievements />
      </div>
    </section>
  )
}

export default OurServices
