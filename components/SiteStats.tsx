'use client';

import { useEffect, useState } from 'react';

/**
 * Private visit counter.
 *
 * Visible only to you. Load the site once with ?stats=1 and this browser
 * remembers you; everyone else sees a normal footer. Turn it back off with
 * ?stats=0.
 *
 * Unlocking also sets GoatCounter's "skipgc" flag in this browser, so your
 * own visits stop inflating the numbers.
 *
 * Replace YOUR-CODE below with the site code you choose when you sign up at
 * goatcounter.com (the subdomain, e.g. "mschoengoldbeatty").
 */
const GOATCOUNTER_CODE = 'YOUR-CODE';

const UNLOCK_KEY = 'msb_stats';
const WINDOWS = [30, 60, 90];

function startDate(daysAgo: number): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - daysAgo);
  return d.toISOString().slice(0, 10);
}

export default function SiteStats() {
  const [unlocked, setUnlocked] = useState(false);
  const [counts, setCounts] = useState<Record<number, string | null> | null>(null);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get('stats');

    try {
      if (param === '1') {
        localStorage.setItem(UNLOCK_KEY, '1');
        localStorage.setItem('skipgc', 't');
      } else if (param === '0') {
        localStorage.removeItem(UNLOCK_KEY);
        localStorage.removeItem('skipgc');
      }
    } catch {
      // private browsing or blocked storage: fall through to locked
    }

    let isUnlocked = false;
    try {
      isUnlocked = localStorage.getItem(UNLOCK_KEY) === '1';
    } catch {
      isUnlocked = false;
    }

    setUnlocked(isUnlocked);
    if (!isUnlocked) return;

    let cancelled = false;

    Promise.all(
      WINDOWS.map(async (days) => {
        try {
          const res = await fetch(
            `https://${GOATCOUNTER_CODE}.goatcounter.com/counter/TOTAL.json?start=${startDate(days)}`
          );
          if (!res.ok) return [days, null] as const;
          const data = await res.json();
          return [days, (data.count_unique ?? data.count ?? null) as string | null] as const;
        } catch {
          return [days, null] as const;
        }
      })
    ).then((entries) => {
      if (cancelled) return;
      setCounts(Object.fromEntries(entries));
    });

    return () => {
      cancelled = true;
    };
  }, []);

  if (!unlocked) return null;

  return (
    <div className="mt-5 pt-4 border-t-[2.5px] border-edge">
      <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
        <span className="tagline fill-amber">Visits &middot; private</span>

        {WINDOWS.map((days) => (
          <div key={days} className="flex items-baseline gap-2">
            <span className="font-display text-lg leading-none text-ink">
              {counts ? counts[days] ?? '\u2014' : '\u00b7'}
            </span>
            <span className="kicker">last {days} days</span>
          </div>
        ))}

        <span className="kicker ml-auto">only you see this</span>
      </div>
    </div>
  );
}
