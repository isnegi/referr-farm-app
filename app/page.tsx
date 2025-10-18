import Image from "next/image";
import AppFooter from "./_components/common/app-footer";
import AppHeader from "./_components/common/app-header"
import heroImg from '@/public/assets/images/hero-img.png';
import { Phone } from "lucide-react";
import Link from "next/link";
import ListingCarousel from "./_components/homepage/simple-carousel";
import LogoBasedCarousel from "./_components/homepage/logo-based-carousel";

export default function Home() {

  const topReferrers = [{ "uid": "a768067b-cb72-4d6c-b5ee-e670273caaeb", "fullName": "Simone Cawte", "headline": "Payment Adjustment Coordinator", "currentCompany": "Meevee", "avatar": "https://robohash.org/voluptatumillominus.png?size=64x64&set=set1", "memberSince": "2/3/2023" },
  { "uid": "cd978bab-b02d-4668-a590-11530d9f42d0", "fullName": "Marylou Raycroft", "headline": "Staff Accountant I", "currentCompany": "Oyope", "avatar": "https://robohash.org/praesentiumomnisomnis.png?size=64x64&set=set1", "memberSince": "10/30/2024" },
  { "uid": "bf0ba468-326e-4099-870c-58531b0bcda4", "fullName": "Alexandrina Nettleship", "headline": "Senior Cost Accountant", "currentCompany": "Twimbo", "avatar": "https://robohash.org/perspiciatisetet.png?size=64x64&set=set1", "memberSince": "3/1/2022" },
  { "uid": "7b2f32f5-6253-4e9b-85ec-e01811f8245f", "fullName": "Phelia Acaster", "headline": "Accountant I", "currentCompany": "Mudo", "avatar": "https://robohash.org/voluptatibusnecessitatibusearum.png?size=64x64&set=set1", "memberSince": "9/4/2024" },
  { "uid": "584d843c-09ac-46b2-950f-fae7893e8fcf", "fullName": "Siouxie Clayson", "headline": "Business Systems Development Analyst", "currentCompany": "Aivee", "avatar": "https://robohash.org/maximealiquamsuscipit.png?size=64x64&set=set1", "memberSince": "8/11/2022" },
  { "uid": "208c924b-8dae-4729-87d1-15020b6ec713", "fullName": "Wendeline Palphreyman", "headline": "VP Sales", "currentCompany": "Jayo", "avatar": "https://robohash.org/consequunturetculpa.png?size=64x64&set=set1", "memberSince": "12/7/2023" },
  { "uid": "ef434be3-f30d-4e05-ad44-c74d69946d4b", "fullName": "Nehemiah Euston", "headline": "Teacher", "currentCompany": "Jabbersphere", "avatar": "https://robohash.org/nobisconsequaturcupiditate.png?size=64x64&set=set1", "memberSince": "4/13/2022" },
  { "uid": "32744da5-9523-4e1e-b520-b7d78982df30", "fullName": "Cristobal Gauntley", "headline": "Geologist III", "currentCompany": "Mynte", "avatar": "https://robohash.org/ipsapossimusexcepturi.png?size=64x64&set=set1", "memberSince": "1/1/2025" },
  { "uid": "691a29a4-5d5f-40f2-a98b-602405c342b9", "fullName": "Margette Beardow", "headline": "Systems Administrator III", "currentCompany": "Katz", "avatar": "https://robohash.org/etnequefacilis.png?size=64x64&set=set1", "memberSince": "5/9/2022" },
  { "uid": "f0fd5bdb-dcbb-4638-a98f-5a04fa264066", "fullName": "Brandy Bonehill", "headline": "Financial Advisor", "currentCompany": "Jayo", "avatar": "https://robohash.org/quiseligendimolestias.png?size=64x64&set=set1", "memberSince": "6/14/2023" },
  { "uid": "f363727c-b9cb-48bf-a9bc-c7566c7393ae", "fullName": "Celia Fenelon", "headline": "Geologist IV", "currentCompany": "Skimia", "avatar": "https://robohash.org/sitliberoveniam.png?size=64x64&set=set1", "memberSince": "12/25/2023" },
  { "uid": "7900f4d2-ff71-4218-b6a9-dba576fa18fa", "fullName": "Adelind Garrique", "headline": "Dental Hygienist", "currentCompany": "Oodoo", "avatar": "https://robohash.org/voluptatemdolorratione.png?size=64x64&set=set1", "memberSince": "10/30/2022" },
  { "uid": "ecf165c9-107a-4ae7-882c-dd6632ee014d", "fullName": "Bette Rankin", "headline": "Social Worker", "currentCompany": "Avamm", "avatar": "https://robohash.org/eaquia.png?size=64x64&set=set1", "memberSince": "3/19/2024" },
  { "uid": "76f1770d-f46e-46ea-853a-a00f557ccaa5", "fullName": "Kristal Keele", "headline": "Physical Therapy Assistant", "currentCompany": "Cogibox", "avatar": "https://robohash.org/omnisnonasperiores.png?size=64x64&set=set1", "memberSince": "6/4/2024" },
  { "uid": "01e5f999-b683-465d-b077-1bccb02419af", "fullName": "Shawna Scullard", "headline": "Food Chemist", "currentCompany": "Skinder", "avatar": "https://robohash.org/namquicum.png?size=64x64&set=set1", "memberSince": "1/1/2025" },
  { "uid": "f888608e-893f-4726-b3c9-04c3c53baf1f", "fullName": "Leia Runsey", "headline": "Financial Advisor", "currentCompany": "Eamia", "avatar": "https://robohash.org/molestiasitaquequo.png?size=64x64&set=set1", "memberSince": "5/14/2022" },
  { "uid": "c4c1cc31-283f-4b27-83d4-207d410ccfcc", "fullName": "Annie Mateuszczyk", "headline": "Assistant Professor", "currentCompany": "Tagchat", "avatar": "https://robohash.org/nihiladipiscirerum.png?size=64x64&set=set1", "memberSince": "7/18/2023" },
  { "uid": "7dd7945b-8b8d-4d9a-939f-499a61b9ffbf", "fullName": "Haily Denerley", "headline": "Teacher", "currentCompany": "Aimbo", "avatar": "https://robohash.org/dolorumrerumquos.png?size=64x64&set=set1", "memberSince": "5/21/2022" },
  { "uid": "fcb2e27d-a43a-468e-8d47-705cc459d446", "fullName": "Titus Whiffin", "headline": "Financial Analyst", "currentCompany": "Blogspan", "avatar": "https://robohash.org/uteosest.png?size=64x64&set=set1", "memberSince": "9/6/2023" },
  { "uid": "2daf3db2-9978-420c-b1c1-a6c1a2b5e422", "fullName": "Alanna Sergean", "headline": "Desktop Support Technician", "currentCompany": "Mybuzz", "avatar": "https://robohash.org/evenietinatque.png?size=64x64&set=set1", "memberSince": "11/4/2023" }];

  const topCompanies = [{ "uid": "365cdb16-7e2a-4e51-8f93-9eda295b5f92", "companyName": "Twimbo & Co.", "avatar": "https://robohash.org/autemassumendaharum.png??size=72x72&set=set1", "url": "https://photobucket.com", "openings": 4 },
  { "uid": "ee7ffb9f-4cd3-4a62-9d4e-f2aa061c8168", "companyName": "Demivee Limited", "avatar": "https://robohash.org/quaeratrepellataut.png??size=72x72&set=set1", "url": "http://icio.us", "openings": 1 },
  { "uid": "e2b9257b-cbd1-4b60-ab41-e7c7a9c7c363", "companyName": "Feednation", "avatar": "https://robohash.org/dolorquaeratrerum.png??size=72x72&set=set1", "url": "http://netvibes.com", "openings": 10 },
  { "uid": "b2f3222e-15b6-405b-886d-dfd7b7a3b4bf", "companyName": "Layo", "avatar": "https://robohash.org/idnullamolestiae.png??size=72x72&set=set1", "url": "http://addtoany.com", "openings": 9 },
  { "uid": "cbb61b21-3e03-49e5-8ebd-8782b339b048", "companyName": "BlogXS Inc.", "avatar": "https://robohash.org/ipsaundenumquam.png??size=72x72&set=set1", "url": "http://mail.ru", "openings": 2 },
  { "uid": "01cf140f-bdcf-41cb-b1f1-6fb6daff0a6b", "companyName": "Vitz Pvt Ltd", "avatar": "https://robohash.org/voluptatemvelmolestiae.png??size=72x72&set=set1", "url": "http://netvibes.com", "openings": 4 },
  { "uid": "66ef2af8-9c0b-4470-a652-40fa3601986e", "companyName": "Avamba", "avatar": "https://robohash.org/utquiconsequuntur.png??size=72x72&set=set1", "url": "https://multiply.com", "openings": 7 },
  { "uid": "eb8c01dd-bf50-4f86-82de-302f3fd7068f", "companyName": "Zoomdog", "avatar": "https://robohash.org/itaquealiastenetur.png??size=72x72&set=set1", "url": "https://wordpress.org", "openings": 2 },
  { "uid": "9c031724-b741-4d1b-a8b4-9431a6ba1e65", "companyName": "Eayo", "avatar": "https://robohash.org/nobisetcorrupti.png??size=72x72&set=set1", "url": "http://themeforest.net", "openings": 10 },
  { "uid": "5fc3108d-1b5f-41cb-9d38-cbdf4055eb3b", "companyName": "Roomm", "avatar": "https://robohash.org/quivitaeadipisci.png??size=72x72&set=set1", "url": "http://sina.com.cn", "openings": 1 },
  { "uid": "1f25294f-26ab-4ff8-8dac-b3a059a6a9bc", "companyName": "Photolist", "avatar": "https://robohash.org/ettemporibusdolorem.png??size=72x72&set=set1", "url": "http://liveinternet.ru", "openings": 2 },
  { "uid": "590f5602-3e88-47ca-8232-6fd86b86813d", "companyName": "Youfeed", "avatar": "https://robohash.org/sedrepellendusnatus.png??size=72x72&set=set1", "url": "http://java.com", "openings": 1 },
  { "uid": "8cda3df6-2fcd-43f7-bbba-0604ebc3d68b", "companyName": "Dabshots", "avatar": "https://robohash.org/estaspernatursequi.png??size=72x72&set=set1", "url": "https://newsvine.com", "openings": 1 },
  { "uid": "d812a2c1-cb52-4346-a031-6108e651c0f1", "companyName": "Skiptube", "avatar": "https://robohash.org/dolorumfacilislabore.png??size=72x72&set=set1", "url": "http://stanford.edu", "openings": 10 },
  { "uid": "cdb3cf21-538d-4262-80d0-c6d41880fb6d", "companyName": "Jaxworks", "avatar": "https://robohash.org/reiciendisblanditiiseveniet.png??size=72x72&set=set1", "url": "https://1und1.de", "openings": 1 },
  { "uid": "28ae71de-b7a4-4633-adf6-082e4f333bde", "companyName": "Yabox", "avatar": "https://robohash.org/illumvoluptatemsaepe.png??size=72x72&set=set1", "url": "http://reverbnation.com", "openings": 9 },
  { "uid": "2b614b74-cbfd-4e79-b110-7175b45bb3a7", "companyName": "Mybuzz", "avatar": "https://robohash.org/ipsumvelitqui.png??size=72x72&set=set1", "url": "http://berkeley.edu", "openings": 9 },
  { "uid": "d4cbcc6e-9a12-46df-a3a2-4c450b472367", "companyName": "Topicstorm", "avatar": "https://robohash.org/dolorrepellatnumquam.png??size=72x72&set=set1", "url": "http://mayoclinic.com", "openings": 3 },
  { "uid": "7a40cab7-38cd-4a63-8bb1-c2ad924f3c1d", "companyName": "Skivee", "avatar": "https://robohash.org/nonidea.png??size=72x72&set=set1", "url": "http://trellian.com", "openings": 4 },
  { "uid": "3bde9e4e-3a82-4ab5-b5dc-52149af5e078", "companyName": "Chatterbridge", "avatar": "https://robohash.org/voluptatesnamnatus.png??size=72x72&set=set1", "url": "http://ustream.tv", "openings": 3 }];

  const feedbacks = [
    {
      uid: 'abc101',
      heading: 'Speechless with how easy this was to integrate',
      body: "I recently got my hands on Flowbite Pro, and holy crap, I'm speechless with how easy this was to integrate within my application. Most templates are a pain, code is scattered, and near impossible to theme.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      uname: "Bonnie Green",
      position: "Developer at Open AI"
    }, {
      uid: 'abc102',
      heading: 'Solid foundation for any project',
      body: "FlowBite provides a robust set of design tokens and components based on the popular Tailwind CSS framework. From the most used UI components like forms and navigation bars to the whole app screens designed both for desktop and mobile, this UI kit provides a solid foundation for any project.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png",
      uname: "Roberta Casas",
      position: "Lead designer at Dropbox"
    }, {
      uid: 'abc103',
      heading: 'Mindblowing workflow and variants',
      body: "As someone who mainly designs in the browser, I've been a casual user of Figma, but as soon as I saw and started playing with FlowBite my mind was 🤯.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      uname: "Jese Leos",
      position: "Software Engineer at Facebook"
    }, {
      uid: 'abc104',
      heading: 'Efficient Collaborating',
      body: "his is a very complex and beautiful set of elements. Under the hood it comes with the best things from 2 different worlds: Figma and Tailwind.",
      avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png",
      uname: "Joseph McFall",
      position: "CTO at Google"
    }
  ];

  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "ReferrFarm",
            "description": "The premier referral-driven job platform connecting professionals with career opportunities",
            "url": "https://referrfarm.com",
            "logo": "https://referrfarm.com/assets/images/logo.png",
            "sameAs": [
              "https://twitter.com/referrfarm",
              "https://linkedin.com/company/referrfarm"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-XXX-XXX-XXXX",
              "contactType": "customer service",
              "availableLanguage": "English"
            },
            "offers": {
              "@type": "Offer",
              "description": "Job referral platform connecting professionals with career opportunities",
              "price": "0",
              "priceCurrency": "USD"
            }
          }),
        }}
      />
      
      <main className="mx-auto max-w-7xl py-6">
        <AppHeader />
        
        {/* Hero Section */}
        <section className="grid max-w-screen-xl py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Job Referrals & <br /> Career Opportunities
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Together, we create <Link href="/about" className="text-blue-600 hover:underline">job referral opportunities</Link>, celebrate success, and cultivate lasting growth. Join today and grow with the only <Link href="/how-it-works" className="text-blue-600 hover:underline">referral-driven platform</Link>.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link 
                role="button" 
                href={'/how-it-works'} 
                className="flex items-center uppercase px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Learn how ReferrFarm works"
              >
                how it works?
              </Link>
              <Link 
                role="button" 
                href={'/schedule-a-call'} 
                className="flex items-center uppercase px-5 py-3 text-gray-900 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Schedule a call with our team"
              >
                schedule a call <Phone size={18} className="ml-2" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image 
              width={600} 
              height={400}
              src={heroImg} 
              alt="ReferrFarm platform showcasing job referral opportunities and professional networking" 
              priority
            />
          </div>
        </section>

        {/* Top Referrers Section */}
        <section className="max-w-screen-xl py-8 lg:py-16 lg:pt-28" aria-labelledby="top-referrers-heading">
          <h2 id="top-referrers-heading" className="mb-2 text-2xl font-extrabold tracking-tight md:text-5xl xl:text-4xl">
            Top Referrers
          </h2>
          <p className="mb-4 text-gray-600">
            Meet our <Link href="/about" className="text-blue-600 hover:underline">referral champions</Link>! These contributors are driving <Link href="/how-it-works" className="text-blue-600 hover:underline">job opportunities</Link> and empowering success.
          </p>
          <ListingCarousel list={topReferrers} />
        </section>

        {/* Companies Seeking Referrals Section */}
        <section className="max-w-screen-xl py-8 lg:py-16 lg:pt-28" aria-labelledby="companies-heading">
          <h2 id="companies-heading" className="mb-2 text-2xl font-extrabold tracking-tight md:text-5xl xl:text-4xl">
            Companies Seeking Referrals
          </h2>
          <p className="mb-4 text-gray-600">
            Discover companies currently open to <Link href="/how-it-works" className="text-blue-600 hover:underline">job referrals</Link>. Tap into <Link href="/schedule-a-call" className="text-blue-600 hover:underline">career opportunities</Link> and take the next step toward your career goals!
          </p>
          <LogoBasedCarousel list={topCompanies} />
        </section>

        {/* Testimonials Section */}
        <section className="bg-white dark:bg-gray-900" aria-labelledby="testimonials-heading">
          <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm">
              <h2 id="testimonials-heading" className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                What Our Community Says
              </h2>
              <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
                Hear from professionals who have found success through our <Link href="/how-it-works" className="text-blue-600 hover:underline">job referral platform</Link>
              </p>
            </div>
            <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
              {
                feedbacks.map(feedback => {
                  return (
                    <article key={feedback.uid} className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                      <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {feedback.heading}
                        </h3>
                        <p className="my-4">{feedback.body}</p>
                      </blockquote>
                      <figcaption className="flex justify-center items-center space-x-3">
                        <img 
                          className="w-9 h-9 rounded-full" 
                          src={feedback.avatar} 
                          alt={`Profile picture of ${feedback.uname}`}
                          loading="lazy"
                        />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                          <div>{feedback.uname}</div>
                          <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                            {feedback.position}
                          </div>
                        </div>
                      </figcaption>
                    </article>
                  )
                })
              }
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
