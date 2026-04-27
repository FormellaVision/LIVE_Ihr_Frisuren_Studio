'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { OPENING_HOURS } from '@/lib/constants';

type DayOfWeek = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

type Status = 'open' | 'closed' | 'opening-soon' | 'closing-soon';

export function OpeningStatusBadge() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const days: DayOfWeek[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const currentDay = days[now.getDay()];
      const hours = OPENING_HOURS[currentDay];

      if (!hours.open || !hours.times) {
        setStatus('closed');
        return;
      }

      try {
        const [startTimeStr, endTimeStr] = hours.times.split(' - ');
        
        const [startH, startM] = startTimeStr.split(':').map(Number);
        const [endH, endM] = endTimeStr.split(':').map(Number);
        
        const startTime = new Date(now);
        startTime.setHours(startH, startM, 0, 0);
        
        const endTime = new Date(now);
        endTime.setHours(endH, endM, 0, 0);

        const oneHourInMs = 60 * 60 * 1000;

        if (now >= startTime && now <= endTime) {
          // We are currently open
          const timeUntilClose = endTime.getTime() - now.getTime();
          if (timeUntilClose > 0 && timeUntilClose <= oneHourInMs) {
            setStatus('closing-soon');
          } else {
            setStatus('open');
          }
        } else {
          // We are currently closed
          const timeUntilOpen = startTime.getTime() - now.getTime();
          if (timeUntilOpen > 0 && timeUntilOpen <= oneHourInMs) {
            setStatus('opening-soon');
          } else {
            setStatus('closed');
          }
        }
      } catch (e) {
        console.error('Error parsing opening hours:', e);
        setStatus('closed');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (status === null) return <div className="h-[28px]" />;

  const config = {
    open: { 
      dot: 'bg-emerald-500', 
      ping: 'bg-emerald-400', 
      glow: 'bg-emerald-500', 
      text: 'Wir haben geöffnet' 
    },
    closed: { 
      dot: 'bg-rose-500', 
      ping: 'bg-rose-400', 
      glow: 'bg-rose-500', 
      text: 'Aktuell geschlossen' 
    },
    'opening-soon': { 
      dot: 'bg-amber-500', 
      ping: 'bg-amber-400', 
      glow: 'bg-amber-500', 
      text: 'Wir öffnen gleich' 
    },
    'closing-soon': { 
      dot: 'bg-amber-500', 
      ping: 'bg-amber-400', 
      glow: 'bg-amber-500', 
      text: 'Wir schließen gleich' 
    },
  };

  const current = config[status];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="group relative inline-flex items-center gap-2.5 rounded-full bg-neutral-950/90 px-4 py-1.5 text-[10px] font-bold tracking-[0.12em] text-white backdrop-blur-xl border border-white/10 shadow-2xl uppercase sm:text-[11px]"
    >
      {/* Background Glow */}
      <div 
        className={`absolute inset-0 -z-10 rounded-full blur-md opacity-20 transition-colors duration-500 ${current.glow}`} 
      />
      
      {/* Signal Dot */}
      <div className="relative flex h-2 w-2">
        <motion.span
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.7, 0.3, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute inline-flex h-full w-full rounded-full ${current.ping}`}
        />
        <span className={`relative inline-flex h-2 w-2 rounded-full ${current.dot}`} />
      </div>

      <span className="flex items-center gap-1.5">
        <span className="opacity-70">LIVE</span>
        <span className="w-1 h-1 rounded-full bg-white/20" />
        <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          {current.text}
        </span>
      </span>
      
      {/* Subtle border shine effect */}
      <div className="absolute inset-0 rounded-full border border-white/5 group-hover:border-white/20 transition-colors duration-500" />
    </motion.div>
  );
}
