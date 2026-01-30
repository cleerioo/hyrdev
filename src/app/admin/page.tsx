import Link from 'next/link';
import { clsx } from 'clsx';

// Mock data for now since we don't have a DB connection yet
const TEST_INQUIRIES = [
    { id: 1, name: 'Alice Johnson', email: 'alice@example.com', service: 'website', message: 'I need a new website for my bakery.', date: '2023-10-27' },
    { id: 2, name: 'Bob Smith', email: 'bob@tech.com', service: 'ecommerce', message: 'Looking for a Shopify alternative.', date: '2023-10-26' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@consulting.com', service: 'redesign', message: 'My current site is too slow.', date: '2023-10-25' },
];

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        Admin Dashboard
                    </h1>
                    <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                        ← Back to Site
                    </Link>
                </div>

                <div className="bg-slate-900/50 border border-slate-800 rounded-xl overflow-hidden backdrop-blur-sm">
                    <div className="p-6 border-b border-slate-800">
                        <h2 className="text-xl font-semibold">Recent Inquiries</h2>
                        <p className="text-slate-400 text-sm mt-1">
                            (Showing mock data - Database not connected yet)
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-slate-900 text-slate-400 uppercase text-xs font-medium">
                                <tr>
                                    <th className="px-6 py-4">Date</th>
                                    <th className="px-6 py-4">Name</th>
                                    <th className="px-6 py-4">Service</th>
                                    <th className="px-6 py-4">Message</th>
                                    <th className="px-6 py-4">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {TEST_INQUIRIES.map((inquiry) => (
                                    <tr key={inquiry.id} className="hover:bg-slate-800/50 transition-colors">
                                        <td className="px-6 py-4 text-slate-400 whitespace-nowrap">{inquiry.date}</td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-white">{inquiry.name}</div>
                                            <div className="text-sm text-slate-500">{inquiry.email}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={clsx(
                                                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
                                                inquiry.service === 'website' && "bg-blue-900/50 text-blue-400",
                                                inquiry.service === 'ecommerce' && "bg-purple-900/50 text-purple-400",
                                                inquiry.service === 'redesign' && "bg-emerald-900/50 text-emerald-400",
                                            )}>
                                                {inquiry.service}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-slate-300 max-w-md truncate">
                                            {inquiry.message}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-red-400 hover:text-red-300 text-sm font-medium">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
