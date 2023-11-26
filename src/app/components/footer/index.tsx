import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full items-center gap-16 border-b border-gray-300 bg-gradient-to-b from-zinc-200 py-12 font-mono text-sm backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:border lg:bg-gray-200 lg:dark:bg-zinc-800/30">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-3 min-[1280px]:px-[70px]">
        <div>
          <h1 className="font-semibold">Lingo</h1>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Info</h3>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Support</Link>
          <Link href={"/"}>Privacy policy</Link>
          <Link href={"/"}>Terms</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold">Author</h3>
          <Link href={"/"}>About me</Link>
          <Link href={"/"}>Github</Link>
        </div>
      </div>
    </footer>
  );
};
