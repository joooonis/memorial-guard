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
        <div className=" w-full h-[calc(100vh-144px)] flex flex-col justify-between items-center">
          <motion.div className="w-full flex-col items-center flex justify-center font-Montesrrat font-medium  text-[#403227] text-2xl my-auto ">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1] }}
              transition={{ ease: 'easeOut', duration: 1, delay: 1 }}
              className="relative w-full h-[32rem]"
            >
              <Image
                src="/p2.png"
                fill
                className="scale-110 -translate-y-10 object-contain scale-120"
                alt="p3"
              />
            </motion.div>
            <p className="font-Ubuntu text-center text-lg leading-8 mx-12 font-light">
              Will you join our insurance program? <br />
              At MemoriaGuard&apos;s Virtual Memory Assurance Insurance, we
              invite you to be part of a groundbreaking experience that
              transcends the boundaries of life and death.
            </p>
            <div className="w-full space-x-4 mt-12 flex justify-center font-Montesrrat font-medium  ">
              <button
                onClick={() => {
                  router.push('/apply');
                }}
                className="font-light font-Ubuntu bg-black hover:opacity-80 text-white text-lg py-2 w-40 rounded-lg"
              >
                yes
              </button>
              <button
                onClick={() => {
                  router.push('/');
                }}
                className="font-light font-Ubuntu bg-black hover:opacity-80 text-white text-lg py-2 w-40 rounded-lg"
              >
                no
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
