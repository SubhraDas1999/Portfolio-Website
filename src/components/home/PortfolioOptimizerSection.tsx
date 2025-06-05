import SectionWrapper from '@/components/shared/SectionWrapper';
import PortfolioOptimizerClient from './PortfolioOptimizerClient';

const PortfolioOptimizerSection = () => {
  return (
    <SectionWrapper 
      id="optimizer" 
      title="AI Portfolio Optimizer" 
      subtitle="Leverage AI to refine your narrative and maximize impact."
    >
      <PortfolioOptimizerClient />
    </SectionWrapper>
  );
};

export default PortfolioOptimizerSection;
