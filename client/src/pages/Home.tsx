import Banner from "@/components/home/Banner/index";
import Courses from "@/components/home/Courses/index";
import Mentor from "@/components/home/Mentor/index";
import Testimonials from "@/components/home/Testimonials/index";
import Newsletter from "@/components/home/Newsletter/Newsletter";
import Navbar from "@/components/home/Navbar/index";
import Footer from "@/components/home/Footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
        <Courses />
        <Mentor />
        <Testimonials />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
