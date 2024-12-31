import VideoIFrame from "@/app/_components/common/video-iframe";

export default function HowItWorks() {
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
          <VideoIFrame videoId="QC8iQqtG0hg" aspectRatio="16:9" autoplay={false} />
        </div>
      </div>
      {/* VIDEO SECTION ENDS */}
    </div>
  );
}
