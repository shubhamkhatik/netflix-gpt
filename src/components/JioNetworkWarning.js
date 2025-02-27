import { useEffect, useState } from "react";

const JioNetworkWarning = () => {
  const [isJioUser, setIsJioUser] = useState(false);
  const IPINFO_TOKEN = process.env.REACT_APP_IPINFO_TOKEN;
  console.log("IPINFO_TOKEN",IPINFO_TOKEN);

  useEffect(() => {
    // Fetch user's ISP information
    fetch("https://ipinfo.io/json?token=" + IPINFO_TOKEN) // Get a free API key from ipinfo.io
      .then((response) => response.json())
      .then((data) => {
        if (data.org && data.org.toLowerCase().includes("jio")) {
          setIsJioUser(true);
        }
      })
      .catch((error) => console.error("Error fetching IP info:", error));
  }, []);

  if (!isJioUser) return null;

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-bbg-red-500 text-red-500 text-center p-2 z-30">
      ⚠️ TMDB API is blocked on Jio Network. Please use a VPN or a different network.
    </div>
  );
};

export default JioNetworkWarning;
