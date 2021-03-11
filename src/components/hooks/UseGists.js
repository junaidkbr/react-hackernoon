import { useCallback, useEffect, useState } from 'react';

/**
 * Loads all embedded gist iframes.
 */
export const useGists = () => {
  const [state, setState] = useState({
    ranOnce: false,
    completed: true,
  });

  const setGists = useCallback(() => {
    if (!state.ranOnce) {
    setState((prevState) => ({
      ...prevState,
      ranOnce: true,
      completed: false,
    }));
    }
  }, []);

  useEffect(() => {
    if (state.completed) {
      return;
    }

    setState((prevState) => ({ ...prevState, completed: true }));

    const iframes = document.querySelectorAll('[id^="gist"]');

    if (!iframes || !iframes.length) {
      return;
    }

    [...iframes].forEach((iframe) => {
      const gistId = iframe.id.split('-')[1];
      const src = `https://gist.github.com/${gistId}.js`;
      const scriptId = 'load-gist-script';
      iframe.contentWindow.document.write(`<script src="${src}" id="${scriptId}"></script>`);
      iframe.contentWindow.document.getElementById(scriptId).addEventListener('load', () => {
        setTimeout(() => {
          iframe.setAttribute('height', iframe.contentWindow.document.body.scrollHeight + 'px');
        }, 10);
      });
    });
  }, [state.completed, setState]);

  return {
    setGists,
  };
};

export default useGists;
