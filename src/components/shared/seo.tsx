import Head from 'next/head';
import { useRouter } from 'next/router';




// !STARTERCONF Change these default meta

export default function Seo(props: SeoProps) {
  const router = useRouter();

  const title = router?.query?.title ? router.query.title : 'Letters of Blank'


  const defaultMeta = {
    title: title,
    description:
      'Understand and interact with the blockchain like humans should',
    url: 'https://lettersofblank.com',
    type: 'website',
    robots: 'follow, index',
    /**
     * No need to be filled, will be populated with openGraph function
     * If you wish to use a normal image, just specify the path below
     */
  };
  const meta = {
    ...defaultMeta,
    ...props,
    image: `https://lettersofblank.com/moon.svg`,
  };

  type SeoProps = {
    date?: string;
    templateTitle?: string;
    description?: string;
    useGAnalytics?: boolean;
  } & Partial<typeof defaultMeta>;

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  meta['description'] = props.description
    ? props.description
    : meta.description;
  // Use siteName if there is templateTitle
  // but show full title if there is none
  // !STARTERCONF Follow config for opengraph, by deploying one on https://github.com/theodorusclarence/og
  // ? Uncomment code below if you want to use default open graph
  // meta['image'] = openGraph({
  //   description: meta.description,
  //   siteName: props.templateTitle ? meta.siteName : meta.title,
  //   templateTitle: props.templateTitle,
  // });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@th_clarence' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='Lore BlockExplorer'
          />
        </>
      )}
      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

// !STARTERCONF this is the default favicon, you can generate your own from https://www.favicon-generator.org/ then replace the whole /public/favicon folder
const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '57x57',
    href: '/moon.svg',
  },
  {
    rel: 'icon',
    type: 'image/svg',
    sizes: '32x32',
    href: '/moon.svg',
  },
];
