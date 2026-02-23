import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    // Prevent loading twice
    if (document.getElementById("fastbots-script")) return;

    const script = document.createElement("script");
    script.id = "fastbots-script";
    script.src = "https://app.fastbots.ai/embed.js";
    script.defer = true;
    script.setAttribute("data-bot-id", "cmlzbyqpp01ihpe1ogom9kw3f");

    document.body.appendChild(script);

    return () => {
      // optional cleanup (usually not needed for global bot)
    };
  }, []);

  return null; // nothing visible, bot injects itself
}