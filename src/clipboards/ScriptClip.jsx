import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ScriptClipBoard() {
  const [value, setValue] = useState(`
  <script src="https://cdn-widgetsrepository.yotpo.com/v1/loader/BQxqFA3BIrSbHw1GHCAa2UBApLu0VST7sh4l70hk" async></script>
    `);
  const [isCopied, setCopied] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <>
      <textarea
        disabled
        contentEditable
        spellCheck={false}
        onFocus={(event) => event.target.select()}
        type="text"
        value={value}
        onChange={({ target: { value } }) => {
          setValue(value);
          setCopied(false);
        }}
      />
      <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
        <button type="button" className="btn btn-primary">
          {isCopied ? "Copied!" : "Copy Script"}
        </button>
      </CopyToClipboard>
    </>
  );
}

export default ScriptClipBoard;
