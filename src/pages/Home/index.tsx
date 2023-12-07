import { HeroSection } from './components/HeroSection';
import { AdminPanelBanner } from './components/AdminPanelBanner';
import { Achievements } from './components/Achievements';
import { SupportedHardware } from './components/SupportedHardware';
import { Performance } from './components/Performance';
import './components/Temporary/styles.css';

function Home() {
  return (
    <>
      <HeroSection />
      <AdminPanelBanner />
      <Achievements />
      <SupportedHardware />
      <Performance />
    </>
  );
}

export default Home;