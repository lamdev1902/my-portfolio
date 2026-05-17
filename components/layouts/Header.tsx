import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center px-6 py-4 max-w-[1200px] mx-auto px-6">
      <Link href="/">
        <h1 className="font-special text-[56px] leading-none">
          L
        </h1>
      </Link>
    </header>
  );
}