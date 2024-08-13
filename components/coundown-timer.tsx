"use client";
import moment from "moment";
import { useState, useEffect } from "react";
import Balancer from "react-wrap-balancer";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountDown() {
  const [time, setTime] = useState<CountdownTime | null>(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(updateCountdown());
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  function updateCountdown(): CountdownTime {
    const targetDate = moment("2024-10-25");
    const now = moment();
    const duration = moment.duration(targetDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = Math.floor(duration.asHours()) - days * 24;
    const minutes =
      Math.floor(duration.asMinutes()) - days * 24 * 60 - hours * 60;
    const seconds =
      Math.floor(duration.asSeconds()) -
      days * 24 * 60 * 60 -
      hours * 60 * 60 -
      minutes * 60;

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  const { days, hours, minutes, seconds } = time || {};

  return (
    <main className="flex pb-24 flex-col items-center">
      <h1 className="text-center text-4xl text-white font-bold">
        <Balancer>Countdown</Balancer>
      </h1>
      <p className="my-8 text-xl uppercase text-white">
        Febis Week Close Registration
      </p>
      <div className="flex items-start justify-center w-full gap-4 count-down-main">
        <div className="timer w-16">
          <div className=" bg-slate-100 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element matana-base-color-blue-text days font-Cormorant font-semibold text-2xl text-white text-center">
              {days}
            </h3>
          </div>
          <p className="text-lg font-Cormorant font-medium text-white mt-1 text-center w-full">
            Days
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
        <div className="timer w-16">
          <div className=" bg-slate-100 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element matana-base-color-blue-text hours font-Cormorant font-semibold text-2xl text-white text-center">
              {hours}
            </h3>
          </div>
          <p className="text-lg font-Cormorant font-normal text-white mt-1 text-center w-full">
            Hours
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
        <div className="timer w-16">
          <div className=" bg-slate-100 py-4 px-2 rounded-lg overflow-hidden">
            <h3 className="countdown-element matana-base-color-blue-text minutes font-Cormorant font-semibold text-2xl text-white text-center">
              {minutes}
            </h3>
          </div>
          <p className="text-lg font-Cormorant font-normal text-white mt-1 text-center w-full">
            Minutes
          </p>
        </div>
        <h3 className="font-manrope font-semibold text-2xl text-white">:</h3>
        <div className="timer w-16">
          <div className=" bg-slate-100 py-4 px-2 rounded-lg overflow-hidden ">
            <h3 className="countdown-element matana-base-color-blue-text seconds font-Cormorant font-semibold text-2xl text-white text-center animate-countinsecond">
              {seconds}
            </h3>
          </div>
          <p className="text-lg font-Cormorant font-normal text-white mt-1 text-center w-full">
            Seconds
          </p>
        </div>
      </div>
    </main>
  );
}
