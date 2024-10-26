import RentalsWrap from "./RentalsWrap"

const OurRentals = () => {
  return (
    <section className="pt-[5rem+120px] md:pt-[calc(4rem+120px)] relative xl:h-[190vh] w-full px-12">
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="w-full flex flex-col items-end gap-6">
          <p className="hidden md:block text-5xl text-black font-medium">
            Why Choose Us?
          </p>

          <div className="flex flex-col-reverse md:flex-row items-start justify-end gap-32 md:gap-10">
            <div className="relative w-full sm:w-[400px] h-[400px]">
              <img
                src="/jpg/product-intro-1.jpg"
                alt="Why Choose Us"
                className="absolute w-[180px] sm:w-[210px] h-auto top-[40%] left-[30%] -translate-y-1/2 -translate-x-1/2 z-10"
              />

              <img
                src="/jpg/product-intro-3.jpg"
                alt="Why Choose Us"
                className="absolute w-[290px] sm:w-[320px] h-auto top-[10%] left-[55%] -translate-y-1/2 -translate-x-1/2 z-0"
              />
            </div>

            <div>
              <p className="block md:hidden text-5xl text-black font-medium">
                Why Choose Us?
              </p>
              <p className="text-sm font-normal text-[#4B4B4B] text-justify max-w-[350px] mt-7">
                We believe that a successful business is clear on its vision,
                values and purpose and these guide its long term strategies and
                day-to-day activities. The partnership of Nigerian citizens who
                have good knowledge of the Nigerian construction industry is a
                strong statement of our intention to be amongst the top Building
                and Civil Engineering Companies in Nigeria
              </p>
            </div>
          </div>
        </div>

        {/*  */}
        <RentalsWrap />
      </div>
    </section>
  )
}

export default OurRentals
