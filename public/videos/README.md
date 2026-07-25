# /public/videos

The Hero section looks for a looping background video here:

```
public/videos/hero-loop.mp4
```

That path is set in `lib/images.ts` under `images.hero.video` — change it
there if you want a different filename.

Until a file exists at that path, the `<video>` element simply fails to
load and the Hero automatically falls back to the poster image
(`images.hero.poster` in the same file), so the site never looks broken.

## Recommendations for the video itself

- **Format:** `.mp4` (H.264) — universally supported and autoplay-friendly
- **Length:** 8–20 seconds, seamlessly loopable
- **No audio track needed** — the video plays muted
- **Resolution:** 1920×1080 is plenty; anything larger just adds load time
- **File size:** keep it under ~8MB if possible for fast first paint —
  compress with a tool like Handbrake if needed
- **Content:** something calm and abstract (motion graphics, subtle
  studio B-roll) reads best behind bold white headline text

Next.js serves anything in `/public` directly, so no code changes beyond
the `lib/images.ts` path are needed once the file is in place.
