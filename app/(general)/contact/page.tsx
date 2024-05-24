import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Page',
  description: 'This is the contact page of the website.',
  keywords: ['Contact', 'Page', 'Information'],
};
const ContactPage = () => {
  return (
    <div><h1>ContactPage</h1></div>
  );
};

export default ContactPage;