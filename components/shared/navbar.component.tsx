import { DevNotesIcon } from "#/public/icons";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky left-0 top-0 flex h-[88px] w-full items-center justify-between bg-black bg-opacity-10 px-6 py-6 backdrop-blur-[10px]">
      <figure className="flex items-center gap-x-4">
        <Image src="/logo.svg" alt="wall marketplace" width={48} height={48} />
        <h1 className="pt-2 text-3xl font-bold text-seasalt">WALLeth</h1>
      </figure>

      <div className="flex items-center gap-x-12">
        <div className="flex items-center gap-x-12 text-seasalt">
          {Array(2)
            .fill(null)
            .map((i) => (
              <Link key={i + Math.random()} href="/" className="text-xl">
                dummy
              </Link>
            ))}
        </div>

        <button>
          <span className="flex h-8 w-8 text-seasalt">
            <DevNotesIcon />
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
