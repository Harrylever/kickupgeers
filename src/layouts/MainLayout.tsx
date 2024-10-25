import { Outlet } from "react-router-dom"
import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"
import BackToTopButton from "@/components/ui/backToTopButton"

export default function MainLayout() {
  return (
    <section className="relative">
      <Header />
      <main className="bg-[#F5F5F0]">{<Outlet />}</main>
      <Footer />
      <BackToTopButton />
    </section>
  )
}
