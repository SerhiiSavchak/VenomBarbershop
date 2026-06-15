type BodySnapshot = {
  scrollY: number;
  htmlOverflow: string;
  htmlOverscroll: string;
  bodyPosition: string;
  bodyTop: string;
  bodyLeft: string;
  bodyRight: string;
  bodyWidth: string;
  bodyTouchAction: string;
  bodyOverflow: string;
};

let lockCount = 0;
let snapshot: BodySnapshot | null = null;

/** Locks page scroll. Returns a release function — call on close/unmount. Ref-counted for nested locks. */
export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") {
    return () => {};
  }

  if (lockCount === 0) {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    snapshot = {
      scrollY,
      htmlOverflow: html.style.overflow,
      htmlOverscroll: html.style.overscrollBehavior,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
      bodyTouchAction: body.style.touchAction,
      bodyOverflow: body.style.overflow,
    };

    html.style.overscrollBehavior = "none";
    html.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.touchAction = "none";
    body.style.overflow = "hidden";
  }

  lockCount += 1;

  return () => {
    unlockBodyScroll();
  };
}

/** Restores page scroll if no locks remain. Safe to call multiple times. */
export function unlockBodyScroll(): void {
  if (typeof document === "undefined" || lockCount <= 0) {
    return;
  }

  lockCount -= 1;
  if (lockCount > 0 || !snapshot) {
    return;
  }

  const html = document.documentElement;
  const body = document.body;
  const { scrollY, ...prev } = snapshot;
  snapshot = null;

  html.style.overflow = prev.htmlOverflow;
  html.style.overscrollBehavior = prev.htmlOverscroll;
  body.style.position = prev.bodyPosition;
  body.style.top = prev.bodyTop;
  body.style.left = prev.bodyLeft;
  body.style.right = prev.bodyRight;
  body.style.width = prev.bodyWidth;
  body.style.touchAction = prev.bodyTouchAction;
  body.style.overflow = prev.bodyOverflow;

  const prevScrollBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = "auto";
  window.scrollTo(0, scrollY);
  html.style.scrollBehavior = prevScrollBehavior;
}
