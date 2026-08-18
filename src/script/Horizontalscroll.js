import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const section = document.querySelector(".research-horizontal");
const track = document.querySelector(".research-track");

if (section && track) {
  const getScrollAmount = () => {
    return track.scrollWidth - section.offsetWidth;
  };

  gsap.to(track, {
    x: () => -getScrollAmount(),

    ease: "none",

    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${getScrollAmount()}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
    },
  });
}