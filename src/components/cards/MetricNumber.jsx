export default function MetricNumber({ title, icon, value, span, text, textPrimary, bgContainer }) {
  return (
    <>
      <div className='bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <span className='font-label-md text-label-md text-on-surface-variant'>{title}</span>
          <span className='w-7 h-7 rounded-full  flex items-center justify-center ' style={{ color: textPrimary, backgroundColor: bgContainer }}>
            <span className='material-symbols-outlined text-[16px]!'>{icon}</span>
          </span>
        </div>
        <div className='mt-2 flex items-baseline gap-space-xs'>
          <span className='font-headline-md text-headline-md leading-none' style={{ color: textPrimary }}>
            {value}
          </span>
          <span className='font-label-sm text-label-sm  font-semibold' style={{ color: textPrimary }}>
            {span}
          </span>
        </div>
        <span className='font-body-sm text-body-sm text-on-surface-variant mt-1'>{text}</span>
      </div>
    </>
  );
}
