export default function MetricBar({ title, icon, value, span, porcentage, textPrimary, bgContainer }) {
  return (
    <>
      <div className='bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between relative overflow-hidden'>
        <div className='flex items-center justify-between'>
          <span className='font-label-md text-label-md text-on-surface-variant'>{title}</span>
          <span className='w-7 h-7 rounded-full  flex items-center justify-center' style={{ textPrimary, backgroundColor: bgContainer }}>
            <span className='material-symbols-outlined text-[16px]!'>{icon}</span>
          </span>
        </div>
        <div className='mt-2 flex items-baseline gap-space-xs'>
          <span className='font-headline-lg text-headline-lg' style={{ color: textPrimary }}>
            {value}
          </span>
          <span className='font-label-sm text-label-sm  font-semibold' style={{ color: textPrimary }}>
            {span}
          </span>
        </div>
        <div className='w-full bg-surface-container-high h-1.5 rounded-full mt-3 overflow-hidden'>
          <div className='h-full rounded-full' style={{ width: `${porcentage}%`, backgroundColor: textPrimary }}></div>
        </div>
      </div>
    </>
  );
}
