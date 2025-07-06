import React, { useEffect, useRef, useState } from "react";
import {
  TbArrowNarrowRightDashed,
  TbArrowNarrowLeftDashed,
} from "react-icons/tb";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Onbox = () => {
  const textRef = useRef();
  const navRef = useRef();
  const oneLineRef = useRef();
  const videoSectionRef = useRef();
  const videoRef = useRef();
  const servicesRef = useRef();
  const gridvideo1Ref = useRef();
  const gridvideo2Ref = useRef();
  const gridvideo3Ref = useRef();
  const gridvideo4Ref = useRef();
  // Black button group refs
  const arrowLRef = useRef();
  const arrowRRef = useRef();
  const buttonRef = useRef();
  // Orange button group refs
  const arrowLRef2 = useRef();
  const arrowRRef2 = useRef();
  const buttonRef2 = useRef();
  // Article refs
  const processRef = useRef();
  const reviewsRef = useRef();
  const marqueeRef = useRef();
  const [currentReview, setCurrentReview] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const reviews = [
    {
      author: "Jeannine Bartz",
      position: "Director of Communications, Product Care Recycling",
      text: "ONBOX did a wonderful job and provided excellent service.They have very high standards for their work, both visually and functionally.",
    },
    {
      author: "Spencer Mackoff",
      position: "Founder, Summer Smash Tennis",
      text: "From brand to website, the quality or work and attention to detail is incredibly high. Their team is professional, patient,and thoughtful in their creative approach. Choose this agency if you are looking for an enjoyable process and high end product.",
    },
    {
      author: "Sebastian Bryers",
      position: "Ora Organic",
      text: "ONBOX treat each project like its their own company - making us feel like they're part of our team rather than just another agency or contractor.",
    },
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      const letters = textRef.current.children;

      const tl = gsap.timeline();

      // 1. Letters enter
      tl.fromTo(
        letters,
        { x: 900, y: 300, opacity: 0 },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1.8,
          ease: "power4.out",
          stagger: { each: 0.15, from: "start" },
        }
      )
        // 2. ONBOX lift
        .to(textRef.current, {
          y: -90,
          duration: 1,
          ease: "power2.out",
        })
        // 3. Navbar
        .from(
          navRef.current.children,
          {
            y: -30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
            ease: "power2.out",
          },
          "<"
        )
        // 4. Tagline
        .from(oneLineRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.3,
          ease: "elastic.out(1, 0.3)",
        });

      // 5. Video section fade in
      tl.from(
        videoSectionRef.current,
        {
          opacity: 0,
          y: 50,
          delay: 0.1,
          duration: 1,
          ease: "power2.out",
        },
        "<"
      );
      // 6. Scroll-triggered video expand
      gsap.to(videoRef.current, {
        scale: 1.2,
        height: "100vh",
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      //7.grid video fade in
      gsap.from(gridvideo1Ref.current, {
        y: 80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridvideo1Ref.current,
          start: "top 95%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(gridvideo2Ref.current, {
        y: 120,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridvideo2Ref.current,
          start: "top 95%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(gridvideo3Ref.current, {
        y: 80,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridvideo3Ref.current,
          start: "top 95%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.from(gridvideo4Ref.current, {
        y: 120,
        opacity: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: gridvideo4Ref.current,
          start: "top 95%",
          end: "top 60%",
          scrub: true,
        },
      });
      //8. Process section

      gsap.to(processRef.current, {
        backgroundColor: "#000000",
        color: "#ffffff",
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top -10%",
          end: "top 30%",
          scrub: 2,
        },
      });

      gsap.to(processRef.current, {
        backgroundColor: "#1e1e1e",
        color: "#000000",
        opacity: 0,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: processRef.current,
          start: "bottom 90%",
          end: "bottom 60%",
          scrub: 2,
        },
      });
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 30,
        ease: "linear",
        repeat: -1,
      });
    });

    // Set initial states for black button group
    gsap.set(arrowLRef.current, { x: -20, opacity: 0 });
    gsap.set(buttonRef.current, { x: -6 });
    gsap.set(arrowRRef.current, { x: -6 });

    // Set initial states for orange button group
    gsap.set(arrowLRef2.current, { x: -20, opacity: 0 });
    gsap.set(buttonRef2.current, { x: -6 });
    gsap.set(arrowRRef2.current, { x: -6 });

    // Reviews section animation
    const interval = setInterval(() => {
      gsap.to(reviewsRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentReview((prev) => (prev + 1) % reviews.length);
          gsap.to(reviewsRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    }, 3000); // every 3 seconds
    return () => {
      clearInterval(interval); // cleanup interval
      ctx.revert(); // cleanup gsap context
    };
  }, []);

  // Black button handlers
  const mouseEntered = () => {
    gsap.to(arrowRRef.current, {
      x: 40,
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(buttonRef.current, {
      x: 20,
      duration: 0.3,
    });
    gsap.to(arrowLRef.current, {
      x: 20,
      opacity: 1,
      duration: 0.3,
    });
  };
  const mouseLeft = () => {
    gsap.to(arrowRRef.current, {
      x: -6,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(buttonRef.current, {
      x: -6,
      duration: 0.3,
    });
    gsap.to(arrowLRef.current, {
      x: -20,
      opacity: 0,
      duration: 0.3,
    });
  };

  // Orange button handlers
  const mouseEntered2 = () => {
    gsap.to(arrowRRef2.current, {
      x: 40,
      opacity: 0,
      duration: 0.3,
    });
    gsap.to(buttonRef2.current, {
      x: 20,
      duration: 0.3,
    });
    gsap.to(arrowLRef2.current, {
      x: 20,
      opacity: 1,
      duration: 0.3,
    });
  };
  const mouseLeft2 = () => {
    gsap.to(arrowRRef2.current, {
      x: -6,
      opacity: 1,
      duration: 0.3,
    });
    gsap.to(buttonRef2.current, {
      x: -6,
      duration: 0.3,
    });
    gsap.to(arrowLRef2.current, {
      x: -20,
      opacity: 0,
      duration: 0.3,
    });
  };

  // Work with us marquee handlers
  const mouseEnteredWWS = () => {
    setIsHovered(true);
    gsap.to(marqueeRef.current, {
      backgroundColor: "#ff8c00",
      color: "#000000",
    });
  };
  const mouseExitedWWS = () => {
    setIsHovered(false);
    gsap.to(marqueeRef.current, {
      backgroundColor: "#e1e1e1",
      color: "#000000",
    });
  };
  return (
    <>
      {/* navbar */}
      <section className="h-[80vh] w-full flex flex-col items-center pt-10 text-black">
        <div className="w-full">
          <Navbar ref={navRef} />
        </div>
        {/*Onbox text*/}
        <div
          ref={textRef}
          className="font-black text-[23rem] leading-none text-center overflow-hidden tracking-tight flex gap-0"
        >
          {["O", "N", "B", "O", "X"].map((letter, index) => (
            <span key={index} className="inline-block">
              {letter}
            </span>
          ))}
        </div>
        {/*one liner */}
        <div ref={oneLineRef} className="text-gray-600">
          A DESIGN STUDIO FOR PEOPLE WITH IDEAS
        </div>
      </section>

      {/* Video Section */}
      <div
        ref={videoSectionRef}
        className="overflow-hidden relative flex justify-center items-center z-0"
      >
        <video
          src="video.mp4"
          ref={videoRef}
          className="w-5/6 h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>
      {/* services */}
      <div ref={servicesRef} className="h-[75vh] flex sm:flex-row flex-col">
        <div className="text-4xl font-semibold pt-50 pl-5 flex-1">
          <p>
            We partner with brands looking to build impactful identities, launch
            engaging websites, and create innovative products.
          </p>
        </div>
        <div className="flex-1 pl-30">
          <div className="p-25 pt-50 space-y-5 text-gray-700">
            <p>OUR SERVICES</p>
            <div className="flex flex-row gap-3 w-full">
              <div className="flex flex-col gap-2 w-full">
                <p className="border-b-2 py-3">Website Design</p>
                <p className="border-b-2 py-3">Product Design</p>
                <p className="border-b-2 py-3">Brand Identity</p>
                <p className="py-3">Development</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="border-b-2 py-3">E-Commerce</p>
                <p className="border-b-2 py-3">Packaging</p>
                <p className="border-b-2 py-3">Pitch Deck</p>
                <p className="py-3">Product MVP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Work */}
      <div className="grid grid-cols-2 gap-5 space-y-14 pt-10 px-7">
        {/* Grid Item 1 */}
        <div>
          <div
            ref={gridvideo1Ref}
            className="relative w-full h-[68vh] rounded-lg overflow-hidden group"
          >
            <video
              src="grid1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 rounded-lg"
            />
            <video
              src="gridvideo1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold">Arnold's Pump Club</p>
            <p className="text-md text-gray-700 mt-2">
              Creating a community for the one and only Arnold Schwarzenegger.
            </p>
          </div>
        </div>

        {/* Grid Item 2 */}
        <div>
          <div
            ref={gridvideo2Ref}
            className="relative w-full h-[68vh] rounded-lg overflow-hidden group"
          >
            <video
              src="grid2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 rounded-lg"
            />
            <video
              src="gridvideo2.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold">June Science</p>
            <p className="text-md text-gray-700 mt-2">
              Designing the next generation of targeted probiotics.
            </p>
          </div>
        </div>

        {/* Grid Item 3 - image to image */}
        <div>
          <div
            ref={gridvideo3Ref}
            className="relative w-full h-[68vh] rounded-lg overflow-hidden group"
          >
            <img
              src="grid3.png"
              className="w-full h-full object-cover absolute inset-0 rounded-lg"
              alt=""
            />
            <video
              src="gridvideo3.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold">Summer Smash Tennis</p>
            <p className="text-md text-gray-700 mt-2">
              A smashing brand for Vancouver's premier tennis school.
            </p>
          </div>
        </div>

        {/* Grid Item 4 */}
        <div>
          <div
            ref={gridvideo4Ref}
            className="relative w-full h-[68vh] rounded-lg overflow-hidden group"
          >
            <video
              src="grid4.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 rounded-lg"
            />
            <video
              src="gridvideo4.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"
            />
          </div>
          <div className="mt-6">
            <p className="text-2xl font-semibold">Stocktwits</p>
            <p className="text-md text-gray-700 mt-2">
              Rebranding the world's largest social platform for investors and
              traders.
            </p>
          </div>
        </div>
      </div>
      {/*button*/}
      <div className="flex justify-center items-center pt-8 flex-row">
        <span
          className="flex flex-row gap-3 items-center bg-black rounded-sm py-2"
          onMouseEnter={mouseEntered}
          onMouseLeave={mouseLeft}
        >
          <TbArrowNarrowRightDashed ref={arrowLRef} color="white" size={20} />
          <button ref={buttonRef} className="text-white bg-black text-lg">
            VIEW ALL WORK
          </button>
          <TbArrowNarrowRightDashed ref={arrowRRef} color="white" size={20} />
        </span>
      </div>
      {/*process */}
      <div
        ref={processRef}
        className="flex flex-col text-black bg-[#e1e1e1] items-center pt-100 w-full"
      >
        <div className="flex flex-row w-full px-20">
          <div className="flex-1">all videos</div>
          <div className="flex-1">
            <p className="text-7xl">From Vision to Reality</p>
            <div className="grid grid-cols-2 gap-15 pt-10">
              <div>
                <p className="text-2xl">Discovery</p>
                <p>We start by listening and understanding your goals.</p>
              </div>
              <div>
                <p className="text-2xl">Strategy</p>
                <p>We refine insights into actionable roadmaps.</p>
              </div>
              <div>
                <p className="text-2xl">Concept</p>
                <p>We bring ideas to life through thoughtful exploration.</p>
              </div>
              <div>
                <p className="text-2xl">Production</p>
                <p>We deliver with precision from design to execution.</p>
              </div>
            </div>
            <div className="flex pt-8 flex-row">
              <span
                className="flex flex-row gap-3 items-center bg-orange-600 rounded-sm py-2"
                onMouseEnter={mouseEntered2}
                onMouseLeave={mouseLeft2}
              >
                <TbArrowNarrowRightDashed
                  ref={arrowLRef2}
                  color="black"
                  size={20}
                />
                <button
                  ref={buttonRef2}
                  className="text-black bg-orange-600 text-lg"
                >
                  OUR PROCESS
                </button>
                <TbArrowNarrowRightDashed
                  ref={arrowRRef2}
                  color="black"
                  size={20}
                />
              </span>
            </div>
          </div>
        </div>
        {/*review*/}
        <div className="flex flex-row w-full pt-50 pb-100">
          <div className="flex-1 text-gray-700">FEATURED CLIENTS</div>
          <div ref={reviewsRef} className="flex-2 text-white px-10">
            <p className="text-4xl mb-30 h-50">
              "{reviews[currentReview].text}"
            </p>
            <p className="mt-4 ">{reviews[currentReview].author}</p>
            <p className="text-xs text-gray-400 ">
              {reviews[currentReview].position}
            </p>
            <div className="pt-10 space-x-3">
              <button className="bg-orange-500 p-3 rounded-lg">
                <TbArrowNarrowLeftDashed size={20} color="black" />
              </button>
              <button className="bg-orange-500 p-3 rounded-lg">
                <TbArrowNarrowRightDashed size={20} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*Featured Article */}
      <div className="pt-50 px-6 pb-40">
        <p className="text-6xl mb-10">Featured Articles</p>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          <div className="break-inside-avoid border-2 border-black rounded-lg p-5 flex flex-col gap-3">
            <img src="feature1.gif" alt="" className="rounded-lg w-full" />
            <p className="text-xl font-semibold">We Won a Webby!</p>
            <p>
              We're excited to announce that Arnold's Pump Club won the Webby
              for Health & Wellness Website.
            </p>
          </div>

          <div className="break-inside-avoid border-2 border-black rounded-lg p-5 flex flex-col gap-3">
            <img src="feature2.gif" alt="" className="rounded-lg w-full" />
            <p className="text-xl font-semibold">
              Discovery Sessions: The Secret to Every Successful Brand and
              Website Launch
            </p>
          </div>

          <div className="break-inside-avoid border-2 border-black rounded-lg p-5 flex flex-col gap-3">
            <img src="feature3.gif" alt="" className="rounded-lg w-full" />
            <p className="text-xl font-semibold">The Future of AI in Design</p>
            <p>
              The question won't be is this AI? It'll be why was this made, and
              who made it?
            </p>
          </div>
        </div>
      </div>

      {/* Work With Us Marquee */}
      <div
        className={`w-full border-t-2 border-b-2 border-black overflow-hidden whitespace-nowrap ${
          isHovered ? "bg-orange-500" : "bg-[#e1e1e1] text-black"
        }`}
      >
        <div
          ref={marqueeRef}
          className="marquee-track flex w-max gap-8 text-4xl font-medium items-center"
        >
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center  gap-3 px-4 py-2 rounded transition-all duration-300"
                onMouseEnter={mouseEnteredWWS}
                onMouseLeave={mouseExitedWWS}
              >
                <span className="w-60">
                  {isHovered ? "Get in Touch" : "Work with us"}
                </span>
                <span className="text-lg pt-2 px-3">
                  <TbArrowNarrowRightDashed size={40} />
                </span>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Onbox;
