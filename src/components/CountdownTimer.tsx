import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const calculateTimeLeft = () => {
    const webinarDate = new Date('2024-02-01T15:00:00Z'); // Example date
    const difference = webinarDate.getTime() - new Date().getTime();
    
    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex space-x-4">
      {timeBlocks.map(({ label, value }) => (
        <div key={label} className="text-center">
          <div className="bg-white rounded-lg shadow-lg p-3 min-w-[70px]">
            <div className="text-2xl font-bold text-[#164F2C]">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}