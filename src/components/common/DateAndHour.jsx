import { useEffect, useState } from 'react';

export default function DateAndHour() {
  const [formattedDate, setFormattedDate] = useState('');
  const [hour, setHour] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
      const formatted = date.toLocaleDateString('es-ES', options);
      setFormattedDate(formatted);

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      setHour(`${formattedHours}:${formattedMinutes} ${ampm}`);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='flex flex-col gap-2 mt-1'>
        <div className='flex justify-around gap-space-xs'>
          <div className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm font-medium border border-surface-container-high shadow-sm'>
            <span className='material-symbols-outlined text-[15px] text-secondary'>calendar_today</span>
            <span className=''>{formattedDate}</span>
          </div>
          <div className='inline-flex items-center gap-1 px-2 py-1 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-sm text-label-sm border border-surface-container-high shadow-sm'>
            <span className='material-symbols-outlined text-[15px] text-outline'>schedule</span>
            <span className=''>{hour}</span>
          </div>
        </div>
      </div>
    </>
  );
}
