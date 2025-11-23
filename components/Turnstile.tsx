'use client';

import { useEffect, useRef } from 'react';

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
}

export default function Turnstile({ onVerify, onError, onExpire }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const callbacksRef = useRef({ onVerify, onError, onExpire });

  // Update callbacks ref when props change, without triggering re-render
  useEffect(() => {
    callbacksRef.current = { onVerify, onError, onExpire };
  }, [onVerify, onError, onExpire]);

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="turnstile"]');

    const initWidget = () => {
      if (containerRef.current && window.turnstile && !widgetIdRef.current) {
        const sitekey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

        // ⚠️ SECURITY: Warn if using test key in production
        if (!sitekey || sitekey === '1x00000000000000000000AA') {
          console.error('⚠️ CRITICAL: Cloudflare Turnstile is not configured!');
          console.error('   The test key only works on localhost.');
          console.error('   Please set NEXT_PUBLIC_TURNSTILE_SITE_KEY in your environment variables.');
          console.error('   Get your site key from: https://dash.cloudflare.com/?to=/:account/turnstile');

          // Show error to user
          if (containerRef.current) {
            containerRef.current.innerHTML = `
              <div style="padding: 16px; background: #fee; border: 2px solid #c33; border-radius: 8px; color: #c33; font-family: system-ui; font-size: 14px;">
                <strong>⚠️ CAPTCHA Configuration Error</strong><br/>
                <span style="font-size: 12px;">Cloudflare Turnstile is not configured. Please contact the site administrator.</span>
              </div>
            `;
          }
          return;
        }

        // Render the widget only once
        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey,
          callback: (token: string) => {
            callbacksRef.current.onVerify(token);
          },
          'error-callback': () => {
            console.error('Turnstile error - verification failed');
            callbacksRef.current.onError?.();
          },
          'expired-callback': () => {
            console.log('Turnstile token expired - user needs to re-verify');
            callbacksRef.current.onExpire?.();
          },
          theme: 'light',
          size: 'normal',
          // Prevent auto-refresh on error
          refresh: 'manual',
        });
      }
    };

    if (existingScript) {
      // Script already loaded, just init the widget
      if (window.turnstile) {
        initWidget();
      } else {
        // Script exists but not loaded yet
        existingScript.addEventListener('load', initWidget);
      }
    } else {
      // Load Turnstile script for the first time
      const script = document.createElement('script');
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
      script.async = true;
      script.defer = true;
      script.onload = initWidget;
      document.head.appendChild(script);
    }

    return () => {
      // Only remove the widget, not the script (keep it for other instances)
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []); // Empty deps - only run once on mount

  return (
    <div className="flex justify-center">
      <div ref={containerRef} />
    </div>
  );
}

// Type declaration for Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: any) => string;
      remove: (widgetId: string) => void;
      reset: (widgetId: string) => void;
    };
  }
}
