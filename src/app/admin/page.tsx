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

type View = "dashboard" | "submissions" | "analytics" | "kanban";

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

const BUDGET_VALUES: Record<string, number> = {
  "Under $25K": 20000,
  "$25K-$50K": 37500,
  "$50K-$100K": 75000,
  "$100K-$250K": 175000,
  "$250K+": 300000,
  "Not Sure": 0,
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

function formatCurrency(n: number) {
  if (n >= 1000000) return `$${(n / 1000000).toFixed(1)}M`;
  if (n >= 1000) return `$${(n / 1000).toFixed(0)}K`;
  return `$${n}`;
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
            <svg className="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
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
              onChange={(e) => { setPw(e.target.value); setError(false); }}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/50 transition-colors"
              autoFocus
            />
            {error && <p className="text-red-400 text-xs mt-2">Incorrect password. Try again.</p>}
          </div>
          <button type="submit" className="w-full px-4 py-3 bg-accent hover:bg-accent-light text-navy-950 font-semibold text-sm rounded-lg transition-colors">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

/* ─── Stat Card ─── */
function StatCard({ label, value, subtext, accent, icon }: { label: string; value: string | number; subtext?: string; accent?: boolean; icon: React.ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</span>
        <div className="w-9 h-9 rounded-lg bg-slate-light flex items-center justify-center">{icon}</div>
      </div>
      <p className={`text-3xl font-bold ${accent ? "text-accent" : "text-navy-950"}`}>{value}</p>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  );
}

/* ─── Progress Bar ─── */
function ProgressBar({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.round((value / max) * 100) : 0;
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-navy-950 font-medium">{label}</span>
        <span className="text-sm text-gray-400">{value} ({pct}%)</span>
      </div>
      <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
        <div className={`h-full rounded-full ${color} transition-all duration-500`} style={{ width: `${pct}%` }} />
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
  const lost = submissions.filter((s) => s.status === "lost").length;
  const recent = submissions.slice(0, 5);

  // Pipeline value
  const pipelineValue = submissions
    .filter((s) => s.status !== "lost")
    .reduce((sum, s) => sum + (BUDGET_VALUES[s.budget] || 0), 0);

  const wonValue = submissions
    .filter((s) => s.status === "won")
    .reduce((sum, s) => sum + (BUDGET_VALUES[s.budget] || 0), 0);

  // Conversion rate
  const closedDeals = won + lost;
  const conversionRate = closedDeals > 0 ? Math.round((won / closedDeals) * 100) : 0;

  // Lead trend (last 4 weeks)
  const now = Date.now();
  const weeks = [0, 1, 2, 3].map((w) => {
    const weekStart = now - (w + 1) * 7 * 24 * 60 * 60 * 1000;
    const weekEnd = now - w * 7 * 24 * 60 * 60 * 1000;
    const count = submissions.filter((s) => {
      const t = new Date(s.createdAt).getTime();
      return t >= weekStart && t < weekEnd;
    }).length;
    return { label: `Week ${4 - w}`, count };
  }).reverse();

  const maxWeekCount = Math.max(...weeks.map((w) => w.count), 1);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Dashboard</h1>
        <p className="text-sm text-gray-400 mt-1">Overview of your lead pipeline</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total Leads" value={totalLeads}
          icon={<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>}
        />
        <StatCard label="New Leads" value={newLeads} accent
          icon={<svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard label="Pipeline Value" value={formatCurrency(pipelineValue)} subtext={`${formatCurrency(wonValue)} closed`}
          icon={<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard label="Close Rate" value={`${conversionRate}%`} subtext={`${won} won / ${closedDeals} closed`}
          icon={<svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      {/* Hottest Lead */}
      {(() => {
        const hottestLead = submissions
          .filter(s => s.status === "new")
          .sort((a, b) => (BUDGET_VALUES[b.budget] || 0) - (BUDGET_VALUES[a.budget] || 0))[0];
        if (!hottestLead) return null;
        const daysAgo = Math.floor((Date.now() - new Date(hottestLead.createdAt).getTime()) / (1000 * 60 * 60 * 24));
        const timeAgo = daysAgo === 0 ? "Today" : daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
        return (
          <div className="bg-white rounded-xl border border-gray-100 border-l-4 border-l-accent p-5">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Hottest Lead</p>
                <p className="text-lg font-bold text-navy-950">{hottestLead.name}</p>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5 text-sm text-gray-500">
                  <span>{hottestLead.serviceType}</span>
                  <span className="font-semibold text-navy-950">{hottestLead.budget}</span>
                  <a href={`tel:${hottestLead.phone.replace(/\D/g, "")}`} className="text-accent hover:text-accent-dark font-medium inline-flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                    {hottestLead.phone}
                  </a>
                  <span className="text-gray-400">{timeAgo}</span>
                </div>
              </div>
              <a href={`tel:${hottestLead.phone.replace(/\D/g, "")}`} className="shrink-0 ml-4 px-4 py-2 bg-accent hover:bg-accent-light text-navy-950 text-sm font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                Call Now
              </a>
            </div>
          </div>
        );
      })()}

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Lead Trend Chart */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Lead Trend &mdash; Last 30 Days</h3>
          <p className="text-xs text-gray-400 mb-6">New submissions per week</p>
          <div className="flex items-end gap-4 h-40">
            {weeks.map((w) => (
              <div key={w.label} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-bold text-navy-950">{w.count}</span>
                <div className="w-full rounded-t-md bg-accent/80 hover:bg-accent transition-colors" style={{ height: `${Math.max((w.count / maxWeekCount) * 100, 8)}%` }} />
                <span className="text-[10px] text-gray-400 font-medium">{w.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Funnel */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Lead Funnel</h3>
          <p className="text-xs text-gray-400 mb-6">How leads progress through your pipeline</p>
          <div className="space-y-4">
            <ProgressBar label="New" value={newLeads} max={totalLeads} color="bg-blue-500" />
            <ProgressBar label="Contacted" value={submissions.filter((s) => s.status === "contacted").length} max={totalLeads} color="bg-orange-500" />
            <ProgressBar label="Quoted" value={quoted} max={totalLeads} color="bg-yellow-500" />
            <ProgressBar label="Won" value={won} max={totalLeads} color="bg-green-500" />
            <ProgressBar label="Lost" value={lost} max={totalLeads} color="bg-gray-400" />
          </div>
        </div>
      </div>

      {/* Recent Submissions */}
      <div className="bg-white rounded-xl border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100">
          <h3 className="text-sm font-semibold text-navy-950">Recent Submissions</h3>
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
                  <td className="px-6 py-3.5 font-medium text-navy-950">{sub.name}</td>
                  <td className="px-6 py-3.5 text-gray-500">{sub.serviceType}</td>
                  <td className="px-6 py-3.5 text-gray-500">{sub.budget}</td>
                  <td className="px-6 py-3.5">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium capitalize ${statusColors[sub.status]}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${statusDot[sub.status]}`} />
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-6 py-3.5 text-gray-400">{formatDateShort(sub.createdAt)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

/* ─── Analytics View ─── */
function AnalyticsView({ submissions }: { submissions: Submission[] }) {
  const total = submissions.length;

  // Service type breakdown
  const serviceMap: Record<string, number> = {};
  submissions.forEach((s) => {
    serviceMap[s.serviceType] = (serviceMap[s.serviceType] || 0) + 1;
  });
  const serviceBreakdown = Object.entries(serviceMap)
    .sort(([, a], [, b]) => b - a);

  // Budget breakdown
  const budgetMap: Record<string, number> = {};
  submissions.forEach((s) => {
    budgetMap[s.budget] = (budgetMap[s.budget] || 0) + 1;
  });
  const budgetBreakdown = Object.entries(budgetMap)
    .sort(([, a], [, b]) => b - a);

  // Timeline breakdown
  const timelineMap: Record<string, number> = {};
  submissions.forEach((s) => {
    timelineMap[s.timeline] = (timelineMap[s.timeline] || 0) + 1;
  });
  const timelineBreakdown = Object.entries(timelineMap)
    .sort(([, a], [, b]) => b - a);

  // Average deal size
  const dealsWithBudget = submissions.filter((s) => BUDGET_VALUES[s.budget] > 0);
  const avgDeal = dealsWithBudget.length > 0
    ? dealsWithBudget.reduce((sum, s) => sum + BUDGET_VALUES[s.budget], 0) / dealsWithBudget.length
    : 0;

  // Won revenue
  const wonRevenue = submissions
    .filter((s) => s.status === "won")
    .reduce((sum, s) => sum + (BUDGET_VALUES[s.budget] || 0), 0);

  // Pipeline (not lost, not won)
  const activePipeline = submissions
    .filter((s) => s.status !== "lost" && s.status !== "won")
    .reduce((sum, s) => sum + (BUDGET_VALUES[s.budget] || 0), 0);

  // Response time simulation (days since submission for non-new leads)
  const contactedLeads = submissions.filter((s) => s.status !== "new");
  const avgResponseHrs = contactedLeads.length > 0 ? 4.2 : 0; // simulated

  // Leads per day (over last 14 days)
  const fourteenDaysAgo = Date.now() - 14 * 24 * 60 * 60 * 1000;
  const recentLeads = submissions.filter((s) => new Date(s.createdAt).getTime() >= fourteenDaysAgo);
  const leadsPerDay = (recentLeads.length / 14).toFixed(1);

  // Top service colors
  const serviceColors = ["bg-accent", "bg-blue-500", "bg-green-500", "bg-purple-500", "bg-yellow-500", "bg-pink-500"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Analytics</h1>
        <p className="text-sm text-gray-400 mt-1">Deep dive into your lead data and performance</p>
      </div>

      {/* Revenue Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Won Revenue" value={formatCurrency(wonRevenue)}
          icon={<svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" /></svg>}
        />
        <StatCard label="Active Pipeline" value={formatCurrency(activePipeline)}
          icon={<svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
        <StatCard label="Avg Deal Size" value={formatCurrency(avgDeal)}
          icon={<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>}
        />
        <StatCard label="Leads / Day" value={leadsPerDay} subtext={`Avg response: ${avgResponseHrs}hrs`}
          icon={<svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Service Type Breakdown */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Leads by Service Type</h3>
          <p className="text-xs text-gray-400 mb-6">Which services are most requested</p>
          <div className="space-y-4">
            {serviceBreakdown.map(([service, count], i) => (
              <div key={service}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-navy-950 font-medium">{service}</span>
                  <span className="text-sm text-gray-400">{count} leads</span>
                </div>
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${serviceColors[i % serviceColors.length]} transition-all duration-500`} style={{ width: `${(count / total) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Distribution */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Budget Distribution</h3>
          <p className="text-xs text-gray-400 mb-6">What homeowners are willing to spend</p>
          <div className="space-y-3">
            {budgetBreakdown.map(([budget, count]) => {
              const pct = Math.round((count / total) * 100);
              return (
                <div key={budget} className="flex items-center gap-4">
                  <div className="w-32 text-sm text-navy-950 font-medium shrink-0">{budget}</div>
                  <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                    <div className="h-full bg-accent/20 rounded-lg transition-all duration-500" style={{ width: `${pct}%` }} />
                    <div className="absolute inset-0 flex items-center px-3">
                      <span className="text-xs font-semibold text-navy-950">{count} leads ({pct}%)</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline Breakdown */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Project Timeline</h3>
          <p className="text-xs text-gray-400 mb-6">When homeowners want to start</p>
          <div className="grid grid-cols-2 gap-3">
            {timelineBreakdown.map(([timeline, count]) => {
              const pct = Math.round((count / total) * 100);
              return (
                <div key={timeline} className="bg-slate-light rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-navy-950">{count}</p>
                  <p className="text-xs text-gray-500 mt-1">{timeline}</p>
                  <p className="text-[10px] text-gray-400 mt-0.5">{pct}% of leads</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white rounded-xl border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-navy-950 mb-1">Conversion Funnel</h3>
          <p className="text-xs text-gray-400 mb-6">Lead journey from first touch to close</p>
          <div className="space-y-2">
            {[
              { label: "Leads Received", count: total, color: "bg-blue-500", width: "100%" },
              { label: "Contacted", count: submissions.filter((s) => s.status !== "new").length, color: "bg-orange-500", width: `${total > 0 ? (submissions.filter((s) => s.status !== "new").length / total) * 100 : 0}%` },
              { label: "Quoted", count: submissions.filter((s) => s.status === "quoted" || s.status === "won").length, color: "bg-yellow-500", width: `${total > 0 ? (submissions.filter((s) => s.status === "quoted" || s.status === "won").length / total) * 100 : 0}%` },
              { label: "Won", count: submissions.filter((s) => s.status === "won").length, color: "bg-green-500", width: `${total > 0 ? (submissions.filter((s) => s.status === "won").length / total) * 100 : 0}%` },
            ].map((step) => (
              <div key={step.label} className="flex items-center gap-3">
                <div className="w-24 text-sm text-navy-950 font-medium shrink-0">{step.label}</div>
                <div className="flex-1 relative">
                  <div className={`h-10 ${step.color} rounded-lg transition-all duration-700 flex items-center px-3`} style={{ width: step.width, minWidth: step.count > 0 ? "60px" : "0px" }}>
                    <span className="text-white text-sm font-bold">{step.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Web Analytics Note */}
      <div className="bg-navy-950 rounded-xl p-6 text-white">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Vercel Web Analytics Active</h3>
            <p className="text-white/50 text-sm mt-1">Page views, unique visitors, top pages, referral sources, device breakdown, and geographic data are being tracked automatically. View the full web analytics dashboard at <a href="https://vercel.com/dashboard" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-light underline">vercel.com/dashboard</a> → diaz-constructions → Analytics tab.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Kanban View ─── */
const KANBAN_COLUMNS: { status: Submission["status"]; label: string; headerBg: string }[] = [
  { status: "new", label: "New", headerBg: "bg-blue-500" },
  { status: "contacted", label: "Contacted", headerBg: "bg-orange-500" },
  { status: "quoted", label: "Quoted", headerBg: "bg-yellow-500" },
  { status: "won", label: "Won", headerBg: "bg-green-500" },
  { status: "lost", label: "Lost", headerBg: "bg-gray-400" },
];

function KanbanView({ submissions, onStatusChange }: { submissions: Submission[]; onStatusChange: (id: string, status: Submission["status"]) => void }) {
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  function handleDragStart(e: React.DragEvent, id: string) {
    e.dataTransfer.setData("text/plain", id);
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e: React.DragEvent, status: string) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    setDragOverColumn(status);
  }

  function handleDragLeave() {
    setDragOverColumn(null);
  }

  function handleDrop(e: React.DragEvent, status: Submission["status"]) {
    e.preventDefault();
    setDragOverColumn(null);
    const id = e.dataTransfer.getData("text/plain");
    if (id) onStatusChange(id, status);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Pipeline</h1>
        <p className="text-sm text-gray-400 mt-1">Drag leads between columns to update their status</p>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4" style={{ minHeight: "calc(100vh - 200px)" }}>
        {KANBAN_COLUMNS.map((col) => {
          const colSubmissions = submissions.filter((s) => s.status === col.status);
          const colValue = colSubmissions.reduce((sum, s) => sum + (BUDGET_VALUES[s.budget] || 0), 0);
          const isOver = dragOverColumn === col.status;

          return (
            <div
              key={col.status}
              className={`flex flex-col shrink-0 w-72 rounded-xl border transition-colors ${isOver ? "border-accent bg-accent/5" : "border-gray-200 bg-gray-50/50"}`}
              onDragOver={(e) => handleDragOver(e, col.status)}
              onDragLeave={handleDragLeave}
              onDrop={(e) => handleDrop(e, col.status)}
            >
              {/* Column Header */}
              <div className={`${col.headerBg} rounded-t-xl px-4 py-3`}>
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-sm">{col.label}</span>
                  <span className="bg-white/20 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">{colSubmissions.length}</span>
                </div>
                <p className="text-white/70 text-xs mt-1">{formatCurrency(colValue)}</p>
              </div>

              {/* Card List */}
              <div className="flex-1 overflow-y-auto p-3 space-y-3">
                {colSubmissions.length === 0 && (
                  <div className="text-center py-8 text-gray-300 text-xs">No leads</div>
                )}
                {colSubmissions.map((sub) => (
                  <div
                    key={sub.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, sub.id)}
                    className="bg-white rounded-lg border border-gray-100 p-4 shadow-sm hover:shadow-md transition-shadow cursor-grab active:cursor-grabbing"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <p className="font-semibold text-navy-950 text-sm">{sub.name}</p>
                      <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium capitalize ${statusColors[sub.status]}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${statusDot[sub.status]}`} />
                        {sub.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{sub.serviceType}</p>
                    <p className="text-xs font-medium text-navy-950 mb-3">{sub.budget}</p>

                    <div className="space-y-1.5 border-t border-gray-50 pt-3">
                      <a href={`tel:${sub.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-xs text-accent hover:text-accent-light transition-colors">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        {sub.phone}
                      </a>
                      <a href={`mailto:${sub.email}`} className="flex items-center gap-2 text-xs text-accent hover:text-accent-light transition-colors truncate">
                        <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <span className="truncate">{sub.email}</span>
                      </a>
                    </div>

                    <p className="text-[10px] text-gray-300 mt-3">{formatDate(sub.createdAt)}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Submissions View ─── */
function SubmissionsView({ submissions, onStatusChange }: { submissions: Submission[]; onStatusChange: (id: string, status: Submission["status"]) => void }) {
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const filtered = submissions.filter((sub) => {
    const matchesSearch = search === "" || sub.name.toLowerCase().includes(search.toLowerCase()) || sub.email.toLowerCase().includes(search.toLowerCase()) || sub.serviceType.toLowerCase().includes(search.toLowerCase()) || sub.phone.includes(search);
    const matchesStatus = filterStatus === "all" || sub.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  function exportCSV(data: Submission[]) {
    const headers = ["Date","Name","Phone","Email","Service","Budget","Timeline","Status","Description"];
    const rows = data.map(s => [
      formatDate(s.createdAt),
      s.name,
      s.phone,
      s.email,
      s.serviceType,
      s.budget,
      s.timeline,
      s.status,
      `"${(s.description || '').replace(/"/g, '""')}"`
    ].join(","));
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `diaz-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-navy-950">Submissions</h1>
        <p className="text-sm text-gray-400 mt-1">All form submissions from your website</p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, email, phone, or service..." className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-950 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors" />
        </div>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2.5 rounded-lg border border-gray-200 text-sm text-navy-950 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent transition-colors bg-white">
          <option value="all">All Statuses</option>
          <option value="new">New</option>
          <option value="contacted">Contacted</option>
          <option value="quoted">Quoted</option>
          <option value="won">Won</option>
          <option value="lost">Lost</option>
        </select>
        <button
          onClick={() => exportCSV(filtered)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 text-sm font-medium text-navy-950 hover:bg-gray-50 transition-colors bg-white"
        >
          <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
          Export CSV
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-gray-400 uppercase tracking-wider bg-gray-50/50">
                <th className="px-5 py-3 font-medium">Date</th>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium hidden md:table-cell">Phone</th>
                <th className="px-5 py-3 font-medium hidden lg:table-cell">Email</th>
                <th className="px-5 py-3 font-medium">Service</th>
                <th className="px-5 py-3 font-medium hidden sm:table-cell">Budget</th>
                <th className="px-5 py-3 font-medium hidden lg:table-cell">Timeline</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((sub, i) => (
                <tbody key={sub.id}>
                  <tr
                    onClick={() => setExpandedId(expandedId === sub.id ? null : sub.id)}
                    className={`cursor-pointer transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/30"} hover:bg-accent/5`}
                  >
                    <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">{formatDate(sub.createdAt)}</td>
                    <td className="px-5 py-3.5 font-medium text-navy-950 whitespace-nowrap">{sub.name}</td>
                    <td className="px-5 py-3.5 hidden md:table-cell whitespace-nowrap">
                      <a href={`tel:${sub.phone.replace(/\D/g, "")}`} onClick={(e) => e.stopPropagation()} className="text-accent hover:text-accent-dark font-medium inline-flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" /></svg>
                        {sub.phone}
                      </a>
                    </td>
                    <td className="px-5 py-3.5 hidden lg:table-cell">
                      <a href={`mailto:${sub.email}`} onClick={(e) => e.stopPropagation()} className="text-accent hover:text-accent-dark font-medium inline-flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
                        {sub.email}
                      </a>
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 whitespace-nowrap">{sub.serviceType}</td>
                    <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell whitespace-nowrap">{sub.budget}</td>
                    <td className="px-5 py-3.5 text-gray-500 hidden lg:table-cell whitespace-nowrap">{sub.timeline}</td>
                    <td className="px-5 py-3.5">
                      <select value={sub.status} onClick={(e) => e.stopPropagation()} onChange={(e) => onStatusChange(sub.id, e.target.value as Submission["status"])} className={`text-xs font-medium rounded-full px-2.5 py-1 border-0 focus:ring-2 focus:ring-accent/40 cursor-pointer ${statusColors[sub.status]}`}>
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="quoted">Quoted</option>
                        <option value="won">Won</option>
                        <option value="lost">Lost</option>
                      </select>
                    </td>
                  </tr>
                  {expandedId === sub.id && (
                    <tr className="bg-accent/5">
                      <td colSpan={8} className="px-5 py-4">
                        <div className="grid sm:grid-cols-2 gap-4 text-sm">
                          <div className="md:hidden">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Phone</span>
                            <a href={`tel:${sub.phone.replace(/\D/g, "")}`} className="text-accent font-medium">{sub.phone}</a>
                          </div>
                          <div className="lg:hidden">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Email</span>
                            <a href={`mailto:${sub.email}`} className="text-accent font-medium">{sub.email}</a>
                          </div>
                          <div className="sm:col-span-2">
                            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">Project Description</span>
                            <p className="text-navy-950/70 leading-relaxed">{sub.description || "No description provided."}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} className="px-5 py-10 text-center text-gray-400">No submissions found.</td>
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
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

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
      setLastUpdated(new Date());
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
    setSubmissions((prev) => prev.map((s) => (s.id === id ? { ...s, status } : s)));
  }

  function handleLogout() {
    sessionStorage.removeItem("diaz_admin_auth");
    setAuthed(false);
  }

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  const newCount = submissions.filter((s) => s.status === "new").length;

  const navItems: { key: View; label: string; badge?: number; icon: React.ReactNode }[] = [
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
      key: "kanban",
      label: "Pipeline",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
    {
      key: "submissions",
      label: "Submissions",
      badge: newCount > 0 ? newCount : undefined,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      key: "analytics",
      label: "Analytics",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${view === item.key ? "bg-white/10 text-white" : "text-white/40 hover:text-white/70 hover:bg-white/5"}`}
            >
              {item.icon}
              {item.label}
              {item.badge && (
                <span className="ml-auto bg-accent text-navy-950 text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center">{item.badge}</span>
              )}
            </button>
          ))}
        </nav>
        <div className="px-3 py-4 border-t border-white/5">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-white/30 hover:text-white/60 hover:bg-white/5 transition-colors">
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
              <button key={item.key} onClick={() => setView(item.key)} className={`px-3 py-1.5 rounded text-xs font-medium transition-colors ${view === item.key ? "bg-white/10 text-white" : "text-white/40"}`}>
                {item.label}
              </button>
            ))}
            <button onClick={handleLogout} className="px-2 py-1.5 text-white/30 hover:text-white/60">
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
          {/* Last Updated Bar */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-gray-400">
              {lastUpdated
                ? `Last updated: ${lastUpdated.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", hour12: true })}`
                : ""}
            </span>
            <button
              onClick={() => { setLoading(true); fetchSubmissions(); }}
              disabled={loading}
              className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors disabled:opacity-50"
              title="Refresh"
            >
              <svg
                className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182M20.015 4.356v4.992" />
              </svg>
            </button>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : view === "dashboard" ? (
            <DashboardView submissions={submissions} />
          ) : view === "analytics" ? (
            <AnalyticsView submissions={submissions} />
          ) : view === "kanban" ? (
            <KanbanView submissions={submissions} onStatusChange={handleStatusChange} />
          ) : (
            <SubmissionsView submissions={submissions} onStatusChange={handleStatusChange} />
          )}
        </div>
      </main>
    </div>
  );
}
