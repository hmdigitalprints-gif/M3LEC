import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ShieldCheck, ArrowRight, RefreshCw, CheckCircle2, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function PhoneAuth() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [phone, setPhone] = useState('+212');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [verificationId, setVerificationId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [showFallback, setShowFallback] = useState(false);

  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const isRtl = i18n.dir() === 'rtl';

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 2 && countdown > 0) {
      timer = setInterval(() => setCountdown(c => c - 1), 1000);
    }
    if (step === 2 && countdown === 40) { // 20 seconds passed (60 - 40)
      setShowFallback(true);
    }
    return () => clearInterval(timer);
  }, [step, countdown]);

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!phone.match(/^(\+212|0)[567]\d{8}$/)) {
      setError(t('invalid_phone', 'Invalid phone number'));
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setVerificationId(data.verificationId);
      setStep(2);
      setCountdown(60);
      setShowFallback(false);
      
      // Simulate auto-detect OTP after 3 seconds
      setTimeout(() => {
        if (step === 2) {
          // In a real app, this would use the WebOTP API or SMS Retriever API
          console.log("Auto-detecting OTP...");
        }
      }, 3000);
      
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const code = otp.join('');
    if (code.length !== 6) return;

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/verify-otp-new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verificationId, code })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setStep(3);
    } catch (err: any) {
      setError(err.message || t('invalid_otp', 'Invalid code'));
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (countdown > 0) return;
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/resend-otp-new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ verificationId })
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      
      setVerificationId(data.verificationId);
      setCountdown(60);
      setShowFallback(false);
      setOtp(['', '', '', '', '', '']);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
    
    if (newOtp.every(v => v !== '')) {
      // Auto submit when all filled
      setTimeout(() => {
        handleVerifyOtp();
      }, 100);
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <div className={`min-h-screen bg-[var(--bg)] flex flex-col items-center justify-center p-4 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <Globe className="w-5 h-5 text-[var(--text-muted)]" />
        <select 
          value={i18n.language ? i18n.language.split('-')[0] : 'en'} 
          onChange={(e) => i18n.changeLanguage(e.target.value)}
          className="bg-transparent text-sm font-medium text-[var(--text)] outline-none cursor-pointer"
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ar">العربية</option>
        </select>
      </div>

      <div className="w-full max-w-md bg-[var(--card-bg)] rounded-3xl shadow-xl overflow-hidden border border-[var(--border)]">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[var(--accent)] rounded-2xl flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-8 h-8 text-[var(--accent-foreground)]" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-[var(--text)] mb-2">{t('phone_auth_title', 'Phone Authentication')}</h1>
          <p className="text-center text-[var(--text-muted)] mb-8">{t('login_subtitle', 'Securely sign in')}</p>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.form 
                key="step1"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                onSubmit={handleSendOtp}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-bold text-[var(--text-muted)] uppercase tracking-widest mb-2">
                    {t('auth_phone', 'Enter your phone number')}
                  </label>
                  <div className="relative">
                    <div className={`absolute inset-y-0 ${isRtl ? 'right-0 pr-3' : 'left-0 pl-3'} flex items-center pointer-events-none`}>
                      <Phone className="w-5 h-5 text-[var(--text-muted)]" />
                    </div>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={`block w-full ${isRtl ? 'pr-10 pl-3' : 'pl-10 pr-3'} py-3 bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all outline-none`}
                      placeholder="+212 6XX XX XX XX"
                      dir="ltr"
                    />
                  </div>
                  {error && <p className="mt-2 text-sm text-[var(--destructive)]">{error}</p>}
                </div>

                <button
                  type="submit"
                  disabled={loading || phone.length < 10}
                  className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <RefreshCw className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      {t('phone_auth_send_code', 'Send Code')}
                      <ArrowRight className={`w-5 h-5 ${isRtl ? 'rotate-180' : ''}`} />
                    </>
                  )}
                </button>
              </motion.form>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 20 : -20 }}
                className="space-y-6"
              >
                <div className="text-center">
                  <p className="text-sm text-[var(--text-muted)] mb-1">{t('otp_sent_to', 'Code sent to')}</p>
                  <p className="font-semibold text-[var(--text)]" dir="ltr">{phone}</p>
                </div>

                <div className="flex justify-center gap-2" dir="ltr">
                  {otp?.map((digit, index) => (
                    <input
                      key={index}
                      ref={el => { otpRefs.current[index] = el; }}
                      type="text"
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      className="w-12 h-14 text-center text-2xl font-bold bg-[var(--bg)] border border-[var(--border)] text-[var(--text)] rounded-xl focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent transition-all outline-none"
                      maxLength={1}
                    />
                  ))}
                </div>

                {error && <p className="text-center text-sm text-[var(--destructive)]">{error}</p>}

                {showFallback && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-[var(--accent)]/10 text-[var(--accent)] p-3 rounded-lg text-sm text-center border border-[var(--accent)]/20"
                  >
                    {t('otp_fallback_msg', 'If SMS is taking too long, we will send an alternative.')}
                  </motion.div>
                )}

                <div className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => handleVerifyOtp()}
                    disabled={loading || otp.some(v => !v)}
                    className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 rounded-xl font-bold hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center"
                  >
                    {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : t('phone_auth_verify', 'Verify')}
                  </button>

                  <button
                    onClick={handleResendOtp}
                    disabled={countdown > 0 || loading}
                    className="text-sm font-bold text-[var(--accent)] hover:opacity-80 disabled:opacity-50 disabled:text-[var(--text-muted)] transition-colors uppercase tracking-widest"
                  >
                    {countdown > 0 ? `${t('resend_in', 'Resend in')} ${countdown}s` : t('resend_now', 'Resend Code')}
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                </div>
                
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text)] mb-2">{t('auth_success', 'Success!')}</h2>
                  <p className="text-[var(--text-muted)]">{t('auth_success_desc', 'Your number has been verified.')}</p>
                </div>

                <button
                  onClick={() => window.location.href = '/'}
                  className="w-full bg-[var(--accent)] text-[var(--accent-foreground)] py-3 rounded-xl font-bold hover:opacity-90 transition-all"
                >
                  {t('dashboard_btn_continue', 'Continue')}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
