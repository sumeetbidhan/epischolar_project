import Head from 'next/head';
import FeaturedComponent from '../components/FeaturedComponent';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Featured Component</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">
        <h1 className="text-center text-4xl my-8">Featured Component</h1>
        <FeaturedComponent />
      </main>
    </div>
  );
}
