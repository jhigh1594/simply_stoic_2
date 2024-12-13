import { CalendarDays } from 'lucide-react';
import { format } from 'date-fns';

type JournalHeaderProps = {
  title: string;
  description: string;
};

export function JournalHeader({ title, description }: JournalHeaderProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-primary">{title}</h1>
        <div className="flex items-center text-muted-foreground">
          <CalendarDays className="h-5 w-5 mr-2" />
          <span>{format(new Date(), 'EEEE, MMMM d')}</span>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}