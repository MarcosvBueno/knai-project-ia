import ComparisonTable from '../_components/comparison-table';
import Header from '../_components/header';
import Hero from '../_components/hero';
import WorkPage from '../_components/work';
import CommentsSection from '../_components/comments';
import Footer from '../_components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black ">
      <div className="z-50">
        <Header />
      </div>
      <main className="container mx-auto px-4 py-20 h-screen flex flex-1 items-center justify-center">
        <Hero />
      </main>
      <section className="container mx-auto px-4 py-20 " id="difference">
        <ComparisonTable />
      </section>
      <section
        className=" mx-auto px-4 h-screen  flex flex-1 items-center justify-center bg-black"
        id="work"
      >
        <WorkPage />
      </section>
      <section className=" mx-auto px-4 py-20" id="reviews">
        <CommentsSection />
      </section>
      <Footer />
    </div>
  );
}
