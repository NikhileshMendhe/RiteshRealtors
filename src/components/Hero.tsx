import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Building2,
  Home,
  Layers3,
  MapPin,
  PhoneCall,
  Sparkles,
  Compass,
  Plus,
} from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
  onContactClick: () => void;
  onSelectCategory: (category: 'Plots' | 'Flats') => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreClick,
  onContactClick,
  onSelectCategory,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const [loaded, setLoaded] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  /* ================================================================
     INITIAL LOAD
  ================================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  /* ================================================================
     MOUSE PARALLAX
  ================================================================= */

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const handleMove = (event: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x =
        (event.clientX - rect.left) / rect.width - 0.5;

      const y =
        (event.clientY - rect.top) / rect.height - 0.5;

      setMouse({
        x: Math.max(-0.5, Math.min(0.5, x)),
        y: Math.max(-0.5, Math.min(0.5, y)),
      });
    };

    const handleLeave = () => {
      setMouse({
        x: 0,
        y: 0,
      });
    };

    hero.addEventListener('mousemove', handleMove);
    hero.addEventListener('mouseleave', handleLeave);

    return () => {
      hero.removeEventListener('mousemove', handleMove);
      hero.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-[#edf4f5]"
    >

      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute inset-0 bg-[#fcfaf7]" />

        {/* Warm glow */}
        <div
          className="
            absolute
            -left-[200px]
            top-[10%]
            h-[600px]
            w-[600px]
            rounded-full
            bg-orange-200/20
            blur-[150px]
          "
        />

        {/* Green glow */}
        <div
          className="
            absolute
            -right-[220px]
            top-[30%]
            h-[650px]
            w-[650px]
            rounded-full
            bg-emerald-200/20
            blur-[160px]
          "
        />

        {/* Center glow */}
        <div
          className="
            absolute
            left-1/2
            top-[40%]
            h-[700px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            bg-white/80
            blur-[130px]
          "
        />

        {/* Architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                rgba(50,50,45,0.08) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                rgba(50,50,45,0.08) 1px,
                transparent 1px
              )
            `,
            backgroundSize: '70px 70px',
            maskImage:
              'linear-gradient(to bottom, black, transparent 75%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, black, transparent 75%)',
          }}
        />

        {/* Giant background circles */}

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[900px]
            w-[900px]
            -translate-x-1/2
            rounded-full
            border
            border-stone-200/30
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-[43%]
            h-[1100px]
            w-[1100px]
            -translate-x-1/2
            rounded-full
            border
            border-dashed
            border-stone-200/25
          "
        />
      </div>

      {/* ============================================================
          NAVIGATION
      ============================================================ */}

      <header className="relative z-[100] mx-auto max-w-[1500px] px-4 pt-4 sm:px-7 lg:px-10">

        <nav
          className="
            flex
            h-[64px]
            items-center
            justify-between
            rounded-[20px]
            border
            border-stone-200/70
            bg-white/90
            px-4
            shadow-[0_10px_35px_rgba(40,35,25,0.06)]
            backdrop-blur-xl
            sm:px-6
          "
        >

          {/* BRAND */}

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            className="group flex items-center gap-2.5"
          >

            <div
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                overflow-hidden
                rounded-full
                border
                border-brand-green/30
                bg-white
                shadow-soft-sm
                group-hover:border-brand-orange
                transition-all
                duration-300
              "
            >
              <img
                src="/images/logo.png"
                alt="Ritesh Realtors Logo"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="text-left">

              <div className="font-serif text-[15px] font-bold leading-none text-brand-charcoal sm:text-[17px]">
                RITESH REALTORS
              </div>

              <div className="mt-1 text-[6px] font-black uppercase tracking-[0.2em] text-brand-green sm:text-[7px]">
                PROMOTER • BUILDER • DEVELOPERS
              </div>

            </div>

          </button>

          {/* DESKTOP NAV */}

          <div className="hidden items-center gap-1 rounded-full border border-stone-200 bg-white p-1 md:flex">

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }
              className="rounded-full bg-brand-orange px-5 py-2 text-[11px] font-bold text-white"
            >
              Home
            </button>

            {[
              ['About Us', 'about'],
              ['Plots & Flats', 'properties'],
              ['Why Nagpur', 'why-nagpur'],
              ['Contact', 'contact'],
              ['Social', 'social'],
            ].map(([label, id]) => (
              <button
                key={id}
                onClick={() =>
                  document
                    .getElementById(id)
                    ?.scrollIntoView({
                      behavior: 'smooth',
                    })
                }
                className="
                  rounded-full
                  px-4
                  py-2
                  text-[11px]
                  font-semibold
                  text-stone-600
                  transition-all
                  duration-300
                  hover:bg-stone-100
                  hover:text-brand-orange
                "
              >
                {label}
              </button>
            ))}

          </div>

          {/* RIGHT */}

          <div className="flex items-center gap-3">

            <button
              onClick={onContactClick}
              className="hidden text-brand-orange transition-transform hover:scale-110 sm:block"
            >
              <PhoneCall className="h-4 w-4" />
            </button>

            <button
              onClick={onExploreClick}
              className="
                group
                flex
                items-center
                gap-2
                rounded-full
                bg-brand-orange
                px-4
                py-2.5
                text-[10px]
                font-bold
                text-white
                shadow-[0_8px_25px_rgba(230,100,25,0.2)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_14px_35px_rgba(230,100,25,0.3)]
                sm:px-5
              "
            >
              Explore Projects

              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />

            </button>

          </div>

        </nav>

      </header>

      {/* ============================================================
          HERO CONTENT
      ============================================================ */}

      <div className="relative z-20 mx-auto max-w-[1500px] px-4 sm:px-7 lg:px-10">

        {/* TOP LABEL */}

        <div
          className={`
            flex
            justify-center
            pt-7
            transition-all
            duration-[1200ms]
            sm:pt-9
            ${loaded
              ? 'translate-y-0 opacity-100'
              : 'translate-y-6 opacity-0'
            }
          `}
        >

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-stone-200
              bg-white/80
              px-4
              py-2
              shadow-sm
              backdrop-blur-md
            "
          >

            <span className="relative h-2 w-2">

              <span className="absolute inset-0 animate-ping rounded-full bg-brand-orange/40" />

              <span className="relative block h-2 w-2 rounded-full bg-brand-orange" />

            </span>

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-stone-500 sm:text-[9px]">
              Premium Real Estate • Nagpur
            </span>

          </div>

        </div>

        {/* ==========================================================
            MAIN STAGE
        ========================================================== */}

        <div className="relative mx-auto mt-5 max-w-[1350px] sm:mt-7">

          {/* ========================================================
              FIND
          ======================================================== */}

          <div className="relative z-10 overflow-hidden text-center">

            <span
              className="
                block
                font-sans
                text-[20vw]
                font-semibold
                uppercase
                leading-[0.70]
                tracking-[-0.09em]
                text-[#202020]
                sm:text-[16vw]
                lg:text-[13vw]
              "
              style={{
                transform: loaded
                  ? `translate3d(${mouse.x * -4}px, ${mouse.y * -3}px, 0)`
                  : 'translateY(100px)',
                opacity: loaded ? 1 : 0,
                transition:
                  'transform 1.3s cubic-bezier(.16,1,.3,1), opacity 1s ease',
              }}
            >
              FIND
            </span>

          </div>

          {/* ========================================================
              YOUR
          ======================================================== */}

          <div className="relative z-10 overflow-hidden text-center">

            <span
              className="
                block
                font-sans
                text-[20vw]
                font-semibold
                uppercase
                leading-[0.70]
                tracking-[-0.09em]
                text-[#202020]
                sm:text-[16vw]
                lg:text-[13vw]
              "
              style={{
                transform: loaded
                  ? `translate3d(${mouse.x * 4}px, ${mouse.y * -2}px, 0)`
                  : 'translateY(100px)',
                opacity: loaded ? 1 : 0,
                transition:
                  'transform 1.35s cubic-bezier(.16,1,.3,1) .1s, opacity 1s ease .1s',
              }}
            >
              YOUR
            </span>

          </div>

          {/* ==========================================================
              SUPER ENHANCED CIRCLE
          ============================================================== */}

          <div
            className="
              hero-orbital-stage
              relative
              z-30
              mx-auto
              mt-8
              h-[70vw]
              w-[70vw]
              max-h-[640px]
              max-w-[640px]
              sm:mt-10
              sm:h-[560px]
              sm:w-[560px]
              lg:mt-12
              lg:h-[610px]
              lg:w-[610px]
            "
            style={{
              transform: `
                translate3d(
                  ${mouse.x * 12}px,
                  ${mouse.y * -12}px,
                  0
                )
              `,
              transition: 'transform 0.25s ease-out',
            }}
          >

            {/* ======================================================
                PULSE RINGS
            ====================================================== */}

            <div className="pulse-ring pulse-one" />

            <div className="pulse-ring pulse-two" />

            <div className="pulse-ring pulse-three" />

            {/* ======================================================
                OUTER ARCHITECTURAL RINGS
            ====================================================== */}

            <div className="orbit-ring orbit-one" />

            <div className="orbit-ring orbit-two" />

            <div className="orbit-ring orbit-three" />

            <div className="orbit-ring orbit-four" />

            {/* ======================================================
                ROTATING DASHED RING
            ====================================================== */}

            <div className="rotating-dashed-ring" />

            {/* ======================================================
                ORBITING ORANGE
            ====================================================== */}

            <div className="orbit-object orbit-orange">

              <div className="orbit-glow orange-glow" />

              <div className="orbit-dot orange-dot" />

            </div>

            {/* ======================================================
                ORBITING GREEN
            ====================================================== */}

            <div className="orbit-object orbit-green">

              <div className="orbit-glow green-glow" />

              <div className="orbit-dot green-dot" />

            </div>

            {/* ======================================================
                THIRD ORBIT PARTICLE
            ====================================================== */}

            <div className="orbit-object orbit-small">

              <div className="orbit-dot small-dot" />

            </div>

            {/* ======================================================
                FLOATING PARTICLES
            ====================================================== */}

            <span className="particle particle-one" />
            <span className="particle particle-two" />
            <span className="particle particle-three" />
            <span className="particle particle-four" />
            <span className="particle particle-five" />
            <span className="particle particle-six" />

            {/* ======================================================
                ROTATING COMPASS
            ====================================================== */}

            <div className="compass-wrapper">

              <div className="compass-ring">

                <Compass className="h-4 w-4 text-brand-orange" />

              </div>

            </div>

            {/* ======================================================
                MAIN GLOW
            ====================================================== */}

            <div
              className="
                absolute
                inset-[5%]
                rounded-full
                bg-brand-orange/10
                blur-[60px]
              "
            />

            <div
              className="
                absolute
                inset-[12%]
                rounded-full
                bg-emerald-100/30
                blur-[40px]
              "
            />

            {/* ======================================================
                MAIN IMAGE
            ====================================================== */}

            <div
              className="
                hero-image-container
                group
                absolute
                inset-0
                overflow-hidden
                rounded-full
                border-[8px]
                border-white
                bg-stone-200
                shadow-[0_35px_110px_rgba(35,30,20,0.22)]
                sm:border-[11px]
              "
            >

              {/* IMAGE */}

              <img
                src="/images/hero.jpg"
                alt="Ritesh Realtors property in Nagpur"
                className="
                  hero-property-image
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  ease-out
                  group-hover:scale-[1.08]
                "
              />

              {/* cinematic gradient */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/45
                  via-transparent
                  to-transparent
                "
              />

              {/* subtle color */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-orange-100/10
                  via-transparent
                  to-emerald-100/10
                "
              />

              {/* ====================================================
                  MOVING LIGHT
              ==================================================== */}

              <div className="hero-light absolute inset-y-0 left-[-60%] w-[30%] skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              {/* ====================================================
                  LOCATION
              ==================================================== */}

              <div className="absolute left-[9%] top-[9%]">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/80
                    bg-white/90
                    px-3
                    py-2
                    shadow-xl
                    backdrop-blur-xl
                    sm:px-4
                    sm:py-2.5
                  "
                >

                  <MapPin className="h-3 w-3 text-brand-orange sm:h-3.5 sm:w-3.5" />

                  <span className="text-[7px] font-black uppercase tracking-[0.12em] text-stone-700 sm:text-[9px]">
                    Nagpur, Maharashtra
                  </span>

                </div>

              </div>

              {/* ====================================================
                  BOTTOM LABEL
              ==================================================== */}

              <div className="absolute bottom-[9%] left-[9%]">

                <div
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/30
                    bg-black/20
                    px-3
                    py-2
                    text-white
                    backdrop-blur-md
                    sm:px-4
                  "
                >

                  <Building2 className="h-3 w-3 text-orange-200" />

                  <span className="text-[7px] font-bold uppercase tracking-[0.13em] sm:text-[9px]">
                    Spaces worth owning
                  </span>

                </div>

              </div>

              {/* ====================================================
                  IMAGE CORNER MARK
              ==================================================== */}

              <div
                className="
                  absolute
                  bottom-[9%]
                  right-[9%]
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/40
                  bg-white/10
                  backdrop-blur-md
                "
              >

                <ArrowDownRight className="h-4 w-4 text-white" />

              </div>

            </div>

            {/* ======================================================
                CORNER BRACKETS
            ====================================================== */}

            <div
              className="
                absolute
                left-[4%]
                top-[4%]
                h-12
                w-12
                border-l-2
                border-t-2
                border-brand-orange
                sm:h-16
                sm:w-16
              "
            />

            <div
              className="
                absolute
                bottom-[4%]
                right-[4%]
                h-12
                w-12
                border-b-2
                border-r-2
                border-brand-green
                sm:h-16
                sm:w-16
              "
            />

            {/* ======================================================
                PLUS MARKERS
            ====================================================== */}

            <Plus
              className="
                absolute
                left-[12%]
                top-[25%]
                h-4
                w-4
                text-brand-orange/60
              "
            />

            <Plus
              className="
                absolute
                right-[12%]
                bottom-[27%]
                h-4
                w-4
                text-brand-green/60
              "
            />

          </div>

          {/* ==========================================================
              PLACE
          ============================================================== */}

          <div
            className="relative z-40 mt-[-2px] overflow-hidden text-center"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded
                ? 'translateY(0)'
                : 'translateY(70px)',
              transition:
                'transform 1.2s cubic-bezier(.16,1,.3,1) .3s, opacity 1s ease .3s',
            }}
          >

            <span
              className="
                block
                font-sans
                text-[20vw]
                font-semibold
                uppercase
                leading-[0.70]
                tracking-[-0.09em]
                text-[#202020]
                sm:text-[16vw]
                lg:text-[13vw]
              "
            >
              PLACE
            </span>

            <div className="mt-5 flex items-center justify-center gap-3">

              <span className="h-[2px] w-8 rounded-full bg-brand-orange" />

              <span className="font-serif text-sm italic text-brand-green sm:text-base">
                Your next chapter starts here.
              </span>

              <span className="h-[2px] w-8 rounded-full bg-brand-green" />

            </div>

          </div>

          {/* ==========================================================
              LEFT EXPLORE
          ============================================================== */}

          <button
            onClick={onExploreClick}
            className="
              group
              absolute
              left-[0%]
              top-[49%]
              z-50
              hidden
              lg:flex
            "
          >

            <div className="flex flex-col items-center">

              <div
                className="
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-stone-300
                  bg-white/75
                  transition-all
                  duration-500
                  group-hover:border-brand-orange
                  group-hover:bg-brand-orange
                  group-hover:text-white
                "
              >

                <ArrowDownRight
                  className="
                    h-8
                    w-8
                    transition-transform
                    duration-500
                    group-hover:translate-x-1
                    group-hover:translate-y-1
                  "
                />

              </div>

              <span className="mt-4 text-[8px] font-black uppercase tracking-[0.25em] text-stone-400 group-hover:text-brand-orange">
                Explore Properties
              </span>

            </div>

          </button>

          {/* ==========================================================
              RIGHT DESCRIPTION
          ============================================================== */}

          <div
            className="
              absolute
              right-[0%]
              top-[50%]
              z-50
              hidden
              w-[190px]
              lg:block
            "
          >

            <div className="border-l-2 border-brand-orange/40 pl-4">

              <div className="mb-3 flex items-center gap-2">

                <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />

                <span className="text-[8px] font-black uppercase tracking-[0.2em] text-stone-400">
                  Ritesh Realtors
                </span>

              </div>

              <p className="text-[11px] leading-[1.7] text-stone-500">
                Carefully selected spaces for better living,
                smarter investment and a stronger future in
                Nagpur.
              </p>

            </div>

          </div>

          {/* ==========================================================
              PLOTS CARD
          ============================================================== */}

          <button
            onClick={() => {
              onSelectCategory('Plots');
              onExploreClick();
            }}
            className="
              hero-card-left
              group
              absolute
              bottom-[3%]
              left-[7%]
              z-50
              hidden
              lg:flex
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                rounded-[18px]
                border
                border-white
                bg-white/95
                p-3
                pr-5
                shadow-[0_20px_50px_rgba(40,35,25,0.13)]
                backdrop-blur-xl
                transition-all
                duration-300
                group-hover:-translate-y-2
              "
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <Layers3 className="h-4 w-4 text-brand-orange" />
              </div>

              <div className="text-left">

                <div className="text-[7px] font-black uppercase tracking-[0.2em] text-brand-orange">
                  Explore
                </div>

                <div className="mt-0.5 text-[11px] font-bold text-stone-700">
                  Plotted Properties
                </div>

              </div>

              <ArrowRight className="h-3 w-3 text-stone-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-orange" />

            </div>

          </button>

          {/* ==========================================================
              FLATS CARD
          ============================================================== */}

          <button
            onClick={() => {
              onSelectCategory('Flats');
              onExploreClick();
            }}
            className="
              hero-card-right
              group
              absolute
              bottom-[3%]
              right-[7%]
              z-50
              hidden
              lg:flex
            "
          >

            <div
              className="
                flex
                items-center
                gap-3
                rounded-[18px]
                border
                border-white
                bg-white/95
                p-3
                pr-5
                shadow-[0_20px_50px_rgba(40,35,25,0.13)]
                backdrop-blur-xl
                transition-all
                duration-300
                group-hover:-translate-y-2
              "
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
                <Home className="h-4 w-4 text-brand-green" />
              </div>

              <div className="text-left">

                <div className="text-[7px] font-black uppercase tracking-[0.2em] text-brand-green">
                  Explore
                </div>

                <div className="mt-0.5 text-[11px] font-bold text-stone-700">
                  Flats & Homes
                </div>

              </div>

              <ArrowRight className="h-3 w-3 text-stone-300 transition-transform group-hover:translate-x-1 group-hover:text-brand-green" />

            </div>

          </button>

          {/* ==========================================================
              SPARKLES
          ============================================================== */}

          <Sparkles
            className="
              sparkle-one
              absolute
              left-[18%]
              top-[18%]
              z-40
              h-5
              w-5
              text-brand-orange/60
            "
          />

          <Sparkles
            className="
              sparkle-two
              absolute
              right-[18%]
              top-[21%]
              z-40
              h-4
              w-4
              text-brand-green/60
            "
          />

        </div>

        {/* ============================================================
            MOBILE CTA
        ============================================================ */}

        <div className="relative z-50 mx-auto mt-8 grid max-w-md grid-cols-2 gap-3 pb-9 lg:hidden">

          <button
            onClick={() => {
              onSelectCategory('Plots');
              onExploreClick();
            }}
            className="
              flex
              min-h-[50px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-stone-200
              bg-white
              px-4
              text-xs
              font-bold
              text-stone-600
              shadow-sm
              active:scale-[0.98]
            "
          >
            <Layers3 className="h-4 w-4 text-brand-orange" />

            Explore Plots
          </button>

          <button
            onClick={() => {
              onSelectCategory('Flats');
              onExploreClick();
            }}
            className="
              flex
              min-h-[50px]
              items-center
              justify-center
              gap-2
              rounded-2xl
              border
              border-stone-200
              bg-white
              px-4
              text-xs
              font-bold
              text-stone-600
              shadow-sm
              active:scale-[0.98]
            "
          >
            <Home className="h-4 w-4 text-brand-green" />

            Explore Flats
          </button>

        </div>

      </div>

      {/* ==============================================================
          BOTTOM BAR
      ============================================================== */}

      <div className="relative z-50 mx-auto hidden max-w-[1500px] px-8 pb-4 lg:block lg:px-10">

        <div className="flex items-center justify-between border-t border-stone-200/70 pt-3">

          <div className="flex items-center gap-3">

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-stone-400">
              Residential
            </span>

            <span className="h-1 w-1 rounded-full bg-brand-orange" />

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-stone-400">
              Commercial
            </span>

            <span className="h-1 w-1 rounded-full bg-brand-green" />

            <span className="text-[8px] font-black uppercase tracking-[0.25em] text-stone-400">
              Plots
            </span>

          </div>

          <div className="flex items-center gap-2 text-[8px] font-black uppercase tracking-[0.25em] text-stone-400">

            <MapPin className="h-3 w-3 text-brand-orange" />

            Nagpur, Maharashtra

          </div>

        </div>

      </div>

      {/* ==============================================================
          ANIMATIONS
      ============================================================== */}

      <style>{`

        /* ============================================================
           ORBIT ROTATION
        ============================================================ */

        @keyframes rotateClockwise {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateCounter {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }


        /* ============================================================
           MAIN FLOAT
        ============================================================ */

        @keyframes mainFloat {

          0%,
          100% {
            transform:
              translateY(0)
              rotate(0deg);
          }

          25% {
            transform:
              translateY(-7px)
              rotate(0.25deg);
          }

          50% {
            transform:
              translateY(-14px)
              rotate(0deg);
          }

          75% {
            transform:
              translateY(-6px)
              rotate(-0.25deg);
          }

        }


        /* ============================================================
           PULSE
        ============================================================ */

        @keyframes pulseExpand {

          0% {
            transform:
              translate(-50%, -50%)
              scale(0.92);

            opacity: 0.45;
          }

          70% {
            transform:
              translate(-50%, -50%)
              scale(1.08);

            opacity: 0;
          }

          100% {
            opacity: 0;
          }

        }


        /* ============================================================
           PARTICLES
        ============================================================ */

        @keyframes particleFloat {

          0%,
          100% {
            transform:
              translate3d(0, 0, 0)
              scale(1);

            opacity: 0.25;
          }

          50% {
            transform:
              translate3d(12px, -18px, 0)
              scale(1.4);

            opacity: 0.9;
          }

        }


        /* ============================================================
           LIGHT SWEEP
        ============================================================ */

        @keyframes cinematicSweep {

          0% {
            transform:
              translateX(-180%)
              skewX(-20deg);
          }

          18%,
          100% {
            transform:
              translateX(600%)
              skewX(-20deg);
          }

        }


        /* ============================================================
           SPARKLE
        ============================================================ */

        @keyframes sparkleAnimation {

          0%,
          100% {
            transform:
              scale(1)
              rotate(0deg);

            opacity: 0.25;
          }

          50% {
            transform:
              scale(1.35)
              rotate(20deg);

            opacity: 1;
          }

        }


        /* ============================================================
           CARD FLOAT
        ============================================================ */

        @keyframes cardFloat {

          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }


        /* ============================================================
           RINGS
        ============================================================ */

        .orbit-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 9999px;
          pointer-events: none;
        }

        .orbit-one {
          width: 108%;
          height: 108%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(120, 110, 95, 0.20);
        }

        .orbit-two {
          width: 116%;
          height: 116%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(120, 110, 95, 0.13);
        }

        .orbit-three {
          width: 128%;
          height: 128%;
          transform: translate(-50%, -50%);
          border: 1px solid rgba(120, 110, 95, 0.09);
        }

        .orbit-four {
          width: 145%;
          height: 145%;
          transform: translate(-50%, -50%);
          border: 1px dashed rgba(120, 110, 95, 0.10);
        }


        /* ============================================================
           DASHED RING
        ============================================================ */

        .rotating-dashed-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 122%;
          height: 122%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 1px dashed rgba(230, 100, 25, 0.28);
          animation:
            rotateClockwise
            30s
            linear
            infinite;
          pointer-events: none;
        }


        /* ============================================================
           ORBIT OBJECT
        ============================================================ */

        .orbit-object {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 116%;
          height: 116%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          pointer-events: none;
        }

        .orbit-orange {
          animation:
            rotateClockwise
            16s
            linear
            infinite;
        }

        .orbit-green {
          animation:
            rotateCounter
            22s
            linear
            infinite;
        }

        .orbit-small {
          width: 135%;
          height: 135%;
          animation:
            rotateClockwise
            32s
            linear
            infinite;
        }


        /* ============================================================
           DOT
        ============================================================ */

        .orbit-dot {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
        }

        .orange-dot {
          width: 10px;
          height: 10px;
          background: #e66a20;
          box-shadow:
            0 0 0 5px rgba(230,106,32,0.10),
            0 0 25px rgba(230,106,32,0.35);
        }

        .green-dot {
          width: 9px;
          height: 9px;
          background: #15945b;
          box-shadow:
            0 0 0 5px rgba(21,148,91,0.10),
            0 0 22px rgba(21,148,91,0.35);
        }

        .small-dot {
          width: 5px;
          height: 5px;
          background: #202020;
        }


        /* ============================================================
           ORBIT GLOW
        ============================================================ */

        .orbit-glow {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          filter: blur(10px);
        }

        .orange-glow {
          width: 28px;
          height: 28px;
          background: rgba(230,106,32,0.20);
        }

        .green-glow {
          width: 25px;
          height: 25px;
          background: rgba(21,148,91,0.20);
        }


        /* ============================================================
           PULSE RINGS
        ============================================================ */

        .pulse-ring {
          position: absolute;
          left: 50%;
          top: 50%;
          border-radius: 50%;
          border: 1px solid rgba(230,106,32,0.22);
          pointer-events: none;
        }

        .pulse-one {
          width: 103%;
          height: 103%;
          animation:
            pulseExpand
            5s
            ease-out
            infinite;
        }

        .pulse-two {
          width: 103%;
          height: 103%;
          animation:
            pulseExpand
            5s
            ease-out
            1.7s
            infinite;
        }

        .pulse-three {
          width: 103%;
          height: 103%;
          animation:
            pulseExpand
            5s
            ease-out
            3.4s
            infinite;
        }


        /* ============================================================
           PARTICLES
        ============================================================ */

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .particle-one {
          width: 5px;
          height: 5px;
          left: 10%;
          top: 30%;
          background: #e66a20;
          animation:
            particleFloat
            4s
            ease-in-out
            infinite;
        }

        .particle-two {
          width: 4px;
          height: 4px;
          right: 12%;
          top: 23%;
          background: #15945b;
          animation:
            particleFloat
            5s
            ease-in-out
            0.8s
            infinite;
        }

        .particle-three {
          width: 3px;
          height: 3px;
          right: 6%;
          bottom: 35%;
          background: #202020;
          animation:
            particleFloat
            4.5s
            ease-in-out
            1.4s
            infinite;
        }

        .particle-four {
          width: 4px;
          height: 4px;
          left: 16%;
          bottom: 22%;
          background: #15945b;
          animation:
            particleFloat
            5.5s
            ease-in-out
            0.4s
            infinite;
        }

        .particle-five {
          width: 3px;
          height: 3px;
          left: 25%;
          top: 7%;
          background: #e66a20;
          animation:
            particleFloat
            4.5s
            ease-in-out
            1.8s
            infinite;
        }

        .particle-six {
          width: 3px;
          height: 3px;
          right: 25%;
          bottom: 7%;
          background: #202020;
          animation:
            particleFloat
            6s
            ease-in-out
            2s
            infinite;
        }


        /* ============================================================
           COMPASS
        ============================================================ */

        .compass-wrapper {
          position: absolute;
          right: 5%;
          top: 14%;
          z-index: 40;
          animation:
            rotateCounter
            18s
            linear
            infinite;
        }

        .compass-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(230,106,32,0.30);
          background: rgba(255,255,255,0.80);
          backdrop-filter: blur(10px);
        }


        /* ============================================================
           MAIN IMAGE
        ============================================================ */

        .hero-image-container {
          animation:
            mainFloat
            8s
            ease-in-out
            infinite;
        }


        /* ============================================================
           LIGHT
        ============================================================ */

        .hero-light {
          animation:
            cinematicSweep
            8s
            ease-in-out
            infinite;
        }


        /* ============================================================
           SPARKLES
        ============================================================ */

        .sparkle-one {
          animation:
            sparkleAnimation
            4s
            ease-in-out
            infinite;
        }

        .sparkle-two {
          animation:
            sparkleAnimation
            5s
            ease-in-out
            1s
            infinite;
        }


        /* ============================================================
           CARDS
        ============================================================ */

        .hero-card-left {
          animation:
            cardFloat
            5.5s
            ease-in-out
            infinite;
        }

        .hero-card-right {
          animation:
            cardFloat
            6s
            ease-in-out
            1s
            infinite;
        }


        /* ============================================================
           MOBILE
        ============================================================ */

        @media (max-width: 767px) {

          .hero-image-container {
            animation-duration: 9s;
          }

          .orbit-four {
            width: 155%;
            height: 155%;
          }

          .compass-wrapper {
            right: 1%;
            top: 11%;
          }

          .compass-ring {
            width: 30px;
            height: 30px;
          }

        }


        /* ============================================================
           REDUCED MOTION
        ============================================================ */

        @media (prefers-reduced-motion: reduce) {

          .hero-image-container,
          .rotating-dashed-ring,
          .orbit-orange,
          .orbit-green,
          .orbit-small,
          .pulse-ring,
          .particle,
          .compass-wrapper,
          .hero-light,
          .sparkle-one,
          .sparkle-two,
          .hero-card-left,
          .hero-card-right {
            animation: none !important;
          }

        }

      `}</style>

    </section>
  );
};