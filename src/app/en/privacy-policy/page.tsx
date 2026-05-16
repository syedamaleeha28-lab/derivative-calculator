import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import { dictionaries, Lang } from '@/lib/dictionaries';
import { Metadata as NextMetadata } from 'next';

export const generateMetadata = async ({ params }: { params: { lang: string } }): Promise<Metadata> => {
  const currentLang = (params.lang as Lang) || 'en';
  const t = dictionaries[currentLang].privacy;
  return {
    title: t.title,
    description: t.description,
    alternates: { canonical: `https://${process.env.NEXT_PUBLIC_DOMAIN}/${currentLang}/privacy-policy` },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `https://${process.env.NEXT_PUBLIC_DOMAIN}/${currentLang}/privacy-policy`,
      locale: currentLang,
      type: 'website',
    },
    twitter: {
      title: t.title,
      description: t.description,
    },
  };
};

export default function PrivacyPolicyPage() {
  const currentLang = 'en'; // English only per user request
  const t = dictionaries[currentLang].privacy;
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 md:px-6">
      <h1 className="text-2xl font-bold mb-6">{t.title}</h1>
      <p className="text-lg leading-7" dangerouslySetInnerHTML={{ __html: t.content }} />
      <Footer />
    </section>
  );
}
