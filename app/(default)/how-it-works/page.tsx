import VideoIFrame from "@/app/_components/common/video-iframe";
import { AlarmClock } from "lucide-react";
import workflow_1 from '@/public/assets/images/workflow_1.png';
import workflow_2 from '@/public/assets/images/workflow_2.png';
import Image from "next/image";

export default function HowItWorks() {

  const features = [
    {
      name: 'Push to deploy.',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      icon: AlarmClock,
    },
    {
      name: 'SSL certificates.',
      description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
      icon: AlarmClock,
    },
    {
      name: 'Database backups.',
      description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
      icon: AlarmClock,
    },
  ]

  return (
    <div className="flex flex-col py-4 lg:py-4">
      {/* STEPPER STARTS */}
      <div className="w-full">
        <div className="container mx-auto my-16 flex flex-col items-center gap-16">
          <div className="flex flex-col gap-16">
            <div className="flex items-center flex-col gap-2 text-center">
              <h2
                className="mb-2 text-4xl leading-tight text-dark-grey-900 lg:text-6xl"
              >
                How <span className="text-[#5AE3A9]">ReferrFarm</span> works?
              </h2>
              <p className="text-base w-3/4 font-medium leading-7 text-dark-grey-600">
                The farm thrives as farmers continue planting seeds (posting referrals) and harvesters find fertile fields to work on (request referrals and succeed in landing jobs). Together, they create a cycle of abundance and prosperity.
              </p>
            </div>
          </div>
          <div
            className="flex w-full flex-col items-center justify-between gap-y-10 lg:flex-row lg:gap-x-8 lg:gap-y-0 xl:gap-x-10"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500"
              >
                <span className="text-base font-bold leading-7">1</span>
              </div>
              <div className="flex flex-col">
                <h3
                  className="mb-2 text-base font-bold leading-tight text-dark-grey-900"
                >
                  Setup your Account
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#68769F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500"
              >
                <span className="text-base font-bold leading-7">2</span>
              </div>
              <div className="flex flex-col">
                <h3
                  className="mb-2 text-base font-bold leading-tight text-dark-grey-900"
                >
                  Browse referrals or posts
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
            <div className="rotate-90 lg:rotate-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="43"
                height="42"
                viewBox="0 0 43 42"
                fill="none"
              >
                <g clipPath="url(#clip0_3346_6663)">
                  <path
                    d="M16.9242 11.7425C16.2417 12.425 16.2417 13.5275 16.9242 14.21L23.7142 21L16.9242 27.79C16.2417 28.4725 16.2417 29.575 16.9242 30.2575C17.6067 30.94 18.7092 30.94 19.3917 30.2575L27.4242 22.225C28.1067 21.5425 28.1067 20.44 27.4242 19.7575L19.3917 11.725C18.7267 11.06 17.6067 11.06 16.9242 11.7425Z"
                    fill="#68769F"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3346_6663">
                    <rect
                      width="42"
                      height="42"
                      fill="white"
                      transform="translate(0.666748)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="flex items-start gap-4">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-solid border-purple-blue-500 bg-transparent text-purple-blue-500"
              >
                <span className="text-base font-bold leading-7">3</span>
              </div>
              <div className="flex flex-col">
                <h3
                  className="mb-2 text-base font-bold leading-tight text-dark-grey-900"
                >
                  Apply & Connect with peers
                </h3>
                <p className="text-base font-medium leading-7 text-dark-grey-600">
                  Condimentum vit pellemsque habitant morbi at molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* STEPPER ENDS */}

      {/* VIDEO SECTION STARTS */}
      <div className="my-4">
        <div className="max-w-4xl mx-auto rounded-lg">
          <VideoIFrame videoId="KRKLrPA1pqY" aspectRatio="16:9" autoplay={false} />
        </div>
      </div>
      {/* VIDEO SECTION ENDS */}

      {/* BOTTOM SECTION STARTS */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* WORKFLOW 1 STARTS */}
          <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-[#5ae3a9]">Become a hero</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Earn by Referrals
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#5ae3a9]" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <Image
              width={340}
              height={400}
              src={workflow_1}
              alt="hero image"
            />
          </div>
          {/* WORKFLOW 1 ENDS */}

          {/* WORKFLOW 2 STARTS */}
          <div className="mx-auto my-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 items-center">
            <Image
              width={340}
              height={400}
              src={workflow_2}
              alt="hero image"
            />

            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-[#5ae3a9]">Job search</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  Next big opportunity
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                  iste dolor cupiditate blanditiis ratione.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon aria-hidden="true" className="absolute left-1 top-1 size-5 text-[#5ae3a9]" />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
          {/* WORKFLOW 2 ENDS */}
        </div>
      </div>
      {/* BOTTOM SECTION ENDS */}

    </div>
  );
}
