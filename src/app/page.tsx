"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroCarouselLogo from '@/components/sections/hero/heroCarouselLogo/HeroCarouselLogo';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import { Cake, Coffee, Heart, Utensils } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "Menu",
          id: "#menu",
        },
        {
          name: "Experience",
          id: "#about",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      brandName="Boston Bakery & Café"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroCarouselLogo
      logoText="Boston Bakery & Café"
      description="Crafted Fresh. Served Warm. Remembered Always. Experience Bareilly’s most loved café, where every bite tells a story of quality, comfort, and care."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
        {
          text: "Visit Us",
          href: "#contact",
        },
      ]}
      slides={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/crop-hand-pouring-milk-into-cup_23-2147764919.jpg?_wi=1",
          imageAlt: "Fresh coffee pouring cup",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-waffle-cakes-with-fruits-dark-background_140725-133481.jpg?_wi=1",
          imageAlt: "Delicious dessert plate cake",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/coffee-wooden-table-restaurant_23-2147892937.jpg",
          imageAlt: "Cozy cafe warm atmosphere",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fusilli-pasta-with-mushrooms-chicken-top-view_114579-8207.jpg",
          imageAlt: "White sauce pasta gourmet",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/raw-pizza-oven_23-2147772089.jpg",
          imageAlt: "Signature wood fired pizza",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-cakes_1398-4865.jpg",
          imageAlt: "Fresh bakery pastries display",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "Bareilly Foodies",
        "Daily Coffee Lovers",
        "Bakery Enthusiasts",
        "Dessert Connoisseurs",
        "Café Culture",
        "Premium Tasters",
        "Quality Seekers",
      ]}
      title="Loved by 1000+ Customers"
      description="Join the growing community of café enthusiasts who choose Boston for their daily coffee and sweet cravings."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          title: "Gourmet Savory",
          description: "Authentic pasta, artisanal burgers, and wood-fired pizzas.",
          bentoComponent: "reveal-icon",
          icon: Utensils,
          imageSrc: "http://img.b2bpic.net/free-photo/pouring-fresh-milk-coffee-cup_23-2148230486.jpg",
          imageAlt: "Pouring fresh milk in coffee cup",
        },
        {
          title: "Artisan Desserts",
          description: "Freshly baked cakes, sizzling brownies, and decadent cookies.",
          bentoComponent: "reveal-icon",
          icon: Cake,
          imageSrc: "http://img.b2bpic.net/free-photo/crop-hand-pouring-milk-into-cup_23-2147764919.jpg?_wi=2",
          imageAlt: "Pouring fresh milk in coffee cup",
        },
        {
          title: "Premium Beverages",
          description: "Handcrafted coffees, signature shakes, and refreshing drinks.",
          bentoComponent: "reveal-icon",
          icon: Coffee,
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-yummy-waffle-cakes-with-fruits-dark-background_140725-133481.jpg?_wi=2",
          imageAlt: "Pouring fresh milk in coffee cup",
        },
      ]}
      title="More Than Food — It’s a Feeling"
      description="Discover why we are the preferred destination for food lovers in Bareilly."
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={true}
      tag="Our Essence"
      title="Your Everyday Escape"
      description="Whether it’s a solo coffee break, a romantic date, or quality time with friends, we provide the perfect ambiance."
      subdescription="We are committed to consistency and freshness, ensuring every visit is memorable."
      icon={Heart}
      imageSrc="http://img.b2bpic.net/free-photo/middle-age-friends-night-having-dinner_23-2149190932.jpg"
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          name: "White Sauce Pasta",
          price: "₹349",
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-sea-food-pasta-wooden-table_23-2148305673.jpg",
        },
        {
          id: "p2",
          name: "Signature Pizza",
          price: "₹499",
          imageSrc: "http://img.b2bpic.net/free-photo/bakery-still-life-with-handmade-bread_23-2148154415.jpg",
        },
        {
          id: "p3",
          name: "Cold Coffee",
          price: "₹199",
          imageSrc: "http://img.b2bpic.net/free-photo/iced-coffee-glasses_1220-3572.jpg",
        },
        {
          id: "p4",
          name: "Sizzling Brownie",
          price: "₹249",
          imageSrc: "http://img.b2bpic.net/free-photo/brownie-with-chocolate-sauce-powdered-sugar_140725-7775.jpg",
        },
        {
          id: "p5",
          name: "Grilled Wings",
          price: "₹299",
          imageSrc: "http://img.b2bpic.net/free-photo/baked-chicken-wings-with-teriyaki-sauce_2829-19754.jpg",
        },
        {
          id: "p6",
          name: "Artisan Cookies",
          price: "₹149",
          imageSrc: "http://img.b2bpic.net/free-photo/plain-chocolate-cookies-wooden-tray-blue-background-high-quality-photo_114579-75509.jpg",
        },
      ]}
      title="Signature Menu"
      description="Explore our chef-curated best sellers."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "1",
          name: "Sarah Johnson",
          role: "Food Blogger",
          company: "EatBareilly",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-sitting-indoor-urban-cafe_158595-670.jpg",
        },
        {
          id: "2",
          name: "Michael Chen",
          role: "Local Resident",
          company: "Frequent Guest",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/african-american-business-man-cafe-drinking-coffee_1303-10327.jpg",
        },
        {
          id: "3",
          name: "Emily Rodriguez",
          role: "Architect",
          company: "Studio Design",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-shot-friendly-asian-girl-smiling-serving-coffee-barista-giving-you-cup-coffee-prepare_1258-134034.jpg",
        },
        {
          id: "4",
          name: "David Kim",
          role: "Student",
          company: "Bareilly University",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-view-young-student-relaxing-campus_23-2148586629.jpg",
        },
        {
          id: "5",
          name: "Ananya Sharma",
          role: "Marketing",
          company: "Local Agency",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/motivated-fashion-designer-succeed_329181-18134.jpg",
        },
      ]}
      title="What Our Guests Say"
      description="Real feedback from our cherished customers."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "f1",
          title: "Do you offer reservations?",
          content: "Yes, you can reserve a table by contacting us directly.",
        },
        {
          id: "f2",
          title: "Are you pet friendly?",
          content: "Our outdoor seating area is pet friendly.",
        },
        {
          id: "f3",
          title: "Do you have home delivery?",
          content: "Yes, we partner with major delivery platforms.",
        },
      ]}
      sideTitle="We’re Always Improving"
      sideDescription="We listen to every customer and refine our service daily."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient",
      }}
      tag="Visit Us"
      title="Visit Us Today"
      description="Ekta Nagar, Civil Lines, Bareilly. We are open from 10 AM to 10 PM daily."
      imageSrc="http://img.b2bpic.net/free-photo/isometric-view-3d-rendering-city_23-2150900857.jpg"
      mediaAnimation="slide-up"
      mediaPosition="right"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Boston Bakery & Café"
      columns={[
        {
          title: "Quick Links",
          items: [
            {
              label: "Menu",
              href: "#menu",
            },
            {
              label: "Reservation",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
