import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  const login = (e) => {
    e.preventDefault();

    if (counter === 3) {
      setDisabled(true);
      setTimeout(() => {
        setError(false);
        setCounter(0);
        setDisabled(false);
      }, 60000);
      return;
    }

    if (user === '' || password === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    const loginList = {
      user: 'mooby',
      password: '12345678',
    };

    if (user === loginList.user && password === loginList.password) {
      window.location.href = '/dashboard';
    } else {
      setError(true);
      setCounter(counter + 1);
    }
  };
  return (
    <div className='bg-surface text-on-surface antialiased min-h-screen flex flex-col pt-safe pb-safe selection:bg-secondary-container selection:text-on-secondary-container'>
      <div className='bg-surface text-on-surface antialiased min-h-screen flex flex-col pt-safe pb-safe selection:bg-secondary-container selection:text-on-secondary-container'>
        <main className='flex-1 flex flex-col relative w-full bg-surface px-margin'>
          <div className='flex flex-col flex-1 w-full max-w-sm mx-auto py-5'>
            {/*-- 1. Indicador de estado en tiempo real --*/}
            <div className='flex items-center justify-center gap-2 mb-4'>
              <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-semibold border border-emerald-200/80 shadow-xs'>
                <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse'></span>
                <span className=''>Estado en línea</span>
              </div>
            </div>
            {/*<!-- 2. Logotipo centrado con badge institucional --> */}
            <div className='flex flex-col items-center text-center px-4 w-full mb-4'>
              <img
                src='https://lh3.googleusercontent.com/aida-public/AB6AXuBZJgU2jAajh0yKBoep5ekyHkQLl8znPjqmYtbpY2ivxtJXtalylZiM3WrfIVkrXRGVG9PJQkSkhJlSFAcRwukIPxnGBZEnNAbFRhX2dd-XL1gUMH5id9o3mKg_ZzQYlFRUyyGtwVpL5h1be0nB-L0mBXXQ4i_Bj3BBf2Y0H4ZlN4Q_Crh_vVdNnVONsxLlPp_R04mkWoU9Mf6Ulk4o3HRkq4bxL55fkQPNxzPvxO5nstmInpTRG9gOiL87LsvF_sVDDA'
                alt='Mooby Logo'
                className='h-16 w-auto mx-auto object-contain mb-3'
              />
              <div className='inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[11px] font-semibold tracking-wide uppercase'>
                <span className=''>Mooby Content Management System</span>
              </div>
              {/*<!-- 3. Titular de bienvenida y subtítulo --> */}
              <h1 className='font-headline-md text-headline-md text-primary tracking-tight mt-3'>Bienvenido equipo</h1>
              <p className='font-body-sm text-body-sm text-on-surface-variant mt-1 leading-snug'>Acceso a gestión de pedidos, entregas y catálogo</p>
            </div>
            {/*<!-- 4. Selector de Área Operativa / Pestañas rápidas con indicador de turno activo -->{/* */}

            {/*<!-- 5. Formulario de Autenticación --> */}
            <form className='flex flex-col gap-3.5 bg-surface-container-lowest p-5 rounded-2xl shadow-sm border border-surface-variant/40'>
              <div className='flex flex-col gap-1.5'>
                {/*Credenciales incorrectas */}
                {error && (
                  <div className='p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-2.5 shadow-xs'>
                    <div className='flex-1 text-xs leading-snug'>
                      <div className='flex items-center justify-between'>
                        <span className='font-bold text-red-900 text-body-sm'>Credenciales incorrectas</span>
                        <button className='text-red-500 hover:text-red-700 p-0.5 rounded' onClick={() => setError(false)} type='button'>
                          <span className='material-symbols-outlined text-[18px]! cursor-pointer '>close</span>
                        </button>
                      </div>
                      <p className='mt-0.5 text-red-800 text-[12px] '>
                        El usuario o la contraseña ingresados no coinciden con los registros del obrador. Por favor, verifica tus datos o contacta al
                        administrador de turno.
                      </p>
                      <div className='mt-1.5 flex items-center gap-3'>
                        <a className='text-red-700 font-semibold underline text-[11px] hover:text-red-900' href='javascript:void(0)'>
                          ¿Olvidaste tu contraseña?
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                <label className='font-label-md text-label-md text-primary flex items-center justify-between' htmlFor='user-id'>
                  <span className=''>Usaurio</span>
                  <span className='text-[10px] text-outline font-normal'>ID de Colaborador</span>
                </label>
                <div className='relative flex items-center'>
                  <div
                    className={
                      !error
                        ? 'absolute left-3.5 flex items-center pointer-events-none text-primary'
                        : 'absolute left-3.5 flex items-center pointer-events-none text-red-500'
                    }
                  >
                    <span className='material-symbols-outlined text-[20px]'>badge</span>
                  </div>
                  <input
                    className={
                      !error
                        ? 'w-full h-11 pl-11 pr-4 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-colors shadow-xs border'
                        : 'w-full h-11 pl-11 pr-10 bg-red-50/50 rounded-xl font-body-md text-body-md text-on-surface border border-red-500 ring-1 ring-red-500 placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-xs'
                    }
                    id='user-id'
                    placeholder='nombre@mooby.co'
                    required=''
                    type='text'
                    onChange={(e) => setUser(e.target.value)}
                  />
                  {error && (
                    <div className='absolute right-3 flex items-center pointer-events-none text-red-500'>
                      <span className='material-symbols-outlined text-[20px]'>error</span>
                    </div>
                  )}
                </div>
                {error && (
                  <div className='flex items-center gap-1 text-xs text-red-600 mt-0.5'>
                    <span className='material-symbols-outlined text-[15px] shrink-0'>warning</span>
                    <span>Este campo es obligatorio. Ingresa usuario de colaborador.</span>
                  </div>
                )}
              </div>
              <div className='flex flex-col gap-1.5'>
                <div className='flex items-center justify-between'>
                  <label className='font-label-md text-label-md text-primary' htmlFor='password'>
                    Contraseña
                  </label>
                  <span className='text-[10px] text-outline'>Mínimo 8 caracteres</span>
                </div>
                <div className='relative flex items-center'>
                  <div
                    className={
                      !error
                        ? 'absolute left-3.5 flex items-center pointer-events-none text-primary'
                        : 'absolute left-3.5 flex items-center pointer-events-none text-red-500'
                    }
                  >
                    <span className='material-symbols-outlined text-[20px]'>lock</span>
                  </div>
                  <input
                    className={
                      !error
                        ? 'w-full h-11 pl-11 pr-4 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-outline/70 focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-secondary/40 transition-colors shadow-xs border'
                        : 'w-full h-11 pl-11 pr-10 bg-red-50/50 rounded-xl font-body-md text-body-md text-on-surface border border-red-500 ring-1 ring-red-500 placeholder:text-outline/70 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-xs'
                    }
                    id='password'
                    minLength='8'
                    placeholder='••••••••'
                    required
                    type={visible ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <button
                    aria-label='Ver u ocultar contraseña'
                    className='absolute right-3 p-1.5 text-outline hover:text-primary transition-colors flex items-center justify-center rounded-lg'
                    id='password-toggle-btn'
                    type='button'
                    onClick={togglePasswordVisibility}
                  >
                    {visible ? (
                      <>
                        <span className='material-symbols-outlined text-[20px]' id='password-toggle-icon'>
                          visibility
                        </span>
                      </>
                    ) : (
                      <>
                        <span className='material-symbols-outlined text-[20px]' id='password-toggle-icon'>
                          visibility_off
                        </span>
                      </>
                    )}
                  </button>
                </div>
                {error && (
                  <div className='flex items-center gap-1 text-xs text-red-600 mt-0.5'>
                    <span className='material-symbols-outlined text-[15px] shrink-0'>warning</span>
                    <span>Por favor, ingresa tu contraseña de acceso.</span>
                  </div>
                )}
              </div>
              <div className='flex items-center justify-between pt-0.5'>
                <label className='flex items-center gap-2 cursor-pointer select-none'>
                  <input className='w-4 h-4 rounded text-secondary focus:ring-0 accent-secondary cursor-pointer' type='checkbox' />
                  <span className='font-body-sm text-body-sm text-on-surface-variant'>Recordar en este equipo</span>
                </label>
                <a
                  className='font-label-md text-label-md text-primary hover:text-secondary transition-colors underline decoration-secondary decoration-1 underline-offset-2'
                  href='javascript:void(0)'
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div>
                <span className='font-body-sm text-body-sm text-on-surface-variant'>
                  {'Intentos de inicio de sesión fallidos: ' + counter + '/3'}
                </span>
              </div>

              {/*<!-- 6. Acciones --> */}
              <div className='mt-2 flex flex-col gap-2'>
                <button
                  className='w-full h-12 bg-secondary hover:bg-[#00704E] active:scale-[0.99] text-on-secondary rounded-xl font-label-lg text-label-lg flex items-center justify-center gap-2 shadow-md transition-all font-semibold'
                  id='login-btn'
                  type='submit'
                  onClick={login}
                  disabled={disabled}
                >
                  {disabled ? (
                    <>
                      <span className='material-symbols-outlined animate-spin text-[20px]'>progress_activity</span>
                      <span className=''>Ingresar Bloqueado, espere 1 minuto</span>
                    </>
                  ) : (
                    <>
                      <span className='material-symbols-outlined text-[20px]'>lock_open</span>
                      <span className=''>Ingresar a Mooby CMS</span>
                    </>
                  )}
                </button>
                <button
                  className='w-full h-11 bg-surface-container-low hover:bg-surface-container active:scale-[0.99] text-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all border border-surface-variant/40'
                  type='button'
                >
                  <span className='material-symbols-outlined text-[20px] text-secondary'>fingerprint</span>
                  <span className=''>Acceso rápido con Biometría / Huella</span>
                </button>
              </div>
            </form>
            {/* <!-- 7. Widgets informativos de estado del taller/obrador -->*/}

            {/* <!-- Tarjeta de aviso de nuevo miembro -->*/}
            <div className='mt-2.5 p-3 rounded-xl bg-surface-container-low/70 border border-surface-variant/40 flex items-start gap-2.5'>
              <span className='material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5'>info</span>
              <div className='text-[12px] leading-snug text-on-surface-variant'>
                <span className=''>¿Nuevo miembro del equipo lácteo? Solicita tu usuario y contraseña.</span>
                <Link
                  className='text-secondary font-semibold hover:underline block mt-0.5'
                  href='javascript:void(0)'
                  to='https://wa.me/593963478782?text=Hola%20quiero%20mis%20credenciales%20para%20ingresar%20como%20miembro%20de%20Mooby%20CMS'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Hablar con Soporte →
                </Link>
              </div>
            </div>
            {/*<!-- 8. Pie de página --> */}
            <div className='mt-5 mb-1 flex flex-col items-center text-center gap-1'>
              <div className='flex items-center gap-1.5 text-outline font-label-sm text-label-sm'>
                <span className='material-symbols-outlined text-[14px] text-emerald-600'>lock</span>
                <span className=''>Cifrado TLS 1.3 de Extremo a Extremo • Mooby CMS v1.0</span>
              </div>
              <span className='text-[11px] text-outline/80'>Mooby Foood Group © 2026</span>
            </div>
            {/*<!-- Feedback Toast flotante --> */}
            <div className='fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden' id='toast-feedback'>
              <div className='flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-on-primary shadow-lg text-xs font-medium'>
                <span className='material-symbols-outlined text-[18px] text-secondary-container' id='toast-icon'>
                  check_circle
                </span>
                <span id='toast-msg' className=''>
                  Mensaje
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
