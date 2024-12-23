import Link from "next/link";

export default function AppHeader() {
    return (
        <div>
            <span><Link href={'/'}>Home</Link></span>
            &nbsp;|&nbsp;
            <span><Link href={'/about'}>About</Link></span>
            &nbsp;|&nbsp;
            <span><Link href={'/contact-us'}>Contact Us</Link></span>
            &nbsp;|&nbsp;
            <span><Link href={'/sign-in'}>Sign In</Link></span>
            &nbsp;|&nbsp;
            <span><Link href={'/dashboard'}>Dashboard</Link></span>
        </div>
    );
}
