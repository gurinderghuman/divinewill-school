import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li><Link href="/" className="block hover:bg-gray-700 p-2 rounded">Home</Link></li>
          <li><Link href="/pages/about" className="block hover:bg-gray-700 p-2 rounded">About</Link></li>
          <li><Link href="/pages/admission" className="block hover:bg-gray-700 p-2 rounded">Admission</Link></li>
          <li><Link href="/pages/faculty" className="block hover:bg-gray-700 p-2 rounded">Faculty</Link></li>
          <li><Link href="/pages/activities" className="block hover:bg-gray-700 p-2 rounded">Activities</Link></li>
          <li><Link href="/facilities" className="block hover:bg-gray-700 p-2 rounded">Facilities</Link></li>
          <li><Link href="/pages/schoolRules" className="block hover:bg-gray-700 p-2 rounded">School Rules</Link></li>
          <li><Link href="/pages/booksList" className="block hover:bg-gray-700 p-2 rounded">Books List</Link></li>
          <li><Link href="/pages/contact" className="block hover:bg-gray-700 p-2 rounded">Contact</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;