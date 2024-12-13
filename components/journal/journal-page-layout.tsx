interface JournalPageLayoutProps {
  children: React.ReactNode;
}

export function JournalPageLayout({ children }: JournalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        {children}
      </div>
    </div>
  );
}