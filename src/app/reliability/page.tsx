import reliabilityImg from '/public/reliability.jpg';
import Hero from '@/components/hero';

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="manual welding"
      title="Reliability is our number one priority"
    />
  );
}
