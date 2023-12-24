import { HeroSection } from './components/HeroSection';
import { Achievements } from './components/Achievements';
import { SupportedHardware } from './components/SupportedHardware';
import { Performance } from './components/Performance';
import './components/Temporary/styles.css';
import { Reliability } from './components/Reliability';
import { AdminPanelBanner } from '../../components/AdminPanelBanner';
import { Income } from './components/Income';

function Home() {
  return (
    <>
      <HeroSection />
      <Achievements />
      <Reliability />
      <AdminPanelBanner />
      <Income />
      <SupportedHardware />
      <Performance />
    </>
  );
}

export default Home;