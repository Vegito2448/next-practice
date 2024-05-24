import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'SEO Title',
  description: 'SEO Title',
  keywords: ['SEO', 'Title', 'About', "Information"],
};

const AboutPage = () => {
  return (
    <main className="flex flex-col items-center p-24">
      <span className="text-lg">Hello World!</span>
      <h1 className="text-7xl" >AboutPage</h1>
    </main>
  );
};

export default AboutPage;