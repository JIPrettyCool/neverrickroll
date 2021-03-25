import Link from 'next/link';

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-500 hover:text-gray-600 transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer className="flex flex-col text-center items-start max-w-2xl mx-auto w-full">
      <hr className="w-full border-1 border-gray-700 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-5">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Home</a>
          </Link>
        </div>
        <div className="flex flex-col space-y-5">
          <ExternalLink href="https://github.com/">GitHub</ExternalLink>
        </div>
        <div className="flex flex-col space-y-5">
          <Link href="/">
            <a className="text-gray-500 hover:text-gray-600 transition">Contribute</a>
          </Link>
        </div>
      </div>
    </footer>
  );
}