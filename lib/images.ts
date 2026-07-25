/**
 * ─────────────────────────────────────────────────────────────────
 *  IMAGE REGISTRY
 * ─────────────────────────────────────────────────────────────────
 *  Every image on the site is pulled from this one file, so swapping
 *  a placeholder for a real photo never means hunting through
 *  components — just change the value here.
 *
 *  Right now every value points at a free placeholder service
 *  (picsum.photos for general photography, i.pravatar.cc for team
 *  headshots) so the site looks complete out of the box. The hero
 *  video path points into /public/videos/, which is empty until you
 *  add a file — see public/videos/README.md.
 *
 *  TO USE YOUR OWN IMAGES LATER:
 *   1. Drop the real file in /public/images/... (folders already
 *      exist for hero, about, team, portfolio — see README.md).
 *   2. Replace the matching string below with the local path, e.g.
 *        team.abinTPeter: "/images/team/abin-t-peter.jpg"
 *   3. Save. Next/Image handles the rest (optimization, lazy
 *      loading, responsive sizing) automatically.
 *
 *  Local paths and remote URLs can be mixed freely — replace them
 *  one at a time whenever real photography is ready.
 * ─────────────────────────────────────────────────────────────────
 */

export const images = {
  hero: {
    // Looping background video for the fullscreen hero. Add your file to
    // /public/videos/ (see public/videos/README.md) and it will be picked
    // up automatically — nothing else to change. Until then, the poster
    // image below is shown in its place, so the hero never looks broken.
    video: "/videos/hero-loop.mp4",
    poster: "https://picsum.photos/seed/effexia-hero-glow/1920/1080",
  },

  about: {
    photo: "https://picsum.photos/seed/effexia-about/1000/1300",
  },

  story: {
    photo: "https://picsum.photos/seed/effexia-story/1200/1500",
  },

  missionVision: {
    photo: "https://picsum.photos/seed/effexia-mission/1200/900",
  },

  // Selected Work / Portfolio — swap each src for a real project shot,
  // and edit the title/category to match. Add or remove entries freely.
  portfolio: [
    {
      id: "proj-01",
      title: "Branding Project 01",
      category: "Branding",
      src: "https://picsum.photos/seed/effexia-work-01/900/1100",
    },
    {
      id: "proj-02",
      title: "Web Design Project 02",
      category: "Web",
      src: "https://picsum.photos/seed/effexia-work-02/900/1100",
    },
    {
      id: "proj-03",
      title: "Marketing Campaign 03",
      category: "Marketing",
      src: "https://picsum.photos/seed/effexia-work-03/900/1100",
    },
    {
      id: "proj-04",
      title: "Video Production 04",
      category: "Video",
      src: "https://picsum.photos/seed/effexia-work-04/900/1100",
    },
    {
      id: "proj-05",
      title: "Branding Project 05",
      category: "Branding",
      src: "https://picsum.photos/seed/effexia-work-05/900/1100",
    },
    {
      id: "proj-06",
      title: "Web Design Project 06",
      category: "Web",
      src: "https://picsum.photos/seed/effexia-work-06/900/1100",
    },
  ],

  // Team headshots — pravatar generates a consistent placeholder face
  // per image number, purely as a stand-in until real photos are ready.
  team: {
    abinTPeter: "https://i.pravatar.cc/500?img=12",
    georgeShalomMathew: "https://i.pravatar.cc/500?img=33",
    shibinMKuruvila: "https://i.pravatar.cc/500?img=51",
    suryajithMS: "https://i.pravatar.cc/500?img=14",
    albinPK: "https://i.pravatar.cc/500?img=60",
    alishaPeter: "https://i.pravatar.cc/500?img=47",
  },

  // One background image per service card in the redesigned Services
  // section. Keyed to match lib/content.ts services[].key.
  services: {
    digitalMarketing: "https://picsum.photos/seed/effexia-svc-marketing/900/1100",
    socialMedia: "https://picsum.photos/seed/effexia-svc-social/900/1100",
    branding: "https://picsum.photos/seed/effexia-svc-branding/900/1100",
    graphicDesign: "https://picsum.photos/seed/effexia-svc-graphic/900/1100",
    logoDesign: "https://picsum.photos/seed/effexia-svc-logo/900/1100",
    contentCreation: "https://picsum.photos/seed/effexia-svc-content/900/1100",
    videoProduction: "https://picsum.photos/seed/effexia-svc-video/900/1100",
    photography: "https://picsum.photos/seed/effexia-svc-photo/900/1100",
    motionGraphics: "https://picsum.photos/seed/effexia-svc-motion/900/1100",
    musicProduction: "https://picsum.photos/seed/effexia-svc-music/900/1100",
    websiteDesign: "https://picsum.photos/seed/effexia-svc-website/900/1100",
    performanceMarketing: "https://picsum.photos/seed/effexia-svc-performance/900/1100",
    advertising: "https://picsum.photos/seed/effexia-svc-ads/900/1100",
    creativeStrategy: "https://picsum.photos/seed/effexia-svc-strategy/900/1100",
  },
} as const;
