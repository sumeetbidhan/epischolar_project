import Head from 'next/head';
import FeaturedComponent from '../components/FeaturedComponent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Documents Required for Study Abroad Loan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <h1 className="text-center text-4xl my-8">Documents Required for Study Abroad Loan</h1>
        <FeaturedComponent />
      </main>
    </div>
  );
}
