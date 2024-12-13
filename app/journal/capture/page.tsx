"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export default function QuickCapturePage() {
  const [thought, setThought] = useState('');
  const { toast } = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    if (!thought.trim()) return;

    try {
      // TODO: Implement save functionality
      toast({
        title: "Thought Captured",
        description: "Your quick note has been saved successfully.",
      });
      router.push('/dashboard');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save your note. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card className="p-6">
          <h1 className="text-2xl font-bold mb-4">Quick Capture</h1>
          <p className="text-muted-foreground mb-6">
            Quickly capture your thoughts, ideas, or reflections
          </p>
          
          <div className="space-y-4">
            <Textarea
              value={thought}
              onChange={(e) => setThought(e.target.value)}
              placeholder="What's on your mind?"
              className="min-h-[200px]"
            />
            
            <div className="flex justify-end gap-4">
              <Button variant="outline" onClick={() => router.push('/dashboard')}>
                Cancel
              </Button>
              <Button onClick={handleSubmit}>
                Save
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}