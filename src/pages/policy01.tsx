import Layout from '@components/common/layout';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
export default function Home() {
  const [checked, setChecked] = useState([false, false, false]);
  const router = useRouter();
  return (
    <Layout>
      <div className="relative  px-8 py-12 w-full bg-[url('/background.png')] justify-center items-center h-screen">
        <div className="w-full flex justify-start font-Sunflower  font-medium  text-[#403227] title text-3xl my-auto ">
          V I R T U A L M E M O R <br />A S S U R A N C E I N S U R A N C E
        </div>
        <div className="w-full text-gray-700 mt-8 flex justify-start font-Montesrrat font-medium  text-[#403227] title text-xl my-auto ">
          POLICY OF INSURANCE
        </div>
        <div className="relative w-full h-[32rem]">
          <Image
            src="/p4.png"
            fill
            className="object-contain scale-120"
            alt="p1"
          />
        </div>
        <div className="w-full flex-col space-y-4 justify-start items-center">
          <div
            onClick={() =>
              setChecked((prev) => {
                const updated = [...prev];
                updated[0] = !updated[0];
                return updated;
              })
            }
            className="w-full flex font-Ubuntu font-light text-xl items-start cursor-pointer hover:opacity-80"
          >
            {!checked[0] ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            )}
            <span className="ml-2">
              I hereby consent to the enrollment in MemoriaGuard Insurance.
            </span>
          </div>
          <div
            onClick={() =>
              setChecked((prev) => {
                const updated = [...prev];
                updated[1] = !updated[1];
                return updated;
              })
            }
            className="w-full flex font-Ubuntu font-light text-xl items-start cursor-pointer hover:opacity-80"
          >
            {!checked[1] ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            )}
            <div className="ml-2">
              I acknowledge and agree that my personal memories stored in the
              virtual space provided by MemoriaGuard Insurance may be preserved
              and manipulated.
            </div>
          </div>
          <div
            onClick={() =>
              setChecked((prev) => {
                const updated = [...prev];
                updated[2] = !updated[2];
                return updated;
              })
            }
            className="w-full flex font-Ubuntu font-light text-xl items-start cursor-pointer hover:opacity-80"
          >
            {!checked[2] ? (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            ) : (
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            )}
            <div className="ml-2">
              I consent to the sharing of my personal information with
              MemoriaGuard Insurance and its affiliated partners.
            </div>
          </div>
          <div className="pt-8">
            <button
              disabled={checked.every((item) => !item)}
              onClick={() => {
                if (checked.every((item) => item)) {
                  router.push('/policy02');
                }
              }}
              className={`w-full font-Ubuntu bg-black  text-white py-2 px-4 rounded ${
                checked.some((item) => !item) && 'opacity-50 cursor-not-allowed'
              }}`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
