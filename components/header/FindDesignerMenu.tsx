import Link from 'next/link';

function FindDesignerMenu() {
    return (
      <div className="absolute top-full flex mt-4 w-64 h-36 -left-5 bg-white rounded-2xl p-8 z-10 invisible group-hover:visible transition-opacity duration-1000 ease-in-out">
        <ul className="space-y-2 justify-center items-center">
          <li>
            <Link href="/designer-search" className="block text-[#565564]">Designer search</Link>
            <p className="font-normal text-xs">Quickly find your next designer</p>
          </li>
          <li>
            <Link href="/post-job" className="block text-[#565564]">Post a job</Link>
            <p className="font-normal text-xs">The #1 job board for design talent</p>
          </li>
        </ul>
      </div>
    );
  }

export default FindDesignerMenu