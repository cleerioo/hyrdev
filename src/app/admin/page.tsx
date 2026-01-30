import Link from 'next/link';
import { clsx } from 'clsx';
import { sql } from '@vercel/postgres';

// Ensure the page is never cached so we always see new entries
export const dynamic = 'force-dynamic';

async function getInquiries() {
    const { rows } = await sql`SELECT * FROM inquiries ORDER BY date DESC`;
    return rows;
}

export default async function AdminDashboard() {
    const inquiries = await getInquiries();

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
                            (Live Data from Vercel Postgres)
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
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {inquiries.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-8 text-center text-slate-500">
                                            No inquiries yet.
                                        </td>
                                    </tr>
                                ) : (
                                    inquiries.map((inquiry) => (
                                        <tr key={inquiry.id} className="hover:bg-slate-800/50 transition-colors">
                                            <td className="px-6 py-4 text-slate-400 whitespace-nowrap">
                                                {new Date(inquiry.date).toLocaleDateString()}
                                            </td>
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
                                                    inquiry.service === 'other' && "bg-slate-700 text-slate-300",
                                                )}>
                                                    {inquiry.service}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-slate-300 max-w-md truncate">
                                                {inquiry.message}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
