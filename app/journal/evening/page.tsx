"use client";

import { eveningTemplate } from '@/lib/templates/evening';
import { JournalHeader } from '@/components/journal/journal-header';
import { JournalForm } from '@/components/journal/journal-form';
import { JournalPageLayout } from '@/components/journal/journal-page-layout';
import { useJournalForm } from '@/lib/hooks/use-journal-form';

export default function EveningJournalPage() {
  const { responses, setResponses, handleSubmit, handleCancel } = useJournalForm(eveningTemplate);

  return (
    <JournalPageLayout>
      <JournalHeader
        title={eveningTemplate.name}
        description={eveningTemplate.description}
      />
      
      <JournalForm
        template={eveningTemplate}
        responses={responses}
        onResponsesChange={setResponses}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </JournalPageLayout>
  );
}