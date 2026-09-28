import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../../components/home/Hero';
import { QuickAccessCards } from '../../components/home/QuickAccessCards';
import { AboutSection } from '../../components/home/AboutSection';
import { WhyChooseUs } from '../../components/home/WhyChooseUs';
import { AcademicTabs } from '../../components/home/AcademicTabs';
import { LatestNoticesHome } from '../../components/home/LatestNoticesHome';
import { NewsEventsHome } from '../../components/home/NewsEventsHome';
import { StatsCounter } from '../../components/home/StatsCounter';

export const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>G.R. Patil College of Arts, Science & Commerce | Dombivli</title>
        <meta
          name="description"
          content="G.R. Patil College of Arts, Science & Commerce, BMS & Junior College located in Sonarpada, Dombivli. Affiliated to University of Mumbai. Admissions open for 2026-27."
        />
      </Helmet>

      <Hero />
      <QuickAccessCards />
      <AboutSection />
      <WhyChooseUs />
      <AcademicTabs />
      <LatestNoticesHome />
      <NewsEventsHome />
      <StatsCounter />
    </>
  );
};
