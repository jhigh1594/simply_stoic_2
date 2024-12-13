import { JournalPrompt } from '@/types/journal';
import { Textarea } from '@/components/ui/textarea';
import { MoodSelector } from '@/components/journal/mood-selector';
import { PrioritiesList } from '@/components/journal/priorities-list';
import { GratitudeInput } from '@/components/journal/gratitude-input';

type JournalPromptFormProps = {
  prompt: JournalPrompt;
  value: string;
  onChange: (value: string) => void;
};

export function JournalPromptForm({ prompt, value, onChange }: JournalPromptFormProps) {
  const renderPromptInput = () => {
    switch (prompt.type) {
      case 'mood':
        return <MoodSelector value={value} onChange={onChange} />;
      case 'priorities':
        return <PrioritiesList value={value} onChange={onChange} />;
      case 'gratitude':
        return <GratitudeInput value={value} onChange={onChange} />;
      default:
        return (
          <Textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Write your response here..."
            className="min-h-[100px]"
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <label className="text-lg font-medium">{prompt.text}</label>
      {renderPromptInput()}
    </div>
  );
}