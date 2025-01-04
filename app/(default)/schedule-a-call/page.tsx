import Image from "next/image";
import ScheduleACallForm from "./components/form";
import mainAsset from '@/public/assets/images/schedule-a-call.png';

export default function ScheduleACall() {

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-2 xl:grid-cols-4">
        <div className="col-span-2">
          <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Schedule a call
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the
            best results for our clients.
          </p>
          <div className="my-16">
            <Image
              width={362}
              height={136}
              alt="Schedule a call"
              src={mainAsset}
            />
          </div>
        </div>
        <div className="col-span-2">
          <ScheduleACallForm />
        </div>
      </div>
    </div>
  );
}
