'use client';

import ErrorPopup from '@/components/ErrorPopup';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return <ErrorPopup error={error} reset={reset} />;
}
