'use server';

/**
 * @fileOverview Provides AI-powered suggestions to improve portfolio content.
 *
 * - portfolioOptimizer - A function that optimizes portfolio content.
 * - PortfolioOptimizerInput - The input type for the portfolioOptimizer function.
 * - PortfolioOptimizerOutput - The return type for the portfolioOptimizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PortfolioOptimizerInputSchema = z.object({
  portfolioContent: z
    .string()
    .describe('The text content of the portfolio to be optimized.'),
});
export type PortfolioOptimizerInput = z.infer<typeof PortfolioOptimizerInputSchema>;

const PortfolioOptimizerOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions on how to improve the portfolio content.'),
});
export type PortfolioOptimizerOutput = z.infer<typeof PortfolioOptimizerOutputSchema>;

export async function portfolioOptimizer(input: PortfolioOptimizerInput): Promise<PortfolioOptimizerOutput> {
  return portfolioOptimizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'portfolioOptimizerPrompt',
  input: {schema: PortfolioOptimizerInputSchema},
  output: {schema: PortfolioOptimizerOutputSchema},
  prompt: `You are an AI portfolio optimization expert. Analyze the provided portfolio content and provide suggestions on how to improve it based on successful PM portfolios.

Portfolio Content: {{{portfolioContent}}}

Suggestions:`, 
});

const portfolioOptimizerFlow = ai.defineFlow(
  {
    name: 'portfolioOptimizerFlow',
    inputSchema: PortfolioOptimizerInputSchema,
    outputSchema: PortfolioOptimizerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
