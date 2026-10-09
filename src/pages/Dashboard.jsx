import DateAndHour from '../components/common/DateAndHour';
import SharedHeader from '../components/common/SharedHeader';
import MetricsCards from '../components/container/MetricCards';

export default function Dashboard() {
  return (
    <>
      <div className='bg-surface font-body-md text-on-surface antialiased min-h-screen'>
        <header className='fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]'>
          <SharedHeader />
        </header>
        <main className='flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen px-gutter'>
          <div className='flex flex-col w-full gap-space-lg pb-6'>
            {/*Aqui va lo de la fecha */}

            {/* Saludo Cálido y Resumen Operativo */}
            <section className='flex flex-col gap-space-sm'>
              <div className='flex items-center justify-between'>
                <div className='flex flex-col mt-1'>
                  <span className='font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold'>Control de Pedidos</span>
                  <h1 className='font-headline-md text-headline-md text-primary tracking-tight'>¡Buen día, Equipo Mooby! 🧀</h1>
                </div>
                <div className='w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary shadow-sm'>
                  <span className='material-symbols-outlined text-[22px]'>calendar_today</span>
                </div>
              </div>
              <p className='font-body-sm text-body-sm text-on-surface-variant'>Monitoreo de despachos y pedidos programados para hoy.</p>
              <DateAndHour />
            </section>
            <section className='grid grid-cols-2 gap-space-sm'>
              <MetricsCards />
            </section>
          </div>
        </main>
      </div>
    </>
  );
}
