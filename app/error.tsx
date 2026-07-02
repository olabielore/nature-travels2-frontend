
'use client';

type Props = {
  error: Error;
  reset: () => void; 
};

export default function GlobalError({ error, reset }: Props) {
  return (
    <div>
      <p>Щось пішло не так. {error.message}</p>
      <button onClick={reset}>Спробувати знову</button>
    </div>
  );
}