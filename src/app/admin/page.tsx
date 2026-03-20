"use client";

import { useState, useEffect, useCallback } from "react";

interface Submission {
  id: string;
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  timeline: string;
  budget: string;
  description: string;
  createdAt: string;
  status: "new" | "contacted" | "quoted" | "won" | "lost";
}

type View = "dashboard" | "submissions";

const PASSWORD = "diaz2024";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-orange-100 text-orange-800",
  quoted: "bg-yellow-100 text-yellow-800",
  won: "bg-green-100 text-green-800",
  lost: "bg-gray-100 text-gray-500",
};

const statusDot: Record<string, string> = {
  new: "bg-blue-500",
  contacted: "bg-orange-500",
  quoted: "bg-yellow-500",
  won: "bg-green-500",
  lost: "bg-gray-400",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatDateShort(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

/* ─── Login Screen ─── */
function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === PASSWORD) {
      sessionStorage.setItem("diaz_admin_auth", "1");
      onLogin();
    } else {
      setError(true);
      setPw("");
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-7 h-7 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-white">Diaz Construction</h1>
          <p className="text-white/40 text-sm mt-1">Admin Dashboard</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
                setError(false);
              }}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-xs mt-2">
                Incorrect password. Try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 bg-accent hover:bg-accent-light text-navy-950 font-semibold text-sm rounded-lg transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({
  label,
  value,
  accent,
  icon,
}: {
  label: string;
  value: number;
  accent?: boolean;
  icon: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
          {label}
        </span>
        <div className="w-9 h-9 rounded-lg bg-slate-light flex items-center justify-center">
          {icon}
        </div>
      </div>
      <p
        className={`text-3xl font-bold ${accent ? "text-accent" : "text-navy-950"}`}
      >
        {value}
      </p>
    </div>
  );
}

/* ─── Bar Chart Placeholder ─── */
function LeadChart() {
  const weeks = [
    { label: "Week 1", height: 40 },
    { label: "Week 2", height: 65 },
    { label: "Week 3", height: 50 },
    { label: "Week 4", height: 80 },
  ];
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-6">
      <h3 className="text-sm font-semibold text-navy-950 mb-1">
        Lead Trend &mdash; Last 30 Days
      </h3>
      <p className="text-xs text-gray-400 mb-6">New submissions per week</p>
      <div className="flex items-end gap-4 h-40">
        {weeks.map((w) => (
          <div key={w.label} className="flex-1 flex flex-col items-center gap-2">
            <div
              className="w-full rounded-t-md bg-accent/80 hover:bg-accent transition-colors"
              style={{ height: `${w.height}%` }}
            />
            <span className="text-[10px] text-gray-400 font-medium">
              {w.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Dashboard View ─── */
function DashboardView({ submissions }: { submissions: Submission[] }) {
  const totalLeads = submissions.length;
  const newLeads = submissions.filter((s) => s.status === "new").length;
  const quoted = submissions.filter((s) => s.status === "quoted").length;
  const won = submissions.filter((s) => s.status === "won").length;
  const recent = submissions.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">
          Overview of your lead pipeline
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          label="Total Leads"
          value={totalLeads}
          icon={
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          }
        />
        <StatCard
          label="New Leads"
          value={newLeads}
          accent
          icon={
            <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
        <StatCard
          label="Quoted"
          value={quoted}
          icon={
            <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          }
        />
        <StatCard
          label="Won"
          value={won}
          icon={
            <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Chart */}
      <LeadChart />

      {/* Recent Submissions */}
      <div className="bg-white rounded-xl border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-navy-950">
            Recent Submissions
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 uppercase tracking-wider">
                <th className="px-6 py-3 font-medium">Name</th>
                <th className="px-6 py-3 font-medium">Service</th>
                <th className="px-6 py-3 font-medium">Budget</th>
                <th className="px-6 py-3 font-medium">Status</th>
                <th className="px-6 py-3 font-medium">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recent.map((sub) => (
                <tr key={sub.id} className="hover:bg-slate-light/50 transition-colors">
                  <td className="px-6 py-3.5 font-medium text-navy-950">
                    {sub.name}
                  </td>
                  <td className="px-6 py-3.5 text-gray-500">
                    {sub.serviceType}
                  </td>
                  <td className="px-6 py-3.5 text-gray-500">{sub.budget}</td>
                  <td className="px-6 py-3.5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[sub.status]}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[sub.status]}`} />
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-gray-400">
                    {formatDateShort(sub.createdAt)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── Submissions View ─── */
function SubmissionsView({
  submissions,
  onStatusChange,
}: {
  submissions: Submission[];
  onStatusChange: (id: string, status: Submission["status"]) => void;
}) {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filtered = submissions.filter((sub) => {
    const matchesSearch =
      search === "" ||
      sub.name.toLowerCase().includes(search.toLowerCase()) ||
      sub.email.toLowerCase().includes(search.toLowerCase()) ||
      sub.serviceType.toLowerCase().includes(search.toLowerCase()) ||
      sub.phone.includes(search);
    const matchesStatus =
      filterStatus === "all" || sub.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Submissions</h1>
        <p className="text-sm text-gray-400 mt-1">
          All form submissions from your website
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, email, phone, or service..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors"
          />
        </div>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white"
        >
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="quoted">Quoted</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">
                  Phone
                </th>
                <th className="px-5 py-3 font-medium hidden lg:table-cell">
                  Email
                </th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium hidden sm:table-cell">
                  Budget
                </th>
                <th className="px-5 py-3 font-medium hidden lg:table-cell">
                  Timeline
                </th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((sub, i) => (
                <>
                  <tr
                    key={sub.id}
                    onClick={() =>
                      setExpandedId(expandedId === sub.id ? null : sub.id)
                    }
                    className={`cursor-pointer transition-colors ${
                      i % 2 === 0 ? "bg-white" : "bg-gray-50/30"
                    } hover:bg-accent/5`}
                  >
                    <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                      {formatDate(sub.createdAt)}
                    </td>
                    <td className="px-5 py-3.5 font-medium text-navy-950 whitespace-nowrap">
                      {sub.name}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden md:table-cell whitespace-nowrap">
                      {sub.phone}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden lg:table-cell">
                      {sub.email}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">
                      {sub.serviceType}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell whitespace-nowrap">
                      {sub.budget}
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden lg:table-cell whitespace-nowrap">
                      {sub.timeline}
                    </td>
                    <td className="px-5 py-3.5">
                      <select
                        value={sub.status}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(e) =>
                          onStatusChange(
                            sub.id,
                            e.target.value as Submission["status"]
                          )
                        }
                        className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 focus:ring-2 focus:ring-accent/40 cursor-pointer ${statusColors[sub.status]}`}
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="won">Won</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                  </tr>
                  {expandedId === sub.id && (
                    <tr key={`${sub.id}-detail`} className="bg-accent/5">
                      <td colSpan={8} className="px-5 py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="md:hidden">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                              Phone
                            </span>
                            <a
                              href={`tel:${sub.phone.replace(/\D/g, "")}`}
                              className="text-accent font-medium"
                            >
                              {sub.phone}
                            </a>
                          </div>
                          <div className="lg:hidden">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                              Email
                            </span>
                            <a
                              href={`mailto:${sub.email}`}
                              className="text-accent font-medium"
                            >
                              {sub.email}
                            </a>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                              Project Description
                            </span>
                            <p className="text-navy-950/70 leading-relaxed">
                              {sub.description || "No description provided."}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="px-5 py-10 text-center text-gray-400"
                  >
                    No submissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Admin Page ─── */
export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [view, setView] = useState<View>("dashboard");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = sessionStorage.getItem("diaz_admin_auth");
      if (stored === "1") setAuthed(true);
    }
  }, []);

  const fetchSubmissions = useCallback(async () => {
    try {
      const res = await fetch("/api/submissions");
      const data = await res.json();
      setSubmissions(data);
    } catch (err) {
      console.error("Failed to fetch submissions:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (authed) fetchSubmissions();
  }, [authed, fetchSubmissions]);

  function handleStatusChange(id: string, status: Submission["status"]) {
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status } : s))
    );
  }

  function handleLogout() {
    sessionStorage.removeItem("diaz_admin_auth");
    setAuthed(false);
  }

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const navItems: { key: View; label: string; icon: React.ReactNode }[] = [
    {
      key: "dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      ),
    },
    {
      key: "submissions",
      label: "Submissions",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-navy-950 shrink-0 hidden md:flex flex-col">
        <div className="px-6 py-5 border-b border-white/5">
          <h2 className="text-white font-bold text-lg">Diaz Construction</h2>
          <p className="text-white/30 text-xs mt-0.5">Admin Panel</p>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setView(item.key)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                view === item.key
                  ? "bg-white/10 text-white"
                  : "text-white/40 hover:text-white/70 hover:bg-white/5"
              }`}
            >
              {item.icon}
              {item.label}
              {item.key === "submissions" && submissions.filter(s => s.status === "new").length > 0 && (
                <span className="ml-auto bg-accent text-navy-950 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {submissions.filter(s => s.status === "new").length}
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-navy-950 border-b border-white/5">
        <div className="flex items-center justify-between px-4 py-3">
          <h2 className="text-white font-bold text-sm">Diaz Admin</h2>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => setView(item.key)}
                className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${
                  view === item.key
                    ? "bg-white/10 text-white"
                    : "text-white/40"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="px-2 py-1.5 text-white/30 hover:text-white/60"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="p-6 md:p-8 lg:p-10 md:pt-8 pt-16 max-w-6xl">
          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : view === "dashboard" ? (
            <DashboardView submissions={submissions} />
          ) : (
            <SubmissionsView
              submissions={submissions}
              onStatusChange={handleStatusChange}
            />
          )}
        </div>
      </main>
    </div>
  );
}
