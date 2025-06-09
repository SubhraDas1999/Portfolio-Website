
'use client';

import { useState, useTransition } from 'react';
import { portfolioOptimizer } from '@/ai/flows/portfolio-optimizer';
import type { PortfolioOptimizerOutput } from '@/ai/flows/portfolio-optimizer';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles, Wand2 } from 'lucide-react'; // Added Wand2
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


export default function PortfolioOptimizerClient() {
  const [portfolioContent, setPortfolioContent] = useState('');
  const [suggestions, setSuggestions] = useState<PortfolioOptimizerOutput | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuggestions(null);

    if (!portfolioContent.trim()) {
      setError("Portfolio content cannot be empty.");
      toast({
        title: "Input Error",
        description: "Please provide some portfolio content to analyze.",
        variant: "destructive",
      });
      return;
    }

    startTransition(async () => {
      try {
        const result = await portfolioOptimizer({ portfolioContent });
        setSuggestions(result);
        toast({
          title: "Analysis Complete",
          description: "AI suggestions have been generated.",
        });
      } catch (e) {
        console.error("AI Optimizer Error:", e);
        const errorMessage = e instanceof Error ? e.message : "An unknown error occurred.";
        setError(`Failed to get suggestions: ${errorMessage}`);
        toast({
          title: "Analysis Failed",
          description: `Could not generate suggestions. ${errorMessage}`,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <Card className="bg-card shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl text-primary flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-accent" />
          AI Portfolio Optimizer
        </CardTitle>
        <CardDescription>
          Paste your portfolio text below and get AI-powered suggestions for improvement.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Enter your portfolio content here (e.g., project descriptions, experience summaries)..."
            value={portfolioContent}
            onChange={(e) => setPortfolioContent(e.target.value)}
            rows={10}
            className="resize-none"
            disabled={isPending}
          />
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending} className="w-full md:w-auto bg-primary hover:bg-primary/90">
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-4 w-4" /> {/* Changed icon */}
                Get Suggestions
              </>
            )}
          </Button>
        </CardFooter>
      </form>
      {suggestions && (
        <CardContent>
          <h3 className="font-headline text-xl font-semibold mt-6 mb-3 text-primary">Suggestions:</h3>
          <div className="p-4 bg-muted rounded-md whitespace-pre-wrap text-sm text-muted-foreground">
            {suggestions.suggestions}
          </div>
        </CardContent>
      )}
    </Card>
  );
}
