"use client";

import { morningTemplate } from '@/lib/templates/morning';
import { JournalHeader } from '@/components/journal/journal-header';
import { JournalForm } from '@/components/journal/journal-form';
import { JournalPageLayout } from '@/components/journal/journal-page-layout';
import { useJournalForm } from '@/lib/hooks/use-journal-form';

export default function MorningJournalPage() {
  const { responses, setResponses, handleSubmit, handleCancel } = useJournalForm(morningTemplate);

  return (
    <JournalPageLayout>
      <JournalHeader
        title={morningTemplate.name}
        description={morningTemplate.description}
      />
      
      <JournalForm
        template={morningTemplate}
        responses={responses}
        onResponsesChange={setResponses}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </JournalPageLayout>
  );
}