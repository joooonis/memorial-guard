import Layout from '@components/common/layout';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
export default function Home() {
  const [checked, setChecked] = useState([false, false, false]);
  const router = useRouter();
  return (
    <Layout>
      <div className="relative flex justify-center items-center  px-8 py-12 w-full bg-center bg-[url('/memorialguard.png')] bg-no-repeat bg-contain justify-center items-center h-screen">
        <motion.div
          animate={{
            opacity: [1, 0, 1, 0, 1], // 1초 동안 투명도를 1, 0, 1로 변경하여 깜빡거리는 애니메이션
          }}
          transition={{
            duration: 1, // 2초마다 애니메이션이 반복됨
            repeat: Infinity, // 애니메이션을 무한히 반복함
            repeatDelay: 8,
          }}
          className="w-60"
        >
          <button
            onClick={() => {
              router.push('/policy01');
            }}
            className="w-full font-Ubuntu bg-black hover:opacity-80 text-white text-lg py-4 px-8 rounded-lg"
          >
            Get Insurance Now
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
