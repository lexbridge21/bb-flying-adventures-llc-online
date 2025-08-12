import { useEffect } from "react";

export default function SmartsuppChat() {
  useEffect(() => {
    // Prevent duplicate script injection
    if (window.smartsupp) return;

    window._smartsupp = window._smartsupp || {};
    window._smartsupp.key = "a8398b39389631c65f0c9fc13db99be75f6fad2d";

    (function (d) {
      var s,
        c,
        o = (window.smartsupp = function () {
          o._.push(arguments);
        });
      o._ = [];
      s = d.getElementsByTagName("script")[0];
      c = d.createElement("script");
      c.type = "text/javascript";
      c.charset = "utf-8";
      c.async = true;
      c.src = "https://www.smartsuppchat.com/loader.js?";
      s.parentNode.insertBefore(c, s);
    })(document);
  }, []);

  return (
    <noscript>
      Powered by{" "}
      <a
        href="https://www.smartsupp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Smartsupp
      </a>
    </noscript>
  );
}
