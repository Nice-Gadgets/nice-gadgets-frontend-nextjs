import Image from 'next/image';
import Link from 'next/link';

export const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-block transition-transform duration-300 hover:scale-110"
    >
      <Image
        src="/Logo.png"
        alt="Logo"
        width={64}
        height={22}
        className="w-16 h-5.5 lg:w-20 lg:h-7"
        priority
      />
    </Link>
  );
};
