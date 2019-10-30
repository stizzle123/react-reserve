const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://development-url.now.sh"
    : "http://localhost:3000";

export default baseUrl;
