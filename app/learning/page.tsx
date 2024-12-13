"use client";

import { useState } from 'react';
import { PageHeader } from '@/components/layout/page-header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { QuoteLibrary } from '@/components/learning/quote-library';
import { PracticeLibrary } from '@/components/learning/practice-library';

export default function LearningPage() {
  const [activeTab, setActiveTab] = useState('quotes');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <PageHeader
          title="Learning"
          description="Explore Stoic wisdom and practical exercises"
        />

        <Tabs
          defaultValue="quotes"
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-8"
        >
          <TabsList className="grid w-full grid-cols-2 max-w-[400px]">
            <TabsTrigger value="quotes">Quotes</TabsTrigger>
            <TabsTrigger value="practices">Practices</TabsTrigger>
          </TabsList>
          
          <TabsContent value="quotes" className="mt-6">
            <QuoteLibrary />
          </TabsContent>
          
          <TabsContent value="practices" className="mt-6">
            <PracticeLibrary />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}