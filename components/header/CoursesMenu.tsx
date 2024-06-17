import Link from 'next/link';

function CoursesMenu() {
    return (
      <div className="absolute top-full flex mt-4 w-80 -left-5 bg-white rounded-2xl p-8 z-10 invisible group-hover:visible">
        <ul className="space-y-2 justify-center items-center">
          <li>
            <Link href="#" className="block text-[#565564]">UX Diploma</Link>
            <p className="font-normal text-xs">Learn UX design from scratch in 6 months</p>
          </li>
          <li>
            <Link href="#" className="block text-[#565564]">UI Certificate</Link>
            <p className="font-normal text-xs">12-week UI skill building for designers</p>
          </li>
        <hr style={{ marginTop: '1rem', marginBottom: '1rem' }} />
        <li>
            <Link href="#" className="block text-[#565564]">Live interactive workshops</Link>
            <p className="font-normal text-xs">with design professionals</p>
          </li>
        </ul>
      </div>
    );
  }

export default CoursesMenu