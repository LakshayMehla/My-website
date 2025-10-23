export const event = ({ eventName, category, label, action }) => {
  // Only run on client side
  if (typeof window === "undefined") return;

  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: category,
      event_label: label,
      action,
      send_to: "G-GZYLVY8RJS",
    });
  } else {
    console.error("gtag is not available");
  }
};
