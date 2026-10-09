import { useEffect, useState } from 'react';

export default function SharedHeader() {
  const [weekNumber, setWeekNumber] = useState(getISOWeekNumber());

  function getISOWeekNumber(date = new Date()) {
    const currentDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

    const dayNumber = currentDate.getUTCDay() || 7;

    currentDate.setUTCDate(currentDate.getUTCDate() + 4 - dayNumber);

    const yearStart = new Date(Date.UTC(currentDate.getUTCFullYear(), 0, 1));

    return Math.ceil(((currentDate - yearStart) / 86400000 + 1) / 7);
  }

  useEffect(() => {
    function updateWeekNumber() {
      if (document.visibilityState === 'visible') {
        setWeekNumber(getISOWeekNumber());
      }
    }

    document.addEventListener('visibilitychange', updateWeekNumber);

    // Actualizar al montar el componente
    updateWeekNumber();

    return () => {
      document.removeEventListener('visibilitychange', updateWeekNumber);
    };
  }, []);

  return (
    <>
      <div className='h-16 px-gutter flex items-center justify-between gap-space-sm'>
        <div className='flex items-center gap-space-sm min-w-0'>
          <div className='h-10 px-2 py-1 bg-surface-container-lowest rounded-xl flex items-center justify-center shadow-sm shrink-0 border border-surface-container-high'>
            <img
              alt='Mooby Logo'
              className='h-7 w-auto object-contain'
              src='https://lh3.googleusercontent.com/aida-public/AB6AXuDMzdnw4HPcy_lI4K6BIr6vmONi-wGS--1zvF7oKWvj0zfJ4GUUI7eKjMrUh6HElu-KedfRdZX_QMhXZKGmnhyQvfgfQEGQ9LkoWsstHliyi0Oj98FNSDt2BLqsnj9l2EoUi43WPBlV4aDNMRaOuV2rXH2n0vdX3ZEWHkHs7-Co96E612J60XqeqJRK0zb6kCawiIuOVjndsPTYU1gDy-SVW-1O4p0TNxvRmaKr6v3X-H6CItNafGHsz1OoacFwbDBDNA'
            />
          </div>
          <div className='flex flex-col min-w-0'>
            <div className='flex items-center gap-space-xs'>
              <span className='font-label-lg text-label-lg text-primary truncate leading-tight'>Mooby</span>
              <span className='font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-space-xs py-0.5 rounded-full font-semibold'>
                CMS
              </span>
            </div>
            <span className='font-label-sm text-label-sm text-on-surface-variant truncate'>Tienda Central</span>
          </div>
        </div>
        <div className='flex space-x-5 gap-space-xs shrink-0'>
          <div className='inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-secondary-container/50 text-secondary font-label-sm text-label-sm font-bold border border-secondary-container shadow-sm flex-shrink-0'>
            <span className='material-symbols-outlined text-[15px]'>date_range</span>
            <span className=''>{`Sem ${weekNumber}/52`}</span>
          </div>
          <img
            alt='Profile'
            className='w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_-1px_rgba(2,57,78,0.15)]'
            src='https://lh3.googleusercontent.com/aida-public/AB6AXuCLU0gbiF9G0wnWjPWSoItfl3BjKjT54b69twoTEQnbicqFvqadLJuASG32YM8prb8IVcer_TkeOHm1k_07AoJPVvVlYORYavlgZ7t4ijYHLMPT44K7_ooD1NQV5gOEHyfMwMIErpCRyVg1501RAlerdfnw6BmLQA65cmrtgKjRHQQE3Q1p7DtEf-M_pk9iOUgfCiU_QeSMaBRZ1l7psA5zhejy9GByQUz5iB85AGtRXrRti8ZKAsqZ'
          />
        </div>
      </div>
    </>
  );
}
