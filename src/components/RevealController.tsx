'use client';

import { useEffect } from 'react';

/**
 * Da comportamiento a los botones de revelado (.reveal-btn) generados por
 * wrapReveals(): cada botón apunta con `data-target` a su panel; al pulsar,
 * alterna la clase `.open` en el botón y en el panel, lo que dispara la
 * animación de despliegue por CSS (grid-template-rows 0fr→1fr).
 *
 * Usa delegación de eventos sobre el documento, así funciona para todos los
 * botones presentes (y futuros) sin tener que enlazar cada uno.
 */
export function RevealController() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      const btn = target?.closest<HTMLElement>('.reveal-btn');
      if (!btn) return;
      const id = btn.dataset.target;
      const panel = id ? document.getElementById(id) : null;
      if (!panel) return;
      const open = btn.classList.toggle('open');
      panel.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return null;
}
