import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/hero";
import Stats from "../components/stats";
import LogoCloud from "../components/logoCloud";
import CTASection from "../components/ctaSection";
import Footer from "../components/footer";

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Stats />
    <LogoCloud />
    <CTASection />
    <Footer />
  </>
);

export default IndexPage;
