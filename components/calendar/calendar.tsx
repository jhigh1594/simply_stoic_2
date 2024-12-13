"use client";

import { Calendar as CalendarPrimitive } from '@/components/ui/calendar';
import { Card } from '@/components/ui/card';

interface CalendarProps {
  selectedDate: Date;
  onSelect: (date: Date) => void;
}

export function Calendar({ selectedDate, onSelect }: CalendarProps) {
  return (
    <Card className="p-6 h-full flex flex-col">
      <CalendarPrimitive
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && onSelect(date)}
        className="w-full h-full"
        classNames={{
          months: "w-full flex flex-col space-y-4",
          month: "w-full",
          caption: "flex justify-center pt-1 relative items-center mb-8",
          caption_label: "text-xl font-semibold",
          nav: "space-x-1 flex items-center",
          nav_button: "h-10 w-10 bg-transparent p-0 hover:bg-accent rounded-md transition-colors",
          nav_button_previous: "absolute left-1",
          nav_button_next: "absolute right-1",
          table: "w-full border-collapse",
          head_row: "flex w-full mb-2",
          head_cell: "text-muted-foreground rounded-md w-full font-medium text-base p-2 text-center",
          row: "flex w-full mt-4",
          cell: "relative w-full p-0 text-center hover:bg-accent hover:text-accent-foreground focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent rounded-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md",
          day: "h-12 w-full p-0 font-normal aria-selected:opacity-100 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors",
          day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
          day_today: "bg-accent text-accent-foreground",
          day_outside: "opacity-50",
          day_disabled: "opacity-50",
          day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
          day_hidden: "invisible",
        }}
        modifiers={{
          completed: [new Date('2024-03-19'), new Date('2024-03-20')],
          missed: [new Date('2024-03-18')]
        }}
        modifiersStyles={{
          completed: {
            backgroundColor: 'hsl(var(--primary))',
            color: 'hsl(var(--primary-foreground))'
          },
          missed: {
            backgroundColor: 'hsl(var(--destructive))',
            color: 'hsl(var(--destructive-foreground))'
          }
        }}
      />
    </Card>
  );
}