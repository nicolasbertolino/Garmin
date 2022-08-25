function loader() {
  const loader = document.querySelector("[data-loader]");
  const block = loader.querySelectorAll("[data-block]");
  const spinner = loader.querySelector("[data-spinner]");

  if (!loader || !block || !spinner) return

  gsap.to(block, {
    width: "10%",
    ease: "power1.inOut",
    duration: 0.8,
    stagger: 0.04,
    delay: 1
  });

  gsap.to(spinner, {
    x: 5,
    ease: "power1.inOut",
    opacity: 0,
    delay: 1.6
  });

  gsap.to(loader, {
    ease: "power1.inOut",
    opacity: 0,
    delay: 2.2
  });
}

loader();