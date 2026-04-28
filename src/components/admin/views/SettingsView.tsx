import React, { useState, useEffect } from 'react';
import { Loader2, Save, Wallet, ShieldCheck, Settings, Globe } from 'lucide-react';
import { ViewProps } from '../types';

interface SettingsViewProps extends ViewProps {
  settings: any;
  updateSettings: (settings: any) => Promise<void>;
}

export default function SettingsView({ settings, updateSettings, isDarkMode, cardClasses, textMutedClasses, onAction }: SettingsViewProps) {
  const [localSettings, setLocalSettings] = useState(settings);
  const [saving, setSaving] = useState(false);
  const [languages, setLanguages] = useState<any[]>([]);

  useEffect(() => {
    setLocalSettings(settings);
  }, [settings]);

  useEffect(() => {
    fetch('/api/languages')
      .then(res => res.json())
      .then(data => setLanguages(data.filter((l: any) => l.is_active)));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    try {
      await updateSettings(localSettings);
      alert('System settings updated successfully!');
    } catch (error) {
      alert('Failed to update system settings.');
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (key: string, value: string) => {
    if (value === 'NaN') return;
    setLocalSettings((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="tech-header text-2xl">System Settings</h1>
          <p className="tech-label opacity-70 mt-1">Configure platform parameters, commissions, and global rules.</p>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              handleSave();
              onAction?.('Saving system settings...');
            }}
            disabled={saving}
            className="bg-[var(--accent)] text-[var(--accent-foreground)] px-6 py-3 rounded-2xl tech-label hover:opacity-90 transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2"
          >
            {saving ? <Loader2 size={18} className="animate-spin" /> : <Save size={18} />}
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="hynex-card p-8">
            <h3 className="tech-header text-lg mb-6 flex items-center gap-3"><Wallet size={20} className="text-[var(--accent)]" /> General Settings</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="tech-label opacity-70 mb-2 block">Platform Name</label>
                  <input 
                    type="text" 
                    value={localSettings.platform_name || ''} 
                    onChange={(e) => handleChange('platform_name', e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] tech-label focus:border-[var(--accent)]/50 outline-none transition-all not-italic" 
                  />
                </div>
                <div>
                  <label className="tech-label opacity-70 mb-2 block">Contact Email</label>
                  <input 
                    type="email" 
                    value={localSettings.contact_email || ''} 
                    onChange={(e) => handleChange('contact_email', e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] tech-label focus:border-[var(--accent)]/50 outline-none transition-all not-italic" 
                  />
                </div>
                <div>
                  <label className="tech-label opacity-70 mb-2 block">Support Phone</label>
                  <input 
                    type="text" 
                    value={localSettings.support_phone || ''} 
                    onChange={(e) => handleChange('support_phone', e.target.value)}
                    className="w-full px-5 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] tech-label focus:border-[var(--accent)]/50 outline-none transition-all not-italic" 
                  />
                </div>
                <div>
                  <label className="tech-label opacity-70 mb-2 block">Default Language</label>
                  <div className="relative">
                    <Globe size={16} className="absolute left-5 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
                    <select
                      value={localSettings.default_language || 'en'}
                      onChange={(e) => handleChange('default_language', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] tech-label focus:border-[var(--accent)]/50 outline-none transition-all appearance-none not-italic"
                    >
                      {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>{lang.name} ({lang.code})</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hynex-card p-8">
            <h3 className="tech-header text-lg mb-6 flex items-center gap-3"><ShieldCheck size={20} className="text-[var(--accent)]" /> Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <div>
                  <p className="tech-header text-sm not-italic text-[var(--text)]">Require 2FA for Admins</p>
                  <p className="tech-label opacity-50">Mandatory two-factor authentication for all admin accounts.</p>
                </div>
                <button 
                  onClick={() => handleChange('require_2fa', localSettings.require_2fa ? '0' : '1')}
                  className={`w-14 h-7 rounded-full relative transition-all ${localSettings.require_2fa === '1' ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${localSettings.require_2fa === '1' ? 'right-1' : 'left-1'}`}></div>
                </button>
              </div>
              <div className="flex items-center justify-between p-6 rounded-2xl border border-[var(--border)] bg-[var(--bg)]">
                <div>
                  <p className="tech-header text-sm not-italic text-[var(--text)]">Auto-suspend Suspicious Accounts</p>
                  <p className="tech-label opacity-50">Automatically freeze accounts flagged by fraud monitoring.</p>
                </div>
                <button 
                  onClick={() => handleChange('auto_suspend', localSettings.auto_suspend === '1' ? '0' : '1')}
                  className={`w-14 h-7 rounded-full relative transition-all ${localSettings.auto_suspend === '1' ? 'bg-[var(--accent)]' : 'bg-[var(--border)]'}`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all ${localSettings.auto_suspend === '1' ? 'right-1' : 'left-1'}`}></div>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="hynex-card p-8">
            <h3 className="tech-header text-lg mb-6 flex items-center gap-3"><Settings size={20} className="text-[var(--accent)]" /> System Status</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="tech-label opacity-70">Maintenance Mode</span>
                <span className={`px-3 py-1 rounded-full tech-label ${localSettings.maintenance_mode === '1' ? 'bg-[var(--destructive)]/10 text-[var(--destructive)]' : 'bg-[var(--border)] text-[var(--text-muted)]'}`}>
                  {localSettings.maintenance_mode === '1' ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="tech-label opacity-70">API Status</span>
                <span className="px-3 py-1 rounded-full tech-label bg-[var(--success)]/10 text-[var(--success)]">Operational</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="tech-label opacity-70">Database Load</span>
                <span className="px-3 py-1 rounded-full tech-label bg-[var(--accent)]/10 text-[var(--accent)]">Normal (24%)</span>
              </div>
              <button 
                onClick={() => {
                  const newState = localSettings.maintenance_mode === '1' ? '0' : '1';
                  handleChange('maintenance_mode', newState);
                  onAction?.(`${newState === '1' ? 'Enabling' : 'Disabling'} maintenance mode...`);
                }}
                className={`w-full py-4 mt-4 border rounded-2xl tech-label transition-all active:scale-95 ${
                  localSettings.maintenance_mode === '1' 
                    ? 'border-[var(--success)]/30 text-[var(--success)] hover:bg-[var(--success)]/10' 
                    : 'border-[var(--destructive)]/30 text-[var(--destructive)] hover:bg-[var(--destructive)]/10'
                }`}
              >
                {localSettings.maintenance_mode === '1' ? 'Disable Maintenance Mode' : 'Enable Maintenance Mode'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
