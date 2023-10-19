import Link from "next/link";

const Navbar = () => {
  return (
    <div className="px-4 md:px-32 pt-8">
      <div className="flex items-center justify-between">
        <div className="text-white text-shadow-2xl text-bold text-4xl md:text-5xl font-mono font-bold">
          <Link href="/">
            beaw.bio
            </Link>
        </div>

        <div className="hidden md:flex justify-end content-center">
          <div className="bg-white text-black w-48 rounded-full text-center h-12 hover:bg-gray-300 hover:scale-110 transition duration-300">
            <Link
            href="http://github.com/beawkiattisak"
            >
              <button className="flex items-center justify-center h-full w-full">
                <p className="text-lg font-semibold">GitHub</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
