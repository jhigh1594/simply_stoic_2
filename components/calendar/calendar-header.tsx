import { PageHeader } from '@/components/layout/page-header';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

interface CalendarHeaderProps {
  title: string;
  description: string;
}

export function CalendarHeader({ title, description }: CalendarHeaderProps) {
  return (
    <PageHeader title={title} description={description}>
      <Button variant="outline" size="sm">
        <Download className="h-4 w-4 mr-2" />
        Export Data
      </Button>
    </PageHeader>
  );
}