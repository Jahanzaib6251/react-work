import { useRef, useEffect } from 'react';

function Focus() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === '*') {
        event.preventDefault();
        inputRef.current.focus();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
      <p>Press / key to focus on the input field.</p>
    </div>
  );
}

export default Focus;
