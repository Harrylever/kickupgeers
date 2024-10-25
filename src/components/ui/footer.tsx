const Footer = () => {
  return (
    <footer className="w-full bg-[#4B4B4B] px-12 pb-10 lg:pb-0">
      <div className="w-full max-w-[1400px] mx-auto lg:h-[250px] flex flex-col lg:flex-row lg:items-center justify-between">
        <img
          src="/png/kickupgeers.png"
          alt="Kickup Geers Limited"
          width={0}
          height={0}
          className="relative w-[180px] h-fit"
        />

        <div className="h-fit flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
          <p className="text-white text-sm font-medium select-none">
            &copy; 2024 KICKUPGEERS LIMITED.
          </p>
          <a href="#" className="text-white text-sm font-semibold hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
