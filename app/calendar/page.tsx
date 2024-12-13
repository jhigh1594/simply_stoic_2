"use client";

import { useState } from 'react';
import { Calendar } from '@/components/calendar/calendar';
import { CalendarHeader } from '@/components/calendar/calendar-header';
import { CalendarSidebar } from '@/components/calendar/calendar-sidebar';
import { format } from 'date-fns';

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <CalendarHeader 
          title="Practice Calendar"
          description={`View and track your daily practice - ${format(selectedDate, 'MMMM yyyy')}`}
        />
        
        <div className="grid lg:grid-cols-[1fr_300px] gap-8 mt-8">
          <div className="min-h-[700px]">
            <Calendar 
              selectedDate={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
          <CalendarSidebar selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  );
}