import Link from "next/link";
import Image from 'next/image';
import logo from '@/public/assets/images/logo.png';

export default function AppHeader() {
    return (
        <div className="flex h-16 items-center justify-between">
            <div>
                <Link href={'/'}>
                    <Image
                        src={logo}
                        width={72}
                        alt="Picture of the author" />

                </Link>
            </div>
            <div>
                <span className="mr-8"><Link href={'/sign-in'} className="text-blue-500 visited:text-blue-900 hover:text-blue-700">Sign In</Link></span>
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Register
                </button>
            </div>
        </div>
    );
}
