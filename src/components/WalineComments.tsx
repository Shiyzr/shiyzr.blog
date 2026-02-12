import React, { useEffect, useRef } from 'react';
import { init } from '@waline/client';
import '@waline/client/style';

interface WalineCommentsProps {
  serverURL?: string;
  path?: string;
}

const WalineComments: React.FC<WalineCommentsProps> = ({
  serverURL,
  path,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const walineInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const walineServerURL = serverURL || import.meta.env.PUBLIC_WALINE_SERVER_URL;

    if (!walineServerURL) {
      console.warn('Waline serverURL is missing. Please provide it via props or PUBLIC_WALINE_SERVER_URL env var.');
      return;
    }

    walineInstanceRef.current = init({
      el: containerRef.current,
      serverURL: walineServerURL,
      path: path || window.location.pathname,
      dark: 'html[class="dark"]', // Auto dark mode support if html has class="dark"
      login: 'enable',
      emoji: [
        '//unpkg.com/@waline/emojis@1.2.0/weibo',
        '//unpkg.com/@waline/emojis@1.2.0/bilibili',
      ],
    });

    return () => {
      if (walineInstanceRef.current) {
        walineInstanceRef.current.destroy();
      }
    };
  }, [serverURL, path]);

  return <div ref={containerRef} id="waline-comments" />;
};

export default WalineComments;
