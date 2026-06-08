import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link href="/" className="inline-block">
      <Image
        src="/Logo.png"
        alt="Logo"
        width={96}
        height={48}
        className="w-24 h-12 lg:w-32 lg:h-16"
        priority
      />
    </Link>
  );
};
