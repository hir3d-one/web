'use client';

import colors from 'tailwindcss/colors';
import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const { gray, amber, emerald, rose } = colors;

export const ReleaseStatusGraphic = () => {
  const reference = useRef<HTMLDivElement>(null);
  const inView = useInView(reference, { once: true, amount: 'all' });
  const [statuses, setStatuses] = useState<any[]>([]);

  useEffect(() => {
    setStatuses([
      {
        name: 'Planned',
        id: 'PLANNED',
        color: gray[700],
      },
      {
        name: 'In Progress',
        id: 'ACTIVE',
        color: amber[500],
      },
      {
        name: 'Completed',
        id: 'COMPLETED',
        color: emerald[500],
      },
      {
        name: 'Cancelled',
        id: 'CANCELLED',
        color: rose[500],
      },
    ]);
  }, []);

  if (!inView) {
    return <div ref={reference} />;
  }

  return (
    <div className="not-prose flex h-full w-full items-center justify-center p-8">
      <div className="w-full space-y-1">
        {statuses.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-lg border bg-background px-3 py-1.5 shadow-sm"
          >
            <span
              className="h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <input
              className="flex-1 bg-transparent text-sm outline-none"
              defaultValue={item.name}
              aria-label="Feature status"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
