"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardSeven from '@/components/sections/feature/FeatureCardSeven';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="medium"
        background="noiseDiagonalGradient"
        cardStyle="subtle-shadow"
        primaryButtonStyle="flat"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        { name: "Work", id: "showcase" },
        { name: "Services", id: "services" },
        { name: "Reviews", id: "testimonials" },
        { name: "Contact", id: "contact" },
      ]}
      brandName="NORTHSHORE HANDYMAN"
      button={{
        text: "022 329 9055",        href: "tel:0223299055"}}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{ variant: "rotated-rays-static" }}
      title="Craftsmanship the Shore trusts. Since 2013."
      description="Decks, fences, joinery, painting, repairs — quoted today, often started tomorrow. Glenfield-based. Servicing the entire North Shore."
      buttons={[
        { text: "Request a Free Quote", href: "#contact" },
        { text: "Call 022 329 9055", href: "tel:0223299055" },
      ]}
      mediaItems={[
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DjlYg1QgpUJkneAkkPsHSOjsBd/uploaded-1779149074585-zf0aff6z.png", imageAlt: "Finished deck" },
        { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DjlYg1QgpUJkneAkkPsHSOjsBd/uploaded-1779157472000-z8h0fc3p.png", imageAlt: "Outdoor living" }
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        { title: "Decks & Pergolas", description: "Custom builds and re-cladding, finished to last.", imageSrc: "http://img.b2bpic.net/free-photo/carpenter-man-using-tape-measure_23-2148748801.jpg" },
        { title: "Fencing & Gates", description: "Timber fences, gates, trellis — built straight, hung true.", imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530711.jpg" },
        { title: "Painting", description: "Walls, trims, weatherboards. Matched perfectly.", imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530695.jpg" },
        { title: "Property Maintenance", description: "The list of small jobs you've been putting off.", imageSrc: "http://img.b2bpic.net/free-photo/wooden-grain-worn-surface_23-2148394645.jpg" }
      ]}
      title="What Marc can build, fix, or finish for you."
      description="A comprehensive range of services delivered with an unwavering standard of quality."
    />
  </div>

  <div id="showcase" data-section="showcase">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        { id: "p1", brand: "Renovation", name: "Albany Villa Exterior", price: "Featured", rating: 5, reviewCount: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DjlYg1QgpUJkneAkkPsHSOjsBd/uploaded-1779149096897-k9lqp08n.png" },
        { id: "p2", brand: "Build", name: "Glenfield Deck & Pergola", price: "Featured", rating: 5, reviewCount: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DjlYg1QgpUJkneAkkPsHSOjsBd/uploaded-1779149084533-lxqp6l5l.png" },
        { id: "p3", brand: "Build", name: "Browns Bay Custom Fence", price: "Featured", rating: 5, reviewCount: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DjlYg1QgpUJkneAkkPsHSOjsBd/uploaded-1779148839242-2mssm4cd.png" }
      ]}
      title="Cinematic Project Showcase"
      description="High-quality project work demonstrating our commitment to craftsmanship across the Shore."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      showRating={true}
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        { id: "t1", name: "Nigel", handle: "Homeowner", testimonial: "Marc did a fantastic job, was very professional, thorough and careful.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/bright-airy-interior-with-desk-chair_23-2151985093.jpg" },
        { id: "t2", name: "Denise", handle: "Homeowner", testimonial: "Competitive quote, great communication; a job well done, on time.", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-riding-bicycle-near-white-lighthouse_23-2148176568.jpg" }
      ]}
      title="What the Shore says about Marc."
      description="41 verified ratings on NoCowboys. 93.4% approval. Every review is authentic."
      animationType="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        { id: "q1", title: "How quickly can you quote?", content: "Usually the same day." },
        { id: "q2", title: "Do you do small jobs?", content: "Yes — no job is too small." },
        { id: "q3", title: "Are quotes free?", content: "Always." }
      ]}
      title="Common Questions."
      description="Clear answers to help you get started."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardThree
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        { id: "callout", badge: "Base Rate", price: "$125", name: "Site Visit", buttons: [{ text: "Get a Free Quote", href: "#contact" }], features: ["Covers travel", "Covers admin"] },
        { id: "labour", badge: "Labour", price: "$60/hr", name: "Hourly Rate", buttons: [{ text: "Get a Free Quote", href: "#contact" }], features: ["High standard", "Clean finish"] }
      ]}
      title="No surprises. Just the numbers."
      description="Fair, transparent pricing to keep things simple."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{ variant: "plain" }}
      tag="Get in touch"
      title="Let's get it done properly."
      description="Request a free, same-day quote. Marc will respond quickly."
      imageSrc="http://img.b2bpic.net/free-photo/man-paints-with-white-paint-wooden-planks-man-industrial-concept-there-is-place-text-object-is-close-up_169016-4432.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="NORTHSHORE HANDYMAN"
      columns={[
        { title: "Contact", items: [{ label: "022 329 9055", href: "tel:0223299055" }, { label: "Glenfield, Auckland", href: "#" }] },
        { title: "Services", items: [{ label: "Decks & Fences", href: "#services" }, { label: "Renovations", href: "#services" }] }
      ]}
      copyrightText="© 2025 | Northshore Handyman"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}