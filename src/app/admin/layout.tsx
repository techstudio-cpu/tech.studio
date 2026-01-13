import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white">
        <div className="p-4">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>
        <nav>
          <ul>
            <li>
              <Link href="/admin/services" className="block p-4 hover:bg-gray-700">
                Services
              </Link>
            </li>
            <li>
              <Link href="/admin/templates" className="block p-4 hover:bg-gray-700">
                Templates
              </Link>
            </li>
            <li>
              <Link href="/admin/quotes" className="block p-4 hover:bg-gray-700">
                Quotes
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
