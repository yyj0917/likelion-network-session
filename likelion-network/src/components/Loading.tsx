import { Pulse } from 'basic-loading';

export default function Loading() {
  const option = {
    color: '#f9a977',
    size: 50,
    speed: 0.5,
    thickness: 3,
  };

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-screen mx-auto bg-white/10 backdrop-blur-sm'>
      <span className='relative z-50 flex justify-center items-center size-10 text-4xl bg-orange-300 rounded-full'>
        🦁
        <span className='absolute -z-10'>
          <Pulse option={option} />
        </span>
      </span>
    </div>
  );
}
