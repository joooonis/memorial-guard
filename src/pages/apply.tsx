import Layout from '@components/common/layout';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

export default function Policy() {
  const [checked, setChecked] = useState([false, false]);
  const router = useRouter();
  return (
    <Layout>
      <div className="relative  px-8 py-12 w-full bg-[url('/background.png')] justify-center items-center h-screen">
        <motion.div className="w-full flex justify-center text-center font-Sunflower  font-medium  text-[#403227] text-4xl my-auto ">
          V I R T U A L M E M O R <br />A S S U R A N C E I N S U R A N C E
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1] }}
          transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
          className="relative w-full h-1/2"
        >
          <Image
            src="/p3.png"
            fill
            className="object-contain scale-120"
            alt="p1"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1], // 1초 동안 투명도를 1, 0, 1로 변경하여 깜빡거리는 애니메이션
          }}
          transition={{
            delay: 1.5,
          }}
          className="font-Ubuntu text-center text-lg mt-8 leading-8 font-light "
        >
          Thank you for enrolling in our insurance program at
          MemoriaGuard&lsquo;s Virtual Memory Assurance Insurance. We appreciate
          your trust and confidence in our services. We value your memories and
          relationships, and we are committed to providing the highest level of
          service. Through our virtual space, we strive to create a seamless and
          everlasting connection, allowing your cherished memories and love to
          endure. We are dedicated to ensuring that your experiences in the
          virtual realm are meaningful and unforgettable. Thank you for choosing
          us, and we sincerely appreciate your support.
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1], // 1초 동안 투명도를 1, 0, 1로 변경하여 깜빡거리는 애니메이션
          }}
          transition={{
            delay: 2,
          }}
          className="w-full mt-8 flex justify-center items-center"
        >
          <button
            onClick={() => {
              router.push('/');
            }}
            className="w-80 font-Ubuntu bg-black hover:opacity-80 text-white text-lg py-4 px-8 rounded-lg"
          >
            Thank you for apply
          </button>
        </motion.div>
      </div>
    </Layout>
  );
}
