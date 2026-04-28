import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Activity, Sparkles, Search, Filter, FileText, ArrowUpRight, 
  Zap, ArrowRight, Info, MoreVertical, ChevronRight, ShoppingBag, Plus
} from 'lucide-react';
import { 
  ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';
import { motion } from 'framer-motion';

function RevenueCard({ stats }: { stats: any }) {
  const { t } = useTranslation();
  const revenue = stats?.totalRevenue || 0;
  const chartData = [
    { name: 'Jan', value: 4000 },
    { name: 'Feb', value: 3000 },
    { name: 'Mar', value: 5000 },
    { name: 'Apr', value: 2780 },
    { name: 'May', value: 1890 },
    { name: 'Jun', value: 2390 },
    { name: 'Jul', value: 3490 },
  ];

  return (
    <div className="hynex-card p-10 h-full flex flex-col justify-between min-h-[450px] group">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <p className="tech-label mb-4">{t('admin_total_revenue', 'Total Revenue')}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl tech-value text-[var(--text-muted)]">MAD</span>
            <h2 className="text-5xl tech-header text-[var(--text)] font-mono">{revenue.toLocaleString()}</h2>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex flex-col">
              <span className="text-[8px] tech-label opacity-50">{t('admin_yearly_avg', 'Yearly Average')}</span>
              <span className="text-xs tech-value">MAD {(revenue / 12).toFixed(2)}</span>
            </div>
            <div className="h-8 w-px bg-[var(--border)]" />
            <div className="flex items-center gap-2 text-[var(--accent)] cursor-pointer hover:opacity-80 transition-opacity">
              <Info size={14} />
              <span className="tech-label text-[var(--accent)]">{t('admin_details', 'Details')}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="tech-label mb-2">{t('admin_vs_last_year', 'Vs Last Year')}</p>
          <p className="text-[var(--accent)] tech-value text-2xl">+12.4%</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col mt-10">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-[var(--accent)] tech-header text-sm">{t('admin_ai_insights', 'AI Insights')}</h3>
            <p className="tech-label">{t('admin_analyzing_trends', 'Analyzing market trends...')}</p>
          </div>
          <Sparkles size={16} className="text-[var(--accent)] animate-pulse" />
        </div>
        
        <div className="relative w-full h-40">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--accent)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="var(--accent)" 
                strokeWidth={3} 
                fillOpacity={1} 
                fill="url(#colorRev)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-full h-full bg-[var(--accent)] rounded-full absolute top-0 left-0 blur-[80px] -z-10"
          />
        </div>
      </div>
    </div>
  );
}

function MetricsCard({ stats }: { stats: any }) {
  const { t } = useTranslation();
  
  return (
    <div className="hynex-card p-10 h-full min-h-[450px] flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h3 className="tech-label">{t('admin_platform_metrics', 'Platform Metrics')}</h3>
        <button className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"><MoreVertical size={20} /></button>
      </div>

      <div className="space-y-10 flex-1 flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-5xl tech-header text-[var(--text)] font-mono">{stats?.totalBookings || 0}</h2>
            <p className="tech-label">{t('admin_total_bookings', 'Total Bookings')}</p>
            <p className="tech-label mt-4 max-w-[180px] leading-relaxed opacity-70">{t('admin_ai_powered_insights', 'AI-powered artisan performance insights')}</p>
          </div>
          <div className="w-24 h-24 rounded-[32px] border border-[var(--border)] bg-[var(--glass-bg)] flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[var(--accent)]/5 group-hover:bg-[var(--accent)]/10 transition-colors" />
            <span className="text-2xl tech-value text-[var(--accent)] relative z-10">18%</span>
            <span className="tech-label relative z-10 opacity-50">{t('admin_growth', 'Growth')}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[var(--glass-bg)] rounded-[24px] p-6 border border-[var(--glass-border)] hover:border-[var(--accent)]/30 transition-colors">
            <h4 className="text-3xl tech-header text-[var(--text)] font-mono">$265</h4>
            <p className="tech-label">{t('admin_avg_order', 'Avg Order')}</p>
          </div>
          <div className="bg-[var(--glass-bg)] rounded-[24px] p-6 border border-[var(--glass-border)] relative group hover:border-[var(--accent)]/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-3xl tech-header text-[var(--text)] font-mono">8k</h4>
                <p className="tech-label">{t('admin_active_users', 'Active Users')}</p>
              </div>
              <span className="tech-value text-[var(--accent)]">24%</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4">
          <div className="flex items-center -space-x-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-10 h-10 rounded-xl border-2 border-[var(--bg)] overflow-hidden shadow-lg">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-xl border-2 border-[var(--bg)] bg-[var(--glass-bg)] flex items-center justify-center text-[var(--text-muted)] text-[10px] font-black shadow-lg">
              +12
            </div>
          </div>
          <button className="p-3 rounded-xl bg-[var(--accent)] text-[var(--accent-foreground)] hover:opacity-90 transition-all active:scale-95">
            <Plus size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

function FinanceCard({ stats }: { stats: any }) {
  const { t } = useTranslation();

  const donutData = [
    { name: t('admin_clients', 'Clients'), value: 40, color: 'var(--accent)' },
    { name: t('admin_artisans', 'Artisans'), value: 35, color: 'var(--success)' },
    { name: t('admin_companies', 'Companies'), value: 25, color: 'var(--warning)' },
  ];

  return (
    <div className="hynex-card p-10 h-full min-h-[450px] flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <h3 className="tech-label">{t('admin_user_base', 'User Base')}</h3>
        <div className="flex items-center gap-2 tech-label bg-[var(--glass-bg)] px-4 py-2 rounded-xl border border-[var(--glass-border)]">
          <span className="tech-value">{stats?.totalUsers || 0}</span> {t('admin_total', 'Total')}
        </div>
      </div>

      <div className="flex items-center gap-8 mb-10">
        <div className="relative w-40 h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={donutData}
                innerRadius={60}
                outerRadius={75}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {donutData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl tech-value text-[var(--text)]">100%</span>
            <span className="tech-label opacity-50">{t('admin_artisans_short', 'Artisans')}</span>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          {donutData.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-[var(--glass-bg)]/30 border border-[var(--glass-border)]/50">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="tech-label opacity-70">{item.name}</span>
              </div>
              <span className="text-xs tech-value text-[var(--text)]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="tech-label block mb-1">{t('admin_growth_curve', 'Growth Curve')}</span>
            <span className="text-lg tech-header text-[var(--text)]">MAD 12,500</span>
          </div>
          <span className="text-xs tech-value text-[var(--success)]">+6.2%</span>
        </div>
        <div className="h-24 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={[
              { x: 0, y: 10 }, { x: 1, y: 25 }, { x: 2, y: 15 }, { x: 3, y: 40 }, { x: 4, y: 30 }, { x: 5, y: 50 }
            ]}>
              <defs>
                <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--success)" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="var(--success)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="y" stroke="var(--success)" strokeWidth={3} fillOpacity={1} fill="url(#colorGrowth)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function TrackingCard() {
  const { t } = useTranslation();

  const limits = [
    { name: t('admin_clients', 'Clients'), value: 40, color: 'var(--success)' },
    { name: t('admin_artisans', 'Artisans'), value: 25, color: 'var(--warning)' },
    { name: t('admin_companies', 'Companies'), value: 35, color: 'var(--accent)' },
    { name: t('admin_other', 'Other'), value: 20, color: 'var(--text-muted)' },
  ];

  return (
    <div className="hynex-card p-10 h-full min-h-[450px] flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <Activity className="text-[var(--accent)]" size={20} />
          <h3 className="tech-label">{t('admin_financial_tracking', 'Financial Tracking')}</h3>
        </div>
        <button className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"><MoreVertical size={20} /></button>
      </div>

      <div className="mb-10">
        <div className="flex justify-between items-center mb-4">
          <p className="tech-label opacity-70">{t('admin_monthly_expenses', 'Monthly Expenses')}</p>
          <span className="text-[var(--success)] tech-value">+8%</span>
        </div>
        <div className="flex items-baseline gap-3">
          <h2 className="text-5xl tech-header text-[var(--text)] font-mono">$1,390</h2>
          <span className="text-[var(--text-muted)] text-lg tech-value opacity-50">/ $1,600</span>
          <span className="tech-label ml-auto opacity-50">{t('admin_days_left', '2 days left')}</span>
        </div>
      </div>
      <div className="space-y-8 flex-1">
        <div>
          <h4 className="tech-label mb-6 opacity-70">{t('admin_spending_limits', 'Spending Limits')}</h4>
          <div className="h-3 w-full bg-[var(--bg)] rounded-full overflow-hidden flex border border-[var(--border)]">
            <div className="h-full bg-[var(--success)]" style={{ width: '40%' }} />
            <div className="h-full bg-[var(--warning)]" style={{ width: '25%' }} />
            <div className="h-full bg-[var(--accent)]" style={{ width: '35%' }} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-6">
          {limits.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-5 h-2 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="tech-label opacity-70">{item.name} ({item.value}%)</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <div className="bg-[var(--glass-bg)] rounded-3xl p-6 border border-[var(--glass-border)] flex items-center justify-between group cursor-pointer hover:bg-[var(--glass-border)] transition-all">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-2xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
              <Sparkles size={20} />
            </div>
            <div>
              <p className="tech-label opacity-50">{t('admin_ai_insights', 'AI Insights')}</p>
              <p className="text-xs tech-header text-[var(--text)]">{t('admin_growth_insight', 'Positive Growth Trend expected this quarter')}</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-[var(--accent)] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

function SearchMetricsTable() {
  const { t } = useTranslation();

  const records = [
    { category: 'Consultation', value: '$120.00', status: t('admin_paid', 'Paid'), color: 'text-[var(--success)]' },
    { category: 'Pharmacy', value: '$265.00', status: t('admin_claimed', 'Claimed'), color: 'text-[var(--accent)]' },
    { category: 'Insurance', value: '$1,200.00', status: t('admin_pending', 'Pending'), color: 'text-[var(--warning)]' },
    { category: 'Lab Test', value: '$300.00', status: t('admin_paid', 'Paid'), color: 'text-[var(--success)]' },
  ];

  return (
    <div className="hynex-card p-10 h-full min-h-[450px] flex flex-col">
      <div className="relative mb-10">
        <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
        <input 
          type="text" 
          placeholder={t('admin_search_metrics', 'Search metrics...')} 
          className="w-full bg-[var(--bg)] border border-[var(--border)] py-5 pl-14 pr-14 rounded-3xl tech-label focus:outline-none focus:border-[var(--accent)]/50 transition-all text-[var(--text)] not-italic"
        />
        <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          <Filter size={18} />
        </button>
      </div>

      <div className="flex gap-8 mb-8 border-b border-[var(--border)]">
        {[t('admin_all_records', 'All Records'), t('admin_pending_opt', 'Pending'), t('admin_completed_opt', 'Completed')].map((tab, i) => (
          <button 
            key={i} 
            className={`tech-label pb-4 border-b-2 transition-all ${i === 0 ? 'border-[var(--accent)] text-[var(--text)]' : 'border-transparent text-[var(--text-muted)] hover:text-[var(--text)]'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-x-auto no-scrollbar">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="pb-6 tech-label">{t('admin_category', 'Category')}</th>
              <th className="pb-6 tech-label">{t('admin_value', 'Value')}</th>
              <th className="pb-6 tech-label text-right">{t('admin_status', 'Status')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--border)]">
            {records.map((record, i) => (
              <tr key={i} className="group hover:bg-[var(--accent)]/5 transition-colors">
                <td className="py-6 text-sm tech-header text-[var(--text)] not-italic">{record.category}</td>
                <td className="py-6 text-sm tech-value text-[var(--text)] not-italic">{record.value}</td>
                <td className="py-6 text-right">
                  <span className={`tech-label px-4 py-1.5 rounded-full bg-[var(--bg)] border border-[var(--border)] ${record.color}`}>
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function AiAssistantChat() {
  const { t } = useTranslation();

  return (
    <div className="hynex-card p-10 h-full min-h-[450px] flex flex-col">
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center gap-3">
          <Sparkles size={20} className="text-[var(--accent)]" />
          <h3 className="tech-label">{t('admin_ai_assistant', 'AI Assistant')}</h3>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"><FileText size={18} /></button>
          <button className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"><ArrowUpRight size={18} /></button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
        <p className="tech-label max-w-[220px] leading-relaxed opacity-70">{t('admin_ai_prompt', 'What areas should I prioritize for platform growth?')}</p>
        
        <div className="w-full bg-[var(--bg)] rounded-3xl p-8 border border-[var(--border)] text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-[var(--accent)]" />
          <div className="flex items-center gap-3 text-[var(--accent)] mb-4">
            <Zap size={16} />
            <span className="tech-label">{t('admin_growth_strategy', 'Growth Strategy')}</span>
          </div>
          <p className="text-xs tech-header text-[var(--text)] not-italic leading-relaxed">
            {t('admin_growth_advice', 'Prioritize: High-demand categories, verified artisans. Avoid: Low-rated services, inactive regions.')}
          </p>
        </div>

        <div className="flex gap-3 w-full overflow-x-auto no-scrollbar py-2">
          {[t('admin_tag_ai', 'AI Hub'), t('admin_tag_finance', 'Platform Finance'), t('admin_tag_market', 'Market Analysis')].map((tag, i) => (
            <button key={i} className="whitespace-nowrap px-5 py-2.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)] tech-label hover:border-[var(--accent)]/50 hover:text-[var(--text)] transition-all">
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl bg-[var(--accent)] flex items-center justify-center text-[var(--accent-foreground)] shadow-lg shadow-[var(--accent)]/20">
          <Sparkles size={20} />
        </div>
        <input 
          type="text" 
          placeholder={t('admin_ask_ai', 'Ask AI anything...')} 
          className="w-full bg-[var(--bg)] border border-[var(--border)] py-6 pl-20 pr-14 rounded-3xl tech-label focus:outline-none focus:border-[var(--accent)]/50 transition-all text-[var(--text)] not-italic"
        />
        <button className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
}

export default function DashboardOverview({ stats, isDarkMode, cardClasses, textMutedClasses, hoverClasses, onAction }: any) {
  return (
    <div className="grid grid-cols-12 gap-10">
      {/* Row 1 */}
      <div className="col-span-12 lg:col-span-4">
        <RevenueCard stats={stats} />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <MetricsCard stats={stats} />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <FinanceCard stats={stats} />
      </div>

      {/* Row 2 */}
      <div className="col-span-12 lg:col-span-4">
        <TrackingCard />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <SearchMetricsTable />
      </div>
      <div className="col-span-12 lg:col-span-4">
        <AiAssistantChat />
      </div>
    </div>
  );
}
