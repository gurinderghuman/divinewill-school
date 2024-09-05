import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Divine Will Public School</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/pages/about">About</Link></li>
          <li><Link href="/pages/activities">Activities</Link></li>
          <li><Link href="/pages/contact">Contact</Link></li>
          <li><Link href="/pages/facilities">Facilities</Link></li>
          <li><Link href="/pages/schoolRules">School Rules</Link></li>
          <li><Link href="/pages/faculty">Faculty</Link></li>
          <li><Link href="/pages/booksList">Books List</Link></li>
          <li><Link href="/pages/admission">Admission</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;