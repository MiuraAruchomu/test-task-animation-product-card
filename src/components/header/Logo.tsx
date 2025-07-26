import Link from 'next/link';

export default function HeaderLogo() {
  return (
    <Link href={'/'}>
      <h1 className='uppercase text-neutral-900 text-4xl 2xl:text-6xl select-none'>
        spirit.store
      </h1>
    </Link>
  );
}
