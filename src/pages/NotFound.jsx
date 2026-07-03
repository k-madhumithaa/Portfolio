import { Link } from "react-router-dom";
import FuzzyText from "../components/effects/FuzzyText";
import GalaxyBackground from "../components/effects/GalaxyBackground";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <GalaxyBackground />
      <FuzzyText text="404" fontSize={120} />
      <p className="mt-6 max-w-md text-[var(--muted)]">
        This orbit doesn't exist. The page you're looking for has drifted off course.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-gradient-to-r from-[var(--violet)] to-[var(--cyan)] px-6 py-3 text-sm font-semibold text-black"
      >
        Back to Home
      </Link>
    </div>
  );
}
