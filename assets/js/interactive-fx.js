/**
 * TRỨ PORTFOLIO — Interactive FX Engine
 * 1. Pixel-Matrix & 2D Noise Curtain Intro (with T. geometric monogram + counter)
 * 2. 2D Velocity-Field Halftone / Dithered Pixel Cursor Trail Canvas
 * 3. Floating Magnetic Monospace Cursor Pill (with Cipher-Scramble)
 * 4. Monospace Cipher-Scramble Hover & Entrance Reveals
 */
(function () {
  'use strict';

  const CIPHER_CHARS = ['#', '#', '$', '*', '@', '%', '0', '1', '>', '/', '+'];
  const PRESERVE_CHARS = new Set([' ', '[', ']', '(', ')', '·', '/', '↗', '→', '←', '↘', '—', '-', '.', ',', ':', '+']);

  const prefersReducedMotion = () =>
    Boolean(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const hasFinePointer = () =>
    Boolean(window.matchMedia && window.matchMedia('(pointer: fine)').matches);

  const getLang = () => (localStorage.getItem('tru_lang') === 'en' ? 'en' : 'vi');
  const getTheme = () => document.documentElement.getAttribute('data-theme') || 'light';

  /* ==========================================================================
   * 1. MONOSPACE CIPHER-SCRAMBLE ENGINE
   * ========================================================================== */
  function scrambleElement(el, explicitTarget, options) {
    if (!el) return;
    if (prefersReducedMotion()) {
      if (explicitTarget !== undefined) el.textContent = explicitTarget;
      return;
    }

    const opts = options || {};
    const durationMs = opts.duration || Math.min(460, 170 + (explicitTarget || el.textContent || '').length * 8);
    const delayMs = opts.delay || 0;

    if (!el._isScrambling && explicitTarget === undefined) {
      el._cleanText = el.textContent;
    }
    const target = explicitTarget !== undefined ? explicitTarget : (el._cleanText || el.textContent || '');
    el._cleanText = target;

    if (el._scrambleRaf) cancelAnimationFrame(el._scrambleRaf);
    if (el._scrambleTimer) clearTimeout(el._scrambleTimer);

    const len = target.length;
    if (!len) {
      el.textContent = '';
      return;
    }

    el._isScrambling = true;

    const startRun = () => {
      const t0 = performance.now();
      const seeds = new Uint8Array(len);
      for (let i = 0; i < len; i++) seeds[i] = Math.floor(Math.random() * CIPHER_CHARS.length);

      const tick = (now) => {
        const elapsed = now - t0;
        const p = Math.min(1, elapsed / durationMs);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        const revealCount = Math.floor(eased * len);
        const cipherReach = Math.min(len, Math.floor(Math.min(1, p * 1.65) * len) + 3);

        let out = '';
        const frameStep = Math.floor(elapsed / 32);
        for (let i = 0; i < len; i++) {
          const ch = target[i];
          if (i < revealCount || PRESERVE_CHARS.has(ch)) {
            out += ch;
          } else if (i < cipherReach) {
            const cIdx = (seeds[i] + frameStep + i) % CIPHER_CHARS.length;
            out += CIPHER_CHARS[cIdx];
          } else {
            out += opts.fromEmpty ? '' : ch;
          }
        }

        el.textContent = out;

        if (p < 1) {
          el._scrambleRaf = requestAnimationFrame(tick);
        } else {
          el.textContent = target;
          el._isScrambling = false;
          el._scrambleRaf = null;
        }
      };

      el._scrambleRaf = requestAnimationFrame(tick);
    };

    if (delayMs > 0) {
      if (opts.fromEmpty) {
        // Keep vertical layout height stable with non-breaking space
        el.textContent = '\u00A0';
      }
      el._scrambleTimer = setTimeout(startRun, delayMs);
    } else {
      startRun();
    }
  }

  window.truScramble = scrambleElement;

  /* ==========================================================================
   * 2. PIXEL-MATRIX & 2D NOISE INTRO CURTAIN
   * ========================================================================== */
  // 8x8 Geometric Swiss Monogram "T."
  const TRU_MONOGRAM_8X8 = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 2, 2],
    [0, 0, 1, 1, 0, 0, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ];

  // Bayer 4x4 threshold matrix (0..15 normalized to 0..1) for sub-pixel dissolve
  const BAYER_4X4 = [
    0 / 16,  8 / 16,  2 / 16, 10 / 16,
    12 / 16, 4 / 16, 14 / 16,  6 / 16,
    3 / 16, 11 / 16,  1 / 16,  9 / 16,
    15 / 16, 7 / 16, 13 / 16,  5 / 16
  ];

  function hash2D(x, y) {
    const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
    return s - Math.floor(s);
  }

  function valueNoise2D(x, y) {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const xf = x - xi;
    const yf = y - yi;
    const u = xf * xf * (3 - 2 * xf);
    const v = yf * yf * (3 - 2 * yf);
    const a = hash2D(xi, yi);
    const b = hash2D(xi + 1, yi);
    const c = hash2D(xi, yi + 1);
    const d = hash2D(xi + 1, yi + 1);
    return (a * (1 - u) + b * u) * (1 - v) + (c * (1 - u) + d * u) * v;
  }

  function triggerHeroEntrance(delaySec) {
    const heroLines = document.querySelectorAll('.hero-line');
    const heroScrambleEls = document.querySelectorAll('[data-hero-scramble]');

    if (typeof gsap === 'undefined' || prefersReducedMotion()) {
      heroLines.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.style.clipPath = 'none';
      });
      return;
    }

    if (heroLines.length) {
      gsap.fromTo(
        heroLines,
        {
          yPercent: 85,
          scale: 0.96,
          opacity: 0,
          clipPath: 'inset(-30% -10% 110% -10%)'
        },
        {
          yPercent: 0,
          scale: 1,
          opacity: 1,
          clipPath: 'inset(-30% -10% -25% -10%)',
          duration: 0.88,
          stagger: 0.11,
          ease: 'expo.out',
          delay: delaySec,
          clearProps: 'transform,clipPath'
        }
      );
    }

    heroScrambleEls.forEach((el, idx) => {
      const target = el.textContent;
      scrambleElement(el, target, {
        delay: Math.round((delaySec + 0.12 + idx * 0.07) * 1000),
        duration: 420
      });
    });
  }

  function initIntroCurtain() {
    const existingOverlay = document.getElementById('tru-intro-overlay');
    const isHome = Boolean(existingOverlay);

    if (prefersReducedMotion()) {
      if (existingOverlay) existingOverlay.remove();
      triggerHeroEntrance(0);
      return;
    }

    // Detect whether user navigated internally from another page on the same origin
    let navType = 'navigate';
    try {
      const navEntries = performance.getEntriesByType && performance.getEntriesByType('navigation');
      if (navEntries && navEntries[0]) navType = navEntries[0].type;
    } catch (_) {}

    const isInternalNav =
      navType === 'navigate' &&
      document.referrer &&
      document.referrer.indexOf(window.location.origin) === 0;

    // On subpages, run a fast 0.52s pixel-curtain dissolve so transitions feel cohesive yet instant
    if (!isHome) {
      runQuickSubpageCurtain();
      return;
    }

    const overlay = existingOverlay;
    const canvas = document.getElementById('tru-intro-canvas');
    const hud = document.getElementById('tru-intro-hud');
    const pctEl = document.getElementById('tru-intro-pct');
    const tagEl = document.getElementById('tru-intro-tag');

    // Hard fail-safe so the page can NEVER remain covered
    const failSafe = setTimeout(() => {
      if (overlay && overlay.parentNode) overlay.remove();
      document.documentElement.classList.remove('tru-intro-lock');
    }, 3600);

    if (!canvas || typeof gsap === 'undefined') {
      clearTimeout(failSafe);
      if (overlay) overlay.remove();
      document.documentElement.classList.remove('tru-intro-lock');
      triggerHeroEntrance(0.05);
      return;
    }

    const ctx = canvas.getContext('2d');
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let vw = window.innerWidth;
    let vh = window.innerHeight;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      vw = window.innerWidth;
      vh = window.innerHeight;
      canvas.width = Math.round(vw * dpr);
      canvas.height = Math.round(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    const getAccentDotColor = () => {
      const t = getTheme();
      if (t === 'dark') return '#C4FF00';
      if (t === 'pink') return '#FF7096';
      return '#10B981';
    };

    const getResponsiveCells = () => {
      const minDim = Math.min(vw, vh);
      return {
        start: Math.min(34, Math.max(20, Math.round(minDim * 0.055))),
        end: Math.min(18, Math.max(12, Math.round(minDim * 0.022)))
      };
    };

    const initialCells = getResponsiveCells();
    const state = {
      pct: 0,
      logoProgress: 0,
      logoCellPx: initialCells.start,
      dissolve: 0,
      logoFade: 1
    };

    const renderFrame = () => {
      ctx.clearRect(0, 0, vw, vh);

      const cell = 20;
      const cols = Math.ceil(vw / cell);
      const rows = Math.ceil(vh / cell);
      const subSize = cell / 4;

      // 1. Curtain background tiles with 4x4 Bayer + 2D noise dissolve
      if (state.dissolve <= 0.001) {
        ctx.fillStyle = '#0A0A0B';
        ctx.fillRect(0, 0, vw, vh);
      } else if (state.dissolve < 1) {
        ctx.fillStyle = '#0A0A0B';
        ctx.beginPath();

        const cx = cols * 0.5;
        const cy = rows * 0.5;
        const maxDist = Math.hypot(cx, cy) || 1;

        for (let gy = 0; gy < rows; gy++) {
          for (let gx = 0; gx < cols; gx++) {
            const n = valueNoise2D(gx * 0.16 + 3.1, gy * 0.16 + 7.4);
            const radial = Math.hypot(gx - cx, gy - cy) / maxDist;
            // Center dissolves slightly earlier, mixed with organic noise
            const cellStart = radial * 0.28 + n * 0.34;
            const localDissolve = (state.dissolve - cellStart) / 0.42;

            if (localDissolve <= 0) {
              ctx.rect(gx * cell, gy * cell, cell + 0.4, cell + 0.4);
            } else if (localDissolve < 1) {
              const baseX = gx * cell;
              const baseY = gy * cell;
              for (let sy = 0; sy < 4; sy++) {
                for (let sx = 0; sx < 4; sx++) {
                  if (BAYER_4X4[sy * 4 + sx] >= localDissolve) {
                    ctx.rect(
                      baseX + sx * subSize,
                      baseY + sy * subSize,
                      subSize + 0.35,
                      subSize + 0.35
                    );
                  }
                }
              }
            }
          }
        }
        ctx.fill();
      }

      // 2. Center Geometric Pixel Monogram "T." (Coarse-to-Fine sub-pixel crystallization)
      if (state.logoProgress > 0.01 && state.logoFade > 0.01) {
        const mCell = state.logoCellPx;
        const mSub = mCell / 4;
        const totalSize = mCell * 8;
        const ox = Math.round((vw - totalSize) * 0.5);
        const oy = Math.round((vh - totalSize) * 0.5 - 38);
        const accentHex = getAccentDotColor();

        ctx.globalAlpha = state.logoFade;

        for (let r = 0; r < 8; r++) {
          for (let c = 0; c < 8; c++) {
            const kind = TRU_MONOGRAM_8X8[r][c];
            if (!kind) continue;

            ctx.fillStyle = kind === 2 ? accentHex : '#F5F5F0';
            const staggerBias = (r + c) / 16;
            const cellFill = Math.max(0, Math.min(1, (state.logoProgress - staggerBias * 0.32) / 0.68));
            if (cellFill <= 0) continue;

            const bx = ox + c * mCell;
            const by = oy + r * mCell;

            if (cellFill >= 0.99) {
              ctx.fillRect(bx + 1, by + 1, mCell - 2, mCell - 2);
            } else {
              ctx.beginPath();
              for (let sy = 0; sy < 4; sy++) {
                for (let sx = 0; sx < 4; sx++) {
                  if (BAYER_4X4[sy * 4 + sx] < cellFill) {
                    ctx.rect(bx + sx * mSub + 0.5, by + sy * mSub + 0.5, mSub - 1, mSub - 1);
                  }
                }
              }
              ctx.fill();
            }
          }
        }
        ctx.globalAlpha = 1;
      }
    };

    // Fast path for internal navigation back to homepage or direct hash links
    if (isInternalNav || Boolean(window.location.hash)) {
      if (hud) hud.style.display = 'none';
      state.logoProgress = 0;
      renderFrame();
      document.documentElement.classList.remove('tru-intro-lock');
      triggerHeroEntrance(0.12);

      gsap.to(state, {
        dissolve: 1,
        duration: 0.55,
        ease: 'power2.inOut',
        onUpdate: renderFrame,
        onComplete: () => {
          clearTimeout(failSafe);
          window.removeEventListener('resize', resize);
          overlay.remove();
        }
      });
      return;
    }

    // Full Signature Intro Sequence (~2.05s)
    document.documentElement.classList.add('tru-intro-lock');
    if (typeof lenis !== 'undefined' && lenis) lenis.stop();

    // Prepare hero lines hidden cleanly until curtain dissolves
    gsap.set('.hero-line', { opacity: 0 });

    if (tagEl) {
      const label = getLang() === 'en' ? '[ TRỨ // PRODUCT DESIGNER ]' : '[ TRỨ // PRODUCT DESIGNER ]';
      scrambleElement(tagEl, label, { duration: 520, fromEmpty: true });
    }

    renderFrame();

    let heroTriggered = false;
    const tl = gsap.timeline({
      onUpdate: renderFrame,
      onComplete: () => {
        clearTimeout(failSafe);
        window.removeEventListener('resize', resize);
        document.documentElement.classList.remove('tru-intro-lock');
        if (typeof lenis !== 'undefined' && lenis) lenis.start();
        overlay.remove();
      }
    });

    // Act 1: Percentage 0 -> 100% + Coarse-to-Fine Pixel Monogram
    tl.to(
      state,
      {
        pct: 100,
        duration: 0.88,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (pctEl) {
            const val = Math.round(state.pct);
            pctEl.textContent = String(val).padStart(2, '0') + '%';
          }
        }
      },
      0
    );

    tl.fromTo(
      state,
      { logoProgress: 0.08, logoCellPx: initialCells.start },
      { logoProgress: 1, logoCellPx: initialCells.end, duration: 0.92, ease: 'expo.out' },
      0
    );

    // Act 2: Clip HUD counter upward & fade monogram into pixel field
    if (hud) {
      tl.to(
        hud,
        {
          y: 72,
          opacity: 0,
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 0.34,
          ease: 'power3.in'
        },
        0.90
      );
    }

    tl.to(
      state,
      {
        logoFade: 0,
        logoCellPx: Math.max(10, initialCells.end - 4),
        duration: 0.36,
        ease: 'power2.in'
      },
      0.95
    );

    // Act 3: 16-Step Sub-Pixel Noise Dissolve + Synchronized Hero Entrance
    tl.to(
      state,
      {
        dissolve: 1,
        duration: 0.98,
        ease: 'power2.inOut',
        onStart: () => {
          overlay.style.pointerEvents = 'none';
          document.documentElement.classList.remove('tru-intro-lock');
          if (typeof lenis !== 'undefined' && lenis) lenis.start();
          if (!heroTriggered) {
            heroTriggered = true;
            triggerHeroEntrance(0.16);
          }
        }
      },
      0.98
    );

    // Allow impatient visitors to click or press Space/Escape to jump straight to dissolve
    const skipIntro = () => {
      if (tl.time() < 0.92) {
        tl.time(0.92);
      }
    };
    overlay.addEventListener('click', skipIntro, { once: true });
    window.addEventListener(
      'keydown',
      (e) => {
        if (e.key === 'Escape' || e.key === ' ') skipIntro();
      },
      { once: true }
    );
  }

  function runQuickSubpageCurtain() {
    if (typeof gsap === 'undefined') return;

    const canvas = document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:fixed;inset:0;width:100vw;height:100vh;z-index:9998;pointer-events:none;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const state = { dissolve: 0.06 };
    const cell = 22;
    const cols = Math.ceil(vw / cell);
    const rows = Math.ceil(vh / cell);
    const subSize = cell / 4;

    const draw = () => {
      ctx.clearRect(0, 0, vw, vh);
      ctx.fillStyle = '#0A0A0B';
      ctx.beginPath();
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const n = valueNoise2D(gx * 0.18 + 1.7, gy * 0.18 + 4.3);
          const local = (state.dissolve - n * 0.42) / 0.58;
          if (local <= 0) {
            ctx.rect(gx * cell, gy * cell, cell + 0.4, cell + 0.4);
          } else if (local < 1) {
            const bx = gx * cell;
            const by = gy * cell;
            for (let sy = 0; sy < 4; sy++) {
              for (let sx = 0; sx < 4; sx++) {
                if (BAYER_4X4[sy * 4 + sx] >= local) {
                  ctx.rect(bx + sx * subSize, by + sy * subSize, subSize + 0.35, subSize + 0.35);
                }
              }
            }
          }
        }
      }
      ctx.fill();
    };

    draw();
    triggerHeroEntrance(0.08);
    gsap.to(state, {
      dissolve: 1,
      duration: 0.50,
      ease: 'power2.out',
      onUpdate: draw,
      onComplete: () => canvas.remove()
    });

    // Cipher-scramble subpage hero tag if present
    const subHeroTag = document.querySelector('[data-i18n="hero-tag"] span:last-child, [data-i18n="status-tag"] span:last-child');
    if (subHeroTag) {
      scrambleElement(subHeroTag, subHeroTag.textContent, { delay: 120, duration: 360 });
    }
  }

  /* ==========================================================================
   * 3. 2D VELOCITY-FIELD HALFTONE / DITHERED PIXEL CURSOR TRAIL
   * ========================================================================== */
  // 6 progressive 4x4 sub-cell halftone patterns (each entry lists [sx, sy] in 0..3)
  const HALFTONE_PATTERNS = [
    [[1, 1]],
    [[0, 0], [2, 2]],
    [[0, 0], [2, 2], [2, 0]],
    [[0, 0], [2, 0], [0, 2], [2, 2]],
    [[0, 0], [2, 0], [1, 1], [3, 1], [0, 2], [2, 2]],
    [[0, 0], [2, 0], [1, 1], [3, 1], [0, 2], [2, 2], [1, 3], [3, 3]]
  ];

  function initHalftoneCursor() {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'tru-cursor-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:30;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const CELL = 10; // 10px architectural grid cell
    const SUB = 2.5; // 4x4 sub-grid inside each 10px cell

    let dpr = 1;
    let vw = 0;
    let vh = 0;
    let cols = 0;
    let rows = 0;
    let field = new Float32Array(0);
    let cellJitter = new Float32Array(0);

    const syncThemeBlend = () => {
      const theme = getTheme();
      if (theme === 'pink') {
        canvas.style.mixBlendMode = 'normal';
      } else {
        canvas.style.mixBlendMode = 'difference';
      }
    };
    syncThemeBlend();

    const themeObs = new MutationObserver(syncThemeBlend);
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      vw = window.innerWidth;
      vh = window.innerHeight;
      canvas.width = Math.round(vw * dpr);
      canvas.height = Math.round(vh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(vw / CELL);
      rows = Math.ceil(vh / CELL);
      const total = cols * rows;
      field = new Float32Array(total);
      cellJitter = new Float32Array(total);
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          cellJitter[gy * cols + gx] = (hash2D(gx, gy) - 0.5) * 0.22;
        }
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let lastX = -999;
    let lastY = -999;
    let lastMoveAt = 0;
    let lastFrameAt = 0;
    let rafId = null;

    const stampAt = (px, py, radiusCells, peak) => {
      const gxCenter = px / CELL;
      const gyCenter = py / CELL;
      const x0 = Math.max(0, Math.floor(gxCenter - radiusCells));
      const x1 = Math.min(cols - 1, Math.ceil(gxCenter + radiusCells));
      const y0 = Math.max(0, Math.floor(gyCenter - radiusCells));
      const y1 = Math.min(rows - 1, Math.ceil(gyCenter + radiusCells));
      const invTwoSigmaSq = 1 / (radiusCells * radiusCells * 0.42);

      for (let gy = y0; gy <= y1; gy++) {
        const dy = gy + 0.5 - gyCenter;
        const rowOff = gy * cols;
        for (let gx = x0; gx <= x1; gx++) {
          const dx = gx + 0.5 - gxCenter;
          const dSq = dx * dx + dy * dy;
          if (dSq > radiusCells * radiusCells) continue;

          const idx = rowOff + gx;
          const falloff = Math.exp(-dSq * invTwoSigmaSq) + cellJitter[idx] * 0.35;
          if (falloff <= 0.05) continue;

          const nextVal = Math.min(1, Math.max(field[idx], falloff * peak) + falloff * 0.14);
          field[idx] = nextVal;
        }
      }
    };

    const render = (now) => {
      const dt = lastFrameAt ? Math.min(64, now - lastFrameAt) : 16;
      lastFrameAt = now;

      const decay = Math.exp(-dt / 310);
      ctx.clearRect(0, 0, vw, vh);

      const theme = getTheme();
      if (theme === 'pink') {
        ctx.fillStyle = 'rgba(18, 18, 18, 0.62)';
      } else if (theme === 'dark') {
        ctx.fillStyle = 'rgba(245, 244, 236, 0.90)';
      } else {
        // Under mix-blend-mode: difference on #F5F5F0, pure white produces crisp deep ink (#0A0A0F)
        // and inverts cleanly to off-white inside #0E0E0E typography!
        ctx.fillStyle = 'rgba(255, 255, 255, 0.88)';
      }

      ctx.beginPath();
      let activeCount = 0;

      for (let gy = 0; gy < rows; gy++) {
        const rowOff = gy * cols;
        const baseY = gy * CELL;
        for (let gx = 0; gx < cols; gx++) {
          const idx = rowOff + gx;
          const v = field[idx] * decay;
          if (v < 0.075) {
            field[idx] = 0;
            continue;
          }
          field[idx] = v;
          activeCount++;

          let level = 0;
          if (v >= 0.76) level = 5;
          else if (v >= 0.60) level = 4;
          else if (v >= 0.45) level = 3;
          else if (v >= 0.31) level = 2;
          else if (v >= 0.18) level = 1;

          const pat = HALFTONE_PATTERNS[level];
          const baseX = gx * CELL;
          for (let k = 0; k < pat.length; k++) {
            ctx.rect(
              baseX + pat[k][0] * SUB,
              baseY + pat[k][1] * SUB,
              2.1,
              2.1
            );
          }
        }
      }

      if (activeCount > 0) {
        ctx.fill();
      }

      if (activeCount > 0 || now - lastMoveAt < 1300) {
        rafId = requestAnimationFrame(render);
      } else {
        rafId = null;
        lastFrameAt = 0;
      }
    };

    window.addEventListener(
      'mousemove',
      (e) => {
        // Pause trail injection when fullscreen modal/menu is covering the viewport
        const menuOverlay = document.getElementById('menu-overlay');
        const caseDrawer = document.getElementById('case-drawer');
        if (
          (menuOverlay && !menuOverlay.classList.contains('hidden')) ||
          (caseDrawer && !caseDrawer.classList.contains('hidden'))
        ) {
          lastX = e.clientX;
          lastY = e.clientY;
          return;
        }

        const x = e.clientX;
        const y = e.clientY;

        if (lastX < -500) {
          lastX = x;
          lastY = y;
        }

        const dx = x - lastX;
        const dy = y - lastY;
        const dist = Math.hypot(dx, dy);
        const speedNorm = Math.min(1.25, Math.max(0.45, dist / 26));
        const radiusCells = 4.6 + speedNorm * 2.5; // ~58px - 77px organic cloud radius
        const steps = Math.max(1, Math.ceil(dist / 7));

        for (let s = 1; s <= steps; s++) {
          const t = s / steps;
          stampAt(lastX + dx * t, lastY + dy * t, radiusCells, 0.62 + speedNorm * 0.34);
        }

        lastX = x;
        lastY = y;
        lastMoveAt = performance.now();

        if (!rafId) {
          rafId = requestAnimationFrame(render);
        }
      },
      { passive: true }
    );
  }

  /* ==========================================================================
   * 4. FLOATING MAGNETIC MONOSPACE CURSOR PILL & CIPHER HOVERS
   * ========================================================================== */
  function initCursorPillAndHovers() {
    if (!hasFinePointer()) return;

    const pill = document.createElement('div');
    pill.id = 'tru-cursor-pill';
    pill.setAttribute('aria-hidden', 'true');
    pill.style.cssText =
      'position:fixed;left:0;top:0;z-index:120;pointer-events:none;opacity:0;transform:translate3d(14px,-28px,0) scale(0.92);will-change:transform,opacity;';
    pill.innerHTML =
      '<div style="background:var(--text-primary);color:var(--bg-primary);border:1px solid var(--border-color);box-shadow:0 10px 28px rgba(0,0,0,0.22);" class="h-[24px] px-2.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap">' +
      '<span id="tru-cursor-pill-dot" style="width:5px;height:5px;border-radius:9999px;background:#10B981;flex-shrink:0;"></span>' +
      '<span id="tru-cursor-pill-text">VIEW</span>' +
      '</div>';
    document.body.appendChild(pill);

    const pillText = document.getElementById('tru-cursor-pill-text');
    const pillDot = document.getElementById('tru-cursor-pill-dot');

    const updateDotColor = () => {
      if (!pillDot) return;
      const t = getTheme();
      pillDot.style.background = t === 'pink' ? '#FF7096' : (t === 'dark' ? '#059669' : '#10B981');
    };
    updateDotColor();
    new MutationObserver(updateDotColor).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    const useGsap = typeof gsap !== 'undefined';
    const setPillX = useGsap ? gsap.quickTo(pill, 'x', { duration: 0.36, ease: 'expo.out' }) : null;
    const setPillY = useGsap ? gsap.quickTo(pill, 'y', { duration: 0.36, ease: 'expo.out' }) : null;

    let activeTarget = null;

    window.addEventListener(
      'mousemove',
      (e) => {
        const pillWidth = pill.offsetWidth || 120;
        const flipLeft = e.clientX + 18 + pillWidth > window.innerWidth - 12;
        const tx = flipLeft ? e.clientX - pillWidth - 14 : e.clientX + 14;
        const ty = Math.max(12, e.clientY - 30);

        if (useGsap) {
          setPillX(tx);
          setPillY(ty);
        } else {
          pill.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
        }
      },
      { passive: true }
    );

    const showPill = (label) => {
      if (!label || !pillText) return;
      scrambleElement(pillText, label, { duration: 190 });
      if (useGsap) {
        gsap.to(pill, { opacity: 1, scale: 1, duration: 0.2, ease: 'power3.out', overwrite: 'auto' });
      } else {
        pill.style.opacity = '1';
      }
    };

    const hidePill = () => {
      if (useGsap) {
        gsap.to(pill, { opacity: 0, scale: 0.92, duration: 0.2, ease: 'power2.out', overwrite: 'auto' });
      } else {
        pill.style.opacity = '0';
      }
    };

    // Auto-assign contextual cursor labels across all 5 pages
    const bindContextualLabels = () => {
      const mappings = [
        ['a[href$=".pdf"]', '[ MỞ CV PDF ↗ ]', '[ OPEN RESUME ↗ ]'],
        ['header a[href*="contact"]', '[ LIÊN HỆ ↓ ]', '[ CONTACT ↓ ]'],
        ['button[onclick*="openMenuOverlay"]', '[ MỞ MENU ]', '[ MENU ]'],
        ['button[onclick*="copyEmail"]', '[ BẤM SAO CHÉP ]', '[ CLICK TO COPY ]'],
        ['a[href^="tel:"]', '[ GỌI TRỰC TIẾP ]', '[ DIRECT CALL ]'],
        ['a[href^="mailto:"]', '[ GỬI EMAIL ↗ ]', '[ SEND EMAIL ↗ ]'],
        ['#story-img, #story .group, .story-portrait-card', '[ TRỨ · HÀ NỘI ]', '[ TRỨ · HANOI ]'],
        ['#yen-child-video', '[ XEM PROTOTYPE ▶ ]', '[ PLAY PROTOTYPE ▶ ]'],
        ['#momo-comparison, #shortpeek-comparison, #comparison-range', '[ KÉO ĐỂ SO SÁNH ↔ ]', '[ DRAG TO COMPARE ↔ ]'],
        ['a[href*="figma.com/board"]', '[ MỞ FIGJAM ↗ ]', '[ OPEN FIGJAM ↗ ]'],
        ['a[href*="iqmyth.com"]', '[ MỞ WEB THỰC TẾ ↗ ]', '[ VISIT LIVE APP ↗ ]'],
        ['button[onclick*="spinRoulette"]', '[ CHỌN NGẪU NHIÊN 🎲 ]', '[ RANDOM CASE 🎲 ]'],
        ['footer button[onclick*="scrollTo"]', '[ LÊN ĐẦU TRANG ↑ ]', '[ BACK TO TOP ↑ ]'],
        ['.page-next-link', '[ MỞ TRANG TIẾP THEO → ]', '[ NEXT PAGE → ]'],
        ['.page-prev-link', '[ QUAY LẠI ← ]', '[ PREVIOUS ← ]'],
        ['main section:last-of-type a[href$=".html"]:not([href="index.html"]):not(.page-prev-link)', '[ ĐỌC TIẾP → ]', '[ CONTINUE → ]']
      ];

      mappings.forEach(([sel, viLbl, enLbl]) => {
        document.querySelectorAll(sel).forEach((el) => {
          if (!el.hasAttribute('data-cursor-vi')) {
            el.setAttribute('data-cursor-vi', viLbl);
            el.setAttribute('data-cursor-en', enLbl);
          }
        });
      });

      // Cipher-scramble hover effect on monospace buttons & filter pills
      document
        .querySelectorAll(
          '.case-filter-btn, header a[href$=".pdf"] span, header a[href*="contact"] span[data-i18n], header button[onclick*="openMenuOverlay"] span[data-i18n]'
        )
        .forEach((el) => {
          if (el._cipherBound) return;
          el._cipherBound = true;
          const trigger = el.closest('a, button') || el;
          trigger.addEventListener('mouseenter', () => {
            scrambleElement(el, undefined, { duration: 220 });
          });
        });

      // Project Row "( + )" -> "( XEM TÓM TẮT + )" / "( VIEW SUMMARY + )" expand & cipher-scramble
      document.querySelectorAll('.case-row').forEach((row) => {
        if (row._rowFxBound) return;
        row._rowFxBound = true;
        const scrambleTag = row.querySelector('.case-hover-scramble');
        const previewTag = document.getElementById('cursor-preview-tag');

        row.addEventListener('mouseenter', () => {
          hidePill(); // Let #cursor-preview take center stage cleanly
          if (scrambleTag) {
            const target = getLang() === 'en' ? 'VIEW SUMMARY' : 'XEM TÓM TẮT';
            scrambleElement(scrambleTag, target, { duration: 210 });
          }
          if (previewTag) {
            const tagStr = row.getAttribute('data-tag') || 'FEATURED CASE';
            scrambleElement(previewTag, tagStr, { duration: 260 });
          }
        });

        row.addEventListener('mouseleave', () => {
          if (scrambleTag) {
            scrambleTag._cleanText = '';
          }
        });
      });
    };

    bindContextualLabels();

    // Delegate hover tracking for [data-cursor-vi] / [data-cursor-en]
    document.addEventListener('mouseover', (e) => {
      if (e.target.closest && e.target.closest('.case-row')) {
        if (activeTarget) {
          activeTarget = null;
          hidePill();
        }
        return;
      }
      const match = e.target.closest && e.target.closest('[data-cursor-vi], [data-cursor-en]');
      if (match !== activeTarget) {
        activeTarget = match;
        if (match) {
          const label =
            getLang() === 'en'
              ? match.getAttribute('data-cursor-en') || match.getAttribute('data-cursor-vi')
              : match.getAttribute('data-cursor-vi') || match.getAttribute('data-cursor-en');
          showPill(label);
        } else {
          hidePill();
        }
      }
    });

    // Reset cached clean text whenever language switches (html[lang] changes)
    new MutationObserver(() => {
      document.querySelectorAll('.case-filter-btn, [data-i18n]').forEach((el) => {
        if (!el._isScrambling) el._cleanText = el.textContent;
      });
      if (activeTarget) {
        const label =
          getLang() === 'en'
            ? activeTarget.getAttribute('data-cursor-en')
            : activeTarget.getAttribute('data-cursor-vi');
        if (label && pillText) pillText.textContent = label;
      }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  /* ==========================================================================
   * 5. UNIVERSAL MULTI-PAGE MENU OVERLAY & PIXEL PAGE TRANSITIONS
   * ========================================================================== */
  const MENU_I18N = {
    vi: {
      btnMenu: 'MENU',
      navOverview: 'ĐIỀU HƯỚNG',
      closeEsc: 'ĐÓNG (ESC)',
      secTitle: '[ ĐIỀU HƯỚNG // SECTIONS ]',
      currentBadge: '[ ĐANG XEM ]',
      home: 'Trang chủ',
      work: 'Selected Work',
      craft: 'Product Craft',
      experience: 'Kinh nghiệm',
      story: 'Chuyện là...',
      contact: 'Liên hệ',
      caseTitle: '[ DỰ ÁN CASE STUDY ]',
      directTitle: '[ TRỰC TIẾP LIÊN HỆ ]',
      downloadCv: 'TẢI VỀ RESUME (PDF)'
    },
    en: {
      btnMenu: 'MENU',
      navOverview: 'NAVIGATION',
      closeEsc: 'CLOSE (ESC)',
      secTitle: '[ SECTIONS // DIRECTORY ]',
      currentBadge: '[ CURRENT ]',
      home: 'Home',
      work: 'Selected Work',
      craft: 'Product Craft',
      experience: 'Experience',
      story: 'My Story',
      contact: 'Get in touch',
      caseTitle: '[ CASE STUDIES ]',
      directTitle: '[ DIRECT CONTACT ]',
      downloadCv: 'DOWNLOAD RESUME (PDF)'
    }
  };

  function getCurrentPageFile() {
    const cleaned = window.location.pathname.replace(/\/+$/, '');
    let file = (cleaned.split('/').pop() || '').trim();
    if (!file) file = 'index.html';
    if (!file.endsWith('.html')) file = file + '.html';
    return file;
  }

  function navigateWithCurtain(href) {
    if (!href) return;
    if (prefersReducedMotion() || typeof gsap === 'undefined') {
      window.location.href = href;
      return;
    }

    document.querySelectorAll('.tru-exit-canvas').forEach((c) => c.remove());
    const canvas = document.createElement('canvas');
    canvas.className = 'tru-exit-canvas';
    canvas.setAttribute('aria-hidden', 'true');
    canvas.style.cssText =
      'position:fixed;inset:0;width:100vw;height:100vh;z-index:10001;pointer-events:all;';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    canvas.width = Math.round(vw * dpr);
    canvas.height = Math.round(vh * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const state = { cover: 0 };
    const cell = 22;
    const cols = Math.ceil(vw / cell);
    const rows = Math.ceil(vh / cell);
    const subSize = cell / 4;

    const draw = () => {
      ctx.clearRect(0, 0, vw, vh);
      ctx.fillStyle = '#0A0A0B';
      ctx.beginPath();
      for (let gy = 0; gy < rows; gy++) {
        for (let gx = 0; gx < cols; gx++) {
          const n = valueNoise2D(gx * 0.18 + 2.3, gy * 0.18 + 5.9);
          const local = (state.cover - n * 0.36) / 0.64;
          if (local >= 1) {
            ctx.rect(gx * cell, gy * cell, cell + 0.4, cell + 0.4);
          } else if (local > 0) {
            const bx = gx * cell;
            const by = gy * cell;
            for (let sy = 0; sy < 4; sy++) {
              for (let sx = 0; sx < 4; sx++) {
                if (BAYER_4X4[sy * 4 + sx] < local) {
                  ctx.rect(bx + sx * subSize, by + sy * subSize, subSize + 0.35, subSize + 0.35);
                }
              }
            }
          }
        }
      }
      ctx.fill();
    };

    gsap.to(state, {
      cover: 1,
      duration: 0.28,
      ease: 'power2.in',
      onUpdate: draw,
      onComplete: () => {
        window.location.href = href;
      }
    });
  }

  window.truNavigate = navigateWithCurtain;

  function initUniversalMenuAndTransitions() {
    // Clean up any bfcache exit canvas on browser Back/Forward
    window.addEventListener('pageshow', (e) => {
      document.querySelectorAll('.tru-exit-canvas').forEach((c) => c.remove());
      if (e.persisted) {
        const intro = document.getElementById('tru-intro-overlay');
        if (intro) intro.remove();
        document.documentElement.classList.remove('tru-intro-lock');
        document.body.style.overflow = '';
      }
    });

    const curFile = getCurrentPageFile();

    // Ensure every sticky <header> has a MENU button if missing (e.g. case study pages & 404)
    const headerControls =
      document.querySelector('header > div > .flex.items-center.gap-1\\.5') ||
      document.querySelector('header > div > div.flex.items-center:last-child');
    if (headerControls && !document.querySelector('header [onclick*="openMenuOverlay"]')) {
      const menuBtn = document.createElement('button');
      menuBtn.type = 'button';
      menuBtn.setAttribute('onclick', 'openMenuOverlay()');
      menuBtn.setAttribute('data-cursor-vi', '[ MỞ MENU ]');
      menuBtn.setAttribute('data-cursor-en', '[ MENU ]');
      menuBtn.className =
        'font-mono text-[11px] sm:text-xs uppercase tracking-mono px-2.5 sm:px-4 py-1.5 sm:py-2 rounded hairline-all bg-[var(--bg-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-bold flex items-center gap-1.5 sm:gap-2 cursor-pointer shrink-0';
      menuBtn.innerHTML =
        '<span data-menu-i18n="btnMenu">MENU</span>' +
        '<div class="w-3 sm:w-3.5 h-2.5 sm:h-3 flex flex-col justify-between">' +
        '<span class="w-full h-[1.5px] bg-current"></span>' +
        '<span class="w-full h-[1.5px] bg-current"></span>' +
        '<span class="w-full h-[1.5px] bg-current"></span>' +
        '</div>';
      headerControls.appendChild(menuBtn);
    }

    // Inject universal #menu-overlay if the page does not already contain one
    let overlay = document.getElementById('menu-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'menu-overlay';
      overlay.setAttribute('data-lenis-prevent', 'true');
      overlay.className =
        'fixed inset-0 z-50 bg-[var(--bg-primary)] hidden flex-col justify-between overflow-y-auto overscroll-contain transition-colors';

      const pages = [
        { num: '00/', key: 'home', href: 'index.html' },
        { num: '01/', key: 'work', href: 'index.html#work' },
        { num: '02/', key: 'craft', href: 'index.html#craft' },
        { num: '03/', key: 'experience', href: 'index.html#experience' },
        { num: '04/', key: 'story', href: 'index.html#story' },
        { num: '05/', key: 'contact', href: 'index.html#contact' }
      ];

      overlay.innerHTML = `
        <div class="hairline-b px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-6 flex items-center justify-between flex-shrink-0 bg-[var(--bg-primary)] sticky top-0 z-20">
          <div class="flex items-center gap-4">
            <a href="index.html" class="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase font-sans">TRỨ</a>
            <span data-menu-i18n="navOverview" class="font-mono text-xs text-[var(--text-muted)] tracking-mono uppercase hidden sm:inline-block border border-[var(--border-color)] px-2.5 py-1 rounded">ĐIỀU HƯỚNG</span>
          </div>
          <div class="flex items-center gap-2 sm:gap-4">
            <div class="flex items-center p-0.5 sm:p-1 rounded-full hairline-all bg-[var(--bg-secondary)] gap-0.5 sm:gap-1 text-xs">
              <button onclick="setTheme('light')" class="theme-btn px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono text-[10px] uppercase transition-all" data-target="light">Light</button>
              <button onclick="setTheme('dark')" class="theme-btn px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full font-mono text-[10px] uppercase transition-all" data-target="dark">Dark</button>
              <button onclick="setTheme('pink')" class="theme-btn px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full font-mono text-[10px] uppercase transition-all" data-target="pink">Pink</button>
            </div>
            <button onclick="closeMenuOverlay()" class="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full hairline-all bg-[var(--bg-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all font-mono text-xs uppercase tracking-mono font-bold flex items-center gap-2 cursor-pointer group shrink-0">
              <span data-menu-i18n="closeEsc">ĐÓNG (ESC)</span>
              <span class="text-sm leading-none group-hover:rotate-90 transition-transform">✕</span>
            </button>
          </div>
        </div>

        <div class="max-w-[1680px] w-full mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-8 sm:py-10 md:py-14 flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          <nav class="lg:col-span-7 space-y-3 md:space-y-4">
            <div class="font-mono text-xs uppercase tracking-mono text-[var(--text-muted)] mb-3 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full shrink-0" style="background:var(--status-dot, #10B981);"></span>
              <span data-menu-i18n="secTitle">[ ĐIỀU HƯỚNG // SECTIONS ]</span>
            </div>
            ${pages
              .map(
                (p) => `
              <div class="menu-link-row overflow-hidden hairline-b pt-1.5 pb-3">
                <a href="${p.href}" data-menu-page="${p.href}" class="group flex items-baseline justify-between gap-4 cursor-pointer">
                  <div class="flex items-baseline gap-4 sm:gap-7 min-w-0">
                    <span class="font-mono text-xs sm:text-sm text-[var(--text-muted)] font-bold shrink-0">${p.num}</span>
                    <span data-menu-i18n="${p.key}" class="block text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight group-hover:translate-x-3 transition-transform duration-300 font-sans truncate">${MENU_I18N.vi[p.key]}</span>
                  </div>
                  <span class="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity shrink-0">↘</span>
                </a>
              </div>
            `
              )
              .join('')}
          </nav>

          <div class="lg:col-span-5 space-y-6 menu-right-col">
            <div class="p-6 rounded-2xl hairline-all bg-[var(--bg-secondary)] space-y-4">
              <div class="font-mono text-xs uppercase tracking-mono text-[var(--text-muted)] font-bold flex items-center justify-between">
                <span data-menu-i18n="caseTitle">[ DỰ ÁN CASE STUDY ]</span>
                <span class="font-mono">04 CASES</span>
              </div>
              <div class="space-y-2.5 font-mono text-xs uppercase">
                <a href="yen.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">01. YÊN</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Aging-Tech · Healthcare Dual App</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="iq-myth.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">02. IQ MYTH</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">EdTech Web App · Conversion Design</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="momo.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">03. MOMO TRANSFER</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Fintech Concept · User Research & UI Redesign</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="shortpeek.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">04. SHORTPEEK</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Mobile App · UX Audit & UI Redesign</span>
                  </div>
                  <span>↗</span>
                </a>
              </div>
            </div>

            <div class="space-y-3 font-mono text-xs uppercase tracking-mono p-6 rounded-2xl hairline-all surface-card">
              <div class="text-[var(--text-muted)] font-bold flex items-center gap-2">
                <span class="w-2 h-2 rounded-full shrink-0" style="background:var(--status-dot, #10B981);"></span>
                <span data-menu-i18n="directTitle">[ TRỰC TIẾP LIÊN HỆ ]</span>
              </div>
              <div class="space-y-2 text-sm font-sans">
                <a href="mailto:mr.tru.designer@gmail.com" class="block font-bold hover:underline">mr.tru.designer@gmail.com ↗</a>
                <a href="tel:+84357458457" class="block text-[var(--text-muted)] hover:text-[var(--text-primary)]">(+84) 357 458 457</a>
              </div>
              <div class="pt-2">
                <a href="assets/TRU_Product_Designer_CV.pdf" target="_blank" class="inline-flex items-center gap-1.5 font-bold text-xs underline">
                  <span data-menu-i18n="downloadCv">TẢI VỀ RESUME (PDF)</span>
                  <span>↘</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="hairline-t px-4 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-mono text-[var(--text-muted)] flex-shrink-0 surface-card">
          <span>TRỨ — PRODUCT DESIGNER · HANOI, VIETNAM</span>
          <span>© 2026 NGUYỄN CÔNG TRỨ · HANOI, VIETNAM.</span>
        </div>
      `;
      document.body.appendChild(overlay);

      overlay.addEventListener('wheel', (e) => e.stopPropagation(), { passive: true });
      overlay.addEventListener('touchmove', (e) => e.stopPropagation(), { passive: true });

      if (typeof window.setTheme === 'function') {
        window.setTheme(getTheme());
      }
    }

    // Highlight active route badge inside any #menu-overlay (static or injected)
    const syncMenuState = () => {
      const lang = getLang();
      const dict = MENU_I18N[lang] || MENU_I18N.vi;
      document.querySelectorAll('[data-menu-i18n]').forEach((el) => {
        const k = el.getAttribute('data-menu-i18n');
        if (dict[k]) el.textContent = dict[k];
      });
      document.querySelectorAll('[data-current-pill]').forEach((badge) => {
        const targetHref = badge.getAttribute('data-current-pill');
        if (targetHref === curFile) {
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }
      });
    };
    syncMenuState();
    new MutationObserver(syncMenuState).observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang']
    });

    // Expose global openMenuOverlay / closeMenuOverlay if page doesn't define them
    if (typeof window.openMenuOverlay !== 'function') {
      let menuOpen = false;
      window.openMenuOverlay = function () {
        const ov = document.getElementById('menu-overlay');
        if (!ov) return;
        menuOpen = true;
        syncMenuState();
        ov.classList.remove('hidden');
        ov.classList.add('flex');
        ov.scrollTop = 0;
        document.body.style.overflow = 'hidden';
        if (typeof lenis !== 'undefined' && lenis) lenis.stop();
        if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
          gsap.fromTo(ov, { y: '-100%' }, { y: '0%', duration: 0.52, ease: 'power4.out' });
          gsap.from(ov.querySelectorAll('.menu-link-row'), {
            y: 55,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: 'power3.out',
            delay: 0.14
          });
        }
        if (typeof lucide !== 'undefined' && lucide.createIcons) lucide.createIcons();
      };

      window.closeMenuOverlay = function (cb) {
        const ov = document.getElementById('menu-overlay');
        if (!ov || !menuOpen) {
          if (typeof cb === 'function') cb();
          return;
        }
        if (typeof gsap !== 'undefined' && !prefersReducedMotion()) {
          gsap.to(ov, {
            y: '-100%',
            duration: 0.36,
            ease: 'power3.in',
            onComplete: () => {
              ov.classList.add('hidden');
              ov.classList.remove('flex');
              menuOpen = false;
              document.body.style.overflow = '';
              if (typeof lenis !== 'undefined' && lenis) lenis.start();
              if (typeof cb === 'function') cb();
            }
          });
        } else {
          ov.classList.add('hidden');
          ov.classList.remove('flex');
          menuOpen = false;
          document.body.style.overflow = '';
          if (typeof lenis !== 'undefined' && lenis) lenis.start();
          if (typeof cb === 'function') cb();
        }
      };

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuOpen) {
          e.stopImmediatePropagation();
          window.closeMenuOverlay();
        }
      }, true);
    }

    // Intercept internal .html links for seamless Pixel-Matrix Page Transitions
    document.addEventListener('click', (e) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const link = e.target.closest && e.target.closest('a[href]');
      if (!link) return;
      if (link.target && link.target !== '_self') return;
      if (link.hasAttribute('download')) return;

      const rawHref = link.getAttribute('href');
      if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('mailto:') || rawHref.startsWith('tel:') || rawHref.startsWith('javascript:')) {
        return;
      }

      let url;
      try {
        url = new URL(rawHref, window.location.href);
      } catch (_) {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (!url.pathname.endsWith('.html') && url.pathname !== '/') return;

      const rawSeg = url.pathname.replace(/\/+$/, '').split('/').pop() || 'index.html';
      const destFile = rawSeg.endsWith('.html') ? rawSeg : rawSeg + '.html';
      // If clicking link to the exact same current page, close menu and scroll if hash exists
      if (destFile === curFile) {
        e.preventDefault();
        if (typeof window.closeMenuOverlay === 'function') {
          window.closeMenuOverlay(() => {
            if (url.hash && typeof window.scrollToAnchor === 'function') window.scrollToAnchor(url.hash);
          });
        }
        return;
      }

      e.preventDefault();
      navigateWithCurtain(url.href);
    });
  }

  /* ==========================================================================
   * 6. BOOTSTRAP
   * ========================================================================== */
  const boot = () => {
    initUniversalMenuAndTransitions();
    initIntroCurtain();
    initHalftoneCursor();
    initCursorPillAndHovers();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
