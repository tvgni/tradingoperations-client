'use client';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('api/auth/login');
  };

  return (
    <section className="flex items-center justify-center h-screen bg-gradient-to-r from-violet-900 to-fuchsia-100">
      <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-1">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Bienvenido a Trading App.
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300 text-center">
                Maneja tus operativas desde una sola aplicación.
              </p>
              <div className="flex items-center justify-center mt-6 flex max-w-md gap-x-4">
                <button
                  onClick={handleLoginClick}
                  type="submit"
                  className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Iniciar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
