import { useEffect, useState } from "react";
import { CATEGORIES } from "../utils/helpers";

// Tries each URL in turn and uses the first one that really loads.
// Returns { src, failed } - failed becomes true if none of the images worked.
function useFirstWorkingImage(urls) {
  const key = urls.join("|");
  const [state, setState] = useState({ src: null, failed: false });

  useEffect(() => {
    let cancelled = false;
    let i = 0;
    setState({ src: null, failed: false });

    function tryNext() {
      if (cancelled) return;
      if (i >= urls.length) {
        setState({ src: null, failed: true });
        return;
      }
      const url = urls[i++];
      const img = new Image();
      img.onload = () => !cancelled && setState({ src: url, failed: false });
      img.onerror = tryNext;
      img.src = url;
    }
    tryNext();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  return state;
}

// A <div> with the recipe photo as background (keeps your original CSS working).
// If no photo loads, a soft background with the category emoji is shown instead.
export default function RecipeImage({ recipe, className, children }) {
  const urls = [recipe.image, ...(recipe.altImages || []), `/images/${recipe.id}.jpg`].filter(Boolean);
  const { src, failed } = useFirstWorkingImage(urls);
  const icon = CATEGORIES.find((c) => c.value === recipe.category)?.icon || "🍽️";

  const style = src
    ? { backgroundImage: `url("${src}")`, backgroundSize: "cover", backgroundPosition: "center" }
    : {
        backgroundImage: failed ? "linear-gradient(135deg, #ffe8d2, #ffd2ad)" : "none",
        backgroundColor: "#f3e3d3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      };

  return (
    <div className={className} style={style}>
      {failed && (
        <span style={{ fontSize: "64px", opacity: 0.85 }} aria-hidden="true">
          {icon}
        </span>
      )}
      {children}
    </div>
  );
}
