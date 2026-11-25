/**
 * TRỨ PORTFOLIO — Interactive FX Engine
 * 1. Monospace Cipher-Scramble Engine
 * 2. ToyFight-Inspired 5-Column Staggered Curtain & Loader Engine
 * 3. Satisfying Black Fire Cursor Trail Animation (Zain Zafar / Code Morphism)
 * 4. Floating Magnetic Monospace Cursor Pill (with Cipher-Scramble)
 * 5. Universal Navigation Menu & Instant Project Transitions
 * 6. Tactile Slot-Machine Roller & Copy-Email Engine
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

  // Proactively hide native OS cursor on fine-pointer devices when custom cursor is enabled
  if (hasFinePointer() && !prefersReducedMotion()) {
    injectInversionCursorStyles();
    if (document.documentElement) {
      document.documentElement.classList.add('has-custom-cursor', 'has-fire-cursor');
    }
  }

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
   * 2. TOYFIGHT-INSPIRED 5-COLUMN STAGGERED INTRO & TRANSITION ENGINE
   * ========================================================================== */
  function injectCurtainStyles() {
    if (document.getElementById('tru-curtain-styles')) return;
    const style = document.createElement('style');
    style.id = 'tru-curtain-styles';
    style.textContent = `
      .tru-curtain-overlay {
        position: fixed;
        inset: 0;
        z-index: 99999;
        display: flex;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        overflow: hidden;
      }
      .tru-curtain-col {
        flex: 1;
        height: 100%;
        background-color: #0E0E0E;
        will-change: transform;
        transform: translateY(0);
      }
      [data-theme="dark"] .tru-curtain-col {
        background-color: #080809;
      }
      .tru-curtain-badge-wrap {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 100000;
        display: flex;
        align-items: center;
        gap: 8px;
        pointer-events: none;
        user-select: none;
        transition: opacity 0.22s ease, transform 0.22s ease;
      }
      .tru-curtain-badge {
        background: rgba(255, 255, 255, 0.12);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 9999px;
        padding: 6px 14px;
        color: #F5F5F0;
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: inline-flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 10px 28px rgba(0, 0, 0, 0.45);
      }
      .tru-curtain-badge-accent {
        color: #C4FF00 !important;
        border-color: rgba(196, 255, 0, 0.35) !important;
      }
      @media (max-width: 640px) {
        .tru-curtain-badge-wrap {
          flex-direction: column !important;
          gap: 6px !important;
        }
        .tru-curtain-badge {
          padding: 5px 12px !important;
          font-size: 10px !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function getPagePillLabels() {
    const file = getCurrentPageFile();
    if (file === 'shortpeek.html') return ['TRỨ', 'CASE STUDY', '01. SHORTPEEK'];
    if (file === 'yen.html') return ['TRỨ', 'CASE STUDY', '02. YÊN'];
    if (file === 'iq-myth.html') return ['TRỨ', 'CASE STUDY', '03. IQ MYTH'];
    if (file === 'momo.html') return ['TRỨ', 'CASE STUDY', '04. MOMO'];
    return ['TRỨ', 'PRODUCT DESIGNER', 'PORTFOLIO'];
  }

  function getOrCreateToyFightCurtain(customLabels) {
    injectCurtainStyles();
    let overlay = document.getElementById('tru-curtain-overlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'tru-curtain-overlay';
      overlay.className = 'tru-curtain-overlay';
      overlay.setAttribute('aria-hidden', 'true');
      overlay.innerHTML = `
        <div class="tru-curtain-col"></div>
        <div class="tru-curtain-col"></div>
        <div class="tru-curtain-col"></div>
        <div class="tru-curtain-col"></div>
        <div class="tru-curtain-col"></div>
        <div id="tru-curtain-badge" class="tru-curtain-badge-wrap"></div>
      `;
      document.body.appendChild(overlay);
    }

    const badgeWrap = overlay.querySelector('#tru-curtain-badge');
    if (badgeWrap) {
      const labels = customLabels || getPagePillLabels();
      badgeWrap.innerHTML = `
        <div class="tru-curtain-badge">
          <span style="width:6px;height:6px;border-radius:9999px;background:#10B981;display:inline-block;box-shadow:0 0 8px #10B981;"></span>
          <span>${labels[0] || 'TRỨ'}</span>
        </div>
        <div class="tru-curtain-badge">
          <span>${labels[1] || 'PRODUCT DESIGNER'}</span>
        </div>
        <div class="tru-curtain-badge tru-curtain-badge-accent">
          <span>${labels[2] || 'PORTFOLIO'}</span>
        </div>
      `;
    }
    return overlay;
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

    // Subpage tag scramble
    const subHeroTag = document.querySelector('[data-i18n="hero-tag"] span:last-child, [data-i18n="status-tag"] span:last-child');
    if (subHeroTag) {
      scrambleElement(subHeroTag, subHeroTag.textContent, { delay: Math.round((delaySec + 0.08) * 1000), duration: 360 });
    }
  }

  function initToyFightCurtain() {
    if (prefersReducedMotion()) {
      const oldOverlay = document.getElementById('tru-intro-overlay');
      if (oldOverlay) oldOverlay.remove();
      const curtain = document.getElementById('tru-curtain-overlay');
      if (curtain) curtain.remove();
      document.documentElement.classList.remove('tru-curtain-lock');
      triggerHeroEntrance(0);
      return;
    }

    const oldOverlay = document.getElementById('tru-intro-overlay');
    if (oldOverlay) oldOverlay.remove();

    const overlay = getOrCreateToyFightCurtain();
    const cols = overlay.querySelectorAll('.tru-curtain-col');
    const badge = overlay.querySelector('#tru-curtain-badge');

    let isTransition = false;
    try {
      isTransition = sessionStorage.getItem('tru_transition') === '1';
      sessionStorage.removeItem('tru_transition');
    } catch (_) {}

    const failSafe = setTimeout(() => {
      overlay.style.pointerEvents = 'none';
      overlay.style.display = 'none';
      document.documentElement.classList.remove('tru-curtain-lock');
      triggerHeroEntrance(0);
    }, 2800);

    if (typeof gsap === 'undefined') {
      clearTimeout(failSafe);
      overlay.style.pointerEvents = 'none';
      overlay.style.display = 'none';
      document.documentElement.classList.remove('tru-curtain-lock');
      triggerHeroEntrance(0);
      return;
    }

    const holdDelay = isTransition ? 0.14 : 0.48;

    gsap.set(cols, { yPercent: 0 });
    gsap.set(badge, { opacity: 1, scale: 1 });
    overlay.style.pointerEvents = 'all';

    const tl = gsap.timeline({
      onComplete: () => {
        clearTimeout(failSafe);
        overlay.style.pointerEvents = 'none';
        document.documentElement.classList.remove('tru-curtain-lock');
        triggerHeroEntrance(0.04);
      }
    });

    tl.to(badge, {
      opacity: 0,
      scale: 0.92,
      duration: 0.22,
      ease: 'power2.in',
      delay: holdDelay
    });

    tl.to(
      cols,
      {
        yPercent: -100,
        duration: 0.72,
        stagger: 0.065,
        ease: 'power4.inOut'
      },
      '-=0.08'
    );
  }

  /* ==========================================================================
   * 3. SATISFYING BLACK FIRE CURSOR TRAIL ENGINE (Code Morphism / Zain Zafar)
   * ========================================================================== */
  /* ==========================================================================
   * 3. MINIMALIST BLACK INVERTING CURSOR (MÀU ÂM BẢN / DIFFERENCE BLEND LENS)
   * ========================================================================== */
  function injectInversionCursorStyles() {
    if (document.getElementById('tru-inversion-cursor-styles')) return;
    const style = document.createElement('style');
    style.id = 'tru-inversion-cursor-styles';
    style.textContent = `
      @media (pointer: fine) and (prefers-reduced-motion: no-preference) {
        html.has-custom-cursor,
        html.has-custom-cursor *,
        html.has-custom-cursor *::before,
        html.has-custom-cursor *::after,
        html.has-fire-cursor,
        html.has-fire-cursor *,
        html.has-fire-cursor *::before,
        html.has-fire-cursor *::after,
        body.has-custom-cursor,
        body.has-custom-cursor *,
        body.has-custom-cursor *::before,
        body.has-custom-cursor *::after,
        body.has-fire-cursor,
        body.has-fire-cursor *,
        body.has-fire-cursor *::before,
        body.has-fire-cursor *::after {
          cursor: none !important;
        }
      }

      .tru-inversion-cursor {
        position: fixed;
        top: 0;
        left: 0;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background-color: #ffffff;
        mix-blend-mode: difference;
        pointer-events: none;
        z-index: 100000;
        opacity: 0;
        will-change: transform, opacity;
        transform: translate3d(-100px, -100px, 0);
      }
    `;
    (document.head || document.documentElement).appendChild(style);
  }
  const injectFireCursorStyles = injectInversionCursorStyles;
  const initBlackFireCursorTrail = initInversionCursor;

  function initInversionCursor() {
    if (!hasFinePointer() || prefersReducedMotion()) return;

    injectInversionCursorStyles();
    if (document.documentElement) {
      document.documentElement.classList.add('has-custom-cursor', 'has-fire-cursor');
    }
    if (document.body) {
      document.body.classList.add('has-custom-cursor', 'has-fire-cursor');
    }

    // Clean up any legacy fire cursor container
    const oldFire = document.getElementById('tru-fire-cursor-container');
    if (oldFire) oldFire.remove();

    let cursor = document.getElementById('tru-inversion-cursor');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'tru-inversion-cursor';
      cursor.className = 'tru-inversion-cursor';
      cursor.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cursor);
    }

    const useGsap = typeof gsap !== 'undefined';
    if (useGsap) {
      gsap.set(cursor, { xPercent: -50, yPercent: -50, scale: 1 });
    } else {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    }

    let isVisible = false;
    let isHovering = false;
    let isClicking = false;
    let currentScale = 1;

    const setX = useGsap ? gsap.quickTo(cursor, 'x', { duration: 0.15, ease: 'power2.out' }) : null;
    const setY = useGsap ? gsap.quickTo(cursor, 'y', { duration: 0.15, ease: 'power2.out' }) : null;

    const updateScale = () => {
      let target = isHovering ? 3.6 : 1.0;
      if (isClicking) target *= 0.85;
      currentScale = target;

      if (useGsap) {
        gsap.to(cursor, {
          scale: target,
          duration: isHovering ? 0.32 : 0.28,
          ease: isHovering ? 'power3.out' : 'power2.out',
          overwrite: 'auto'
        });
      } else {
        cursor.style.transform = `translate(-50%, -50%) scale(${target})`;
      }
    };

    // Text & interactive elements that trigger the expanded negative lens
    const HOVER_TARGETS = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'a', 'button', 'input', 'textarea', 'select', 'label',
      'li', 'dt', 'dd', 'blockquote', 'strong', 'em', 'b', 'i', 'th', 'td',
      '.case-row', '.case-filter-btn', '.surface-card', '.group', '[data-cursor-vi]', '[data-cursor-en]',
      'img', 'video', 'svg', 'figure', '[role="button"]', '[onclick]'
    ].join(', ');

    window.addEventListener(
      'mousemove',
      (e) => {
        if (!isVisible) {
          isVisible = true;
          if (useGsap) {
            gsap.to(cursor, { opacity: 1, duration: 0.2, overwrite: 'auto' });
          } else {
            cursor.style.opacity = '1';
          }
        }

        if (setX && setY) {
          setX(e.clientX);
          setY(e.clientY);
        } else {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }

        // Detect whether mouse is over text, buttons, links, or visual elements
        const match = e.target && e.target.closest && e.target.closest(HOVER_TARGETS);
        if (match && !isHovering) {
          isHovering = true;
          updateScale();
        } else if (!match && isHovering) {
          isHovering = false;
          updateScale();
        }
      },
      { passive: true }
    );

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      if (useGsap) {
        gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.25, overwrite: 'auto' });
      } else {
        cursor.style.opacity = '0';
      }
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      if (useGsap) {
        gsap.to(cursor, { opacity: 1, scale: currentScale, duration: 0.25, overwrite: 'auto' });
      } else {
        cursor.style.opacity = '1';
      }
    });

    window.addEventListener('mousedown', () => {
      isClicking = true;
      updateScale();
    });

    window.addEventListener('mouseup', () => {
      isClicking = false;
      updateScale();
    });
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
      'position:fixed;left:0;top:0;z-index:100001;pointer-events:none;opacity:0;transform:translate3d(14px,-28px,0) scale(0.92);will-change:transform,opacity;';
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
        const offsetDist = 38;
        const flipLeft = e.clientX + offsetDist + pillWidth > window.innerWidth - 12;
        const tx = flipLeft ? e.clientX - pillWidth - offsetDist : e.clientX + offsetDist;
        const ty = Math.max(12, e.clientY - 32);

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

    let destLabel = ['TRỨ', 'PRODUCT DESIGNER', 'PORTFOLIO'];
    if (href.includes('shortpeek')) destLabel = ['TRỨ', 'CASE STUDY', '01. SHORTPEEK'];
    else if (href.includes('yen')) destLabel = ['TRỨ', 'CASE STUDY', '02. YÊN'];
    else if (href.includes('iq-myth')) destLabel = ['TRỨ', 'CASE STUDY', '03. IQ MYTH'];
    else if (href.includes('momo')) destLabel = ['TRỨ', 'CASE STUDY', '04. MOMO'];

    const overlay = getOrCreateToyFightCurtain(destLabel);
    const cols = overlay.querySelectorAll('.tru-curtain-col');
    const badge = overlay.querySelector('#tru-curtain-badge');

    gsap.set(cols, { yPercent: 100 });
    gsap.set(badge, { opacity: 0, scale: 0.88 });
    overlay.style.pointerEvents = 'all';
    overlay.style.display = 'flex';

    const tl = gsap.timeline({
      onComplete: () => {
        try {
          sessionStorage.setItem('tru_transition', '1');
        } catch (_) {}
        window.location.href = href;
      }
    });

    tl.to(cols, {
      yPercent: 0,
      duration: 0.58,
      stagger: 0.055,
      ease: 'power4.inOut'
    });

    tl.to(
      badge,
      {
        opacity: 1,
        scale: 1,
        duration: 0.22,
        ease: 'back.out(1.2)'
      },
      '-=0.22'
    );
  }

  window.truNavigate = navigateWithCurtain;

  function initUniversalMenuAndTransitions() {
    // Clean up any bfcache curtain on browser Back/Forward
    window.addEventListener('pageshow', (e) => {
      document.querySelectorAll('.tru-exit-canvas').forEach((c) => c.remove());
      const overlay = document.getElementById('tru-curtain-overlay');
      if (overlay && e.persisted) {
        overlay.style.pointerEvents = 'none';
        overlay.querySelectorAll('.tru-curtain-col').forEach((c) => {
          c.style.transform = 'translateY(-100%)';
        });
        const badge = overlay.querySelector('#tru-curtain-badge');
        if (badge) badge.style.opacity = '0';
        document.documentElement.classList.remove('tru-curtain-lock');
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
                <a href="shortpeek.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">01. SHORTPEEK</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Mobile App · UX Audit & UI Redesign</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="yen.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">02. YÊN</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Aging-Tech · Healthcare Dual App</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="iq-myth.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">03. IQ MYTH</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">EdTech Web App · Conversion Design</span>
                  </div>
                  <span>↗</span>
                </a>
                <a href="momo.html" class="w-full text-left p-3.5 rounded-xl hairline-all hover:bg-[var(--bg-primary)] transition-all flex items-center justify-between group cursor-pointer block">
                  <div>
                    <span class="font-bold text-sm block font-sans">04. MOMO TRANSFER</span>
                    <span class="text-[11px] text-[var(--text-muted)] normal-case">Fintech Concept · User Research & UI Redesign</span>
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
   * 6. TACTILE SLOT-MACHINE ROLLER & COPY-EMAIL ENGINE
   * ========================================================================== */
  function injectSlotRollStyles() {
    if (document.getElementById('tru-slot-roll-styles')) return;
    const style = document.createElement('style');
    style.id = 'tru-slot-roll-styles';
    style.textContent = `
      .slot-roll-btn {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        transition: border-color 0.3s ease, background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease, transform 0.18s ease;
      }
      .slot-roll-btn:active {
        transform: scale(0.97);
      }
      .slot-roller {
        position: relative;
        display: block;
        overflow: hidden;
        height: 1.35em;
        line-height: 1.35em;
      }
      .slot-roller .slot-line {
        display: block;
        white-space: nowrap;
        transition: transform 0.38s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
        will-change: transform;
      }
      .slot-roller .slot-line-default {
        transform: translateY(0);
      }
      .slot-roller .slot-line-hover {
        position: absolute;
        inset: 0;
        transform: translateY(100%);
      }
      .slot-roller .slot-line-success {
        position: absolute;
        inset: 0;
        transform: translateY(200%);
      }
      .slot-roll-btn:hover:not(.is-copied) .slot-roller .slot-line-default,
      .group:hover:not(.is-copied) .slot-roller .slot-line-default {
        transform: translateY(-100%) !important;
      }
      .slot-roll-btn:hover:not(.is-copied) .slot-roller .slot-line-hover,
      .group:hover:not(.is-copied) .slot-roller .slot-line-hover {
        transform: translateY(0) !important;
      }
      .slot-roll-btn.is-copied {
        border-color: #10B981 !important;
        background-color: rgba(16, 185, 129, 0.12) !important;
        color: #10B981 !important;
      }
      [data-theme="dark"] .slot-roll-btn.is-copied {
        border-color: #C4FF00 !important;
        background-color: rgba(196, 255, 0, 0.12) !important;
        color: #C4FF00 !important;
      }
      .slot-roll-btn.is-copied .slot-roller .slot-line-default {
        transform: translateY(-200%) !important;
      }
      .slot-roll-btn.is-copied .slot-roller .slot-line-hover {
        transform: translateY(-100%) !important;
      }
      .slot-roll-btn.is-copied .slot-roller .slot-line-success {
        transform: translateY(0) !important;
      }
      .tru-copy-toast {
        position: fixed;
        bottom: 28px;
        left: 50%;
        transform: translate(-50%, 20px);
        opacity: 0;
        z-index: 99999;
        pointer-events: none;
        transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
      }
      .tru-copy-toast.is-visible {
        transform: translate(-50%, 0);
        opacity: 1;
      }
      @media (prefers-reduced-motion: reduce) {
        .slot-roller .slot-line {
          transition: opacity 0.15s ease !important;
          transform: none !important;
        }
        .slot-roll-btn:hover:not(.is-copied) .slot-roller .slot-line-default {
          opacity: 0;
        }
        .slot-roll-btn:hover:not(.is-copied) .slot-roller .slot-line-hover {
          opacity: 1;
        }
        .slot-roll-btn.is-copied .slot-roller .slot-line-default,
        .slot-roll-btn.is-copied .slot-roller .slot-line-hover {
          opacity: 0 !important;
        }
        .slot-roll-btn.is-copied .slot-roller .slot-line-success {
          opacity: 1 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  let toastTimer = null;
  function showCopyToast(msg) {
    let toast = document.getElementById('tru-copy-toast-el');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'tru-copy-toast-el';
      toast.className = 'tru-copy-toast';
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }
    toast.innerHTML = `
      <div class="px-4 py-2.5 rounded-full bg-[#141416]/95 border border-white/20 text-[#F5F5F0] font-mono text-xs shadow-2xl flex items-center gap-2.5 backdrop-blur-md">
        <span class="w-2 h-2 rounded-full bg-[#C4FF00] shrink-0 animate-pulse"></span>
        <span class="font-medium tracking-tight">${msg}</span>
      </div>
    `;
    requestAnimationFrame(() => {
      toast.classList.add('is-visible');
    });

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  function initSlotMachineRollers() {
    injectSlotRollStyles();

    window.copyEmail = function (triggerEl) {
      const email = 'mr.tru.designer@gmail.com';
      const curLang = getLang();

      navigator.clipboard.writeText(email).then(() => {
        if (typeof gtag === 'function') {
          gtag('event', 'copy_email', {
            event_category: 'engagement',
            event_label: email
          });
        }

        const buttons = triggerEl
          ? [triggerEl.closest('.slot-roll-btn, button') || triggerEl]
          : Array.from(document.querySelectorAll('.slot-roll-btn'));

        buttons.forEach((btn) => {
          if (!btn) return;
          btn.classList.add('is-copied');

          const icon = btn.querySelector('.slot-icon i, i[data-lucide]');
          if (icon) {
            icon.setAttribute('data-lucide', 'check');
            if (typeof lucide !== 'undefined' && lucide.createIcons) {
              lucide.createIcons({ root: btn });
            }
          }

          const legacySpan = btn.querySelector('#copy-btn-text');
          if (legacySpan && !btn.querySelector('.slot-roller')) {
            legacySpan.textContent = curLang === 'en' ? '✓ Copied to clipboard!' : '✓ Đã sao chép email!';
            legacySpan.style.color = '#34D399';
          }

          clearTimeout(btn._copiedTimer);
          btn._copiedTimer = setTimeout(() => {
            btn.classList.remove('is-copied');
            if (icon) {
              icon.setAttribute('data-lucide', 'copy');
              if (typeof lucide !== 'undefined' && lucide.createIcons) {
                lucide.createIcons({ root: btn });
              }
            }
            if (legacySpan && !btn.querySelector('.slot-roller')) {
              const activeL = getLang();
              legacySpan.textContent = activeL === 'en' ? 'Copy Email Address' : 'Sao chép địa chỉ email';
              legacySpan.style.color = '';
            }
          }, 2500);
        });

        showCopyToast(
          curLang === 'en'
            ? '✓ Copied mr.tru.designer@gmail.com to clipboard'
            : '✓ Đã sao chép mr.tru.designer@gmail.com vào clipboard'
        );
      }).catch((err) => {
        console.warn('Clipboard write failed, fallback to mailto:', err);
        window.location.href = 'mailto:' + email;
      });
    };
  }

  /* ==========================================================================
   * 7. BOOTSTRAP
   * ========================================================================== */
  const boot = () => {
    initSlotMachineRollers();
    initUniversalMenuAndTransitions();
    initToyFightCurtain();
    initInversionCursor();
    initCursorPillAndHovers();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
