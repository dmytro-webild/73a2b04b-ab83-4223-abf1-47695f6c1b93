"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumSmall"
        sizing="large"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Work",
          id: "showcase",
        },
        {
          name: "Services",
          id: "services",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="NORTHSHORE HANDYMAN"
      button={{
        text: "022 329 9055",
        href: "tel:0223299055",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "radial-gradient",
      }}
      title="Craftsmanship the Shore trusts. Since 2013."
      description="Decks, fences, joinery, painting, repairs — quoted today, often started tomorrow. Glenfield-based. Servicing the entire North Shore."
      kpis={[
        {
          value: "93.4%",
          label: "Approval",
        },
        {
          value: "41",
          label: "Verified Ratings",
        },
        {
          value: "11+",
          label: "Years Active",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Request a Free Quote",
          href: "#contact",
        },
        {
          text: "Call 022 329 9055",
          href: "tel:0223299055",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-bamboo-with-ornaments_1137-251.jpg"
      imageAlt="A finished deck at sunset"
      mediaAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/stones-natural-room-interior-design_23-2151890380.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/rustic-patio-furniture-house-deck-with-vegetation_23-2150698278.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-female-ballerina-dancing-indoors-botanical-garden_23-2149344149.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cider-michigan_181624-26617.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/cottagecore-aesthetic-illustrated_23-2151855314.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Trusted by 400+ local homeowners"
      marqueeItems={[
        {
          type: "text",
          text: "Licensed & Insured",
        },
        {
          type: "text",
          text: "Family Owned",
        },
        {
          type: "text",
          text: "Same-Day Quotes",
        },
        {
          type: "text",
          text: "Shore Local",
        },
        {
          type: "text",
          text: "Guaranteed Quality",
        },
      ]}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",
          title: "Decks & Pergolas",
          author: "Custom",
          description: "Custom builds and re-cladding, finished to last.",
          tags: [
            "Construction",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/carpenter-man-using-tape-measure_23-2148748801.jpg",
        },
        {
          id: "f2",
          title: "Fencing & Gates",
          author: "Custom",
          description: "Timber fences, gates, trellis — built straight, hung true.",
          tags: [
            "Construction",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530711.jpg",
        },
        {
          id: "f3",
          title: "Painting",
          author: "Quality",
          description: "Walls, trims, weatherboards. Matched perfectly.",
          tags: [
            "Finishing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/construction-worker-using-hammer-job-site_23-2150530695.jpg",
        },
        {
          id: "f4",
          title: "Property Maintenance",
          author: "Small Jobs",
          description: "The list of small jobs you've been putting off.",
          tags: [
            "General",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/wooden-grain-worn-surface_23-2148394645.jpg",
        },
        {
          id: "f5",
          title: "Joinery",
          author: "Custom",
          description: "Wardrobes, shelving, built-in storage.",
          tags: [
            "Finishing",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/performing-housework-gentle-dreamy-atmosphere_23-2151469427.jpg",
        },
        {
          id: "f6",
          title: "Renovations",
          author: "General",
          description: "Doors, windows, floors, kitchens — fixed or replaced.",
          tags: [
            "General",
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/carpentry-concept_23-2147773757.jpg",
        },
      ]}
      title="What Marc can build, fix, or finish for you."
      description="A comprehensive range of services delivered with an unwavering standard of quality."
    />
  </div>

  <div id="showcase" data-section="showcase">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "Albany Villa Exterior",
          price: "Renovation",
          imageSrc: "http://img.b2bpic.net/free-photo/restaurant-entrance-with-wood-doors-two-turquoise-chairs-with-plant_140725-2569.jpg",
        },
        {
          id: "p2",
          name: "Glenfield Deck & Pergola",
          price: "Build",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-woodworking-tools-rack-used-carving-wood-surfaces_482257-97763.jpg",
        },
        {
          id: "p3",
          name: "Browns Bay Custom Fence",
          price: "Build",
          imageSrc: "http://img.b2bpic.net/free-photo/fashion-bearded-hipster-posing-fence-style-diversity_482257-40662.jpg",
        },
        {
          id: "p4",
          name: "Devonport Rental Turnaround",
          price: "Finish",
          imageSrc: "http://img.b2bpic.net/free-photo/living-room-interior-luxury-industrial-style_53876-134088.jpg",
        },
        {
          id: "p5",
          name: "Takapuna Modern Joinery",
          price: "Build",
          imageSrc: "http://img.b2bpic.net/free-photo/skilful-gardener-using-highaltitude-hedge-trimmer-while-shaping-bush-topiary-garden-side-view_7502-10480.jpg",
        },
        {
          id: "p6",
          name: "Mairangi Bay Exterior Paint",
          price: "Finish",
          imageSrc: "http://img.b2bpic.net/free-photo/metallic-background-modern-abstract-wall_23-2148744339.jpg",
        },
      ]}
      title="Cinematic Project Showcase"
      description="High-quality project work demonstrating our commitment to craftsmanship across the Shore."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Exceptional Quality",
          quote: "Marc did a fantastic job, was very professional, thorough and careful.",
          name: "Nigel",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/bright-airy-interior-with-desk-chair_23-2151985093.jpg",
        },
        {
          id: "t2",
          title: "Great Communication",
          quote: "Competitive quote, great communication; a job well done, on time.",
          name: "Denise",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/man-riding-bicycle-near-white-lighthouse_23-2148176568.jpg",
        },
        {
          id: "t3",
          title: "Reliable & Diligent",
          quote: "Highly reliable and trustable. Prompt, efficient, and diligent.",
          name: "William",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/green-doors-with-yellow-square-panels-bold-facade-colorful-geometric-doorway_169016-70864.jpg",
        },
        {
          id: "t4",
          title: "Property Turnaround",
          quote: "Marc and his team undertook a major clean-up and renovation.",
          name: "Marissa",
          role: "Landlord",
          imageSrc: "http://img.b2bpic.net/free-photo/man-paints-with-white-paint-wooden-planks-man-industrial-concept-there-is-place-text-object-is-close-up_169016-4432.jpg",
        },
        {
          id: "t5",
          title: "Value & Skill",
          quote: "Marc was awesome. Very quick, did extra work, and very reasonable.",
          name: "Rebecca",
          role: "Homeowner",
          imageSrc: "http://img.b2bpic.net/free-photo/bright-interior-church-with-stainedglass-windows-view-from_169016-21667.jpg",
        },
      ]}
      title="What the Shore says about Marc."
      description="41 verified ratings on NoCowboys. 93.4% approval. Every review is authentic."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How quickly can you quote?",
          content: "Usually the same day.",
        },
        {
          id: "q2",
          title: "Do you do small jobs?",
          content: "Yes — no job is too small.",
        },
        {
          id: "q3",
          title: "Are quotes free?",
          content: "Always.",
        },
        {
          id: "q4",
          title: "Do you work with landlords?",
          content: "Yes, regularly — for rental turnarounds and maintenance.",
        },
        {
          id: "q5",
          title: "What areas do you cover?",
          content: "The entire North Shore from Devonport to Albany.",
        },
        {
          id: "q6",
          title: "How do I get started?",
          content: "Call 022 329 9055 or fill in the form below.",
        },
      ]}
      title="Common Questions."
      description="Clear answers to help you get started."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardTwo
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      plans={[
        {
          id: "callout",
          badge: "Base Rate",
          price: "$125",
          subtitle: "Incl. GST",
          features: [
            "Covers travel",
            "Covers admin",
            "Fast response",
          ],
          buttons: [
            {
              text: "Get a Free Quote",
              href: "#contact",
            },
          ],
        },
        {
          id: "labour",
          badge: "Labour",
          price: "$60/hr",
          subtitle: "Incl. GST",
          features: [
            "High standard",
            "Efficiency",
            "Clean finish",
          ],
          buttons: [
            {
              text: "Get a Free Quote",
              href: "#contact",
            },
          ],
        },
      ]}
      title="No surprises. Just the numbers."
      description="Fair, transparent pricing to keep things simple."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "gradient-bars",
      }}
      tag="Get in touch"
      title="Let's get it done properly."
      description="Request a free, same-day quote. Marc will respond quickly."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/restaurant-with-closed-umbrellas_1127-2150.jpg"
      logoText="NORTHSHORE HANDYMAN"
      columns={[
        {
          title: "Contact",
          items: [
            {
              label: "022 329 9055",
              href: "tel:0223299055",
            },
            {
              label: "Glenfield, Auckland",
              href: "#",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Decks & Fences",
              href: "#services",
            },
            {
              label: "Renovations",
              href: "#services",
            },
            {
              label: "Maintenance",
              href: "#services",
            },
          ],
        },
      ]}
      copyrightText="© 2025 | Northshore Handyman"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
