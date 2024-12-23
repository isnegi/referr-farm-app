import Link from "next/link";

export default function AppHeader() {
    return (
        <div className="flex h-16 items-center justify-between">
            <div>
                <span><Link href={'/'}>Home</Link></span>
            </div>
            <div>
                {/* <span><Link href={'/about'}>About</Link></span>
                &nbsp;|&nbsp;
                <span><Link href={'/contact-us'}>Contact Us</Link></span>
                &nbsp;|&nbsp; */}
                <span className="mr-8"><Link href={'/sign-in'} className="text-blue-500 visited:text-blue-900 hover:text-blue-700">Sign In</Link></span>
                <button
                    type="button"
                    className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {/* <CheckIcon aria-hidden="true" className="-ml-0.5 mr-1.5 size-5" /> */}
                    Register
                </button>
                {/* <button className="bg-sky-500 hover:bg-sky-700">
                    Save changes
                </button> */}
            </div>
        </div>
    );
}
