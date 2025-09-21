"use client";
import React, { useEffect, useRef, useState } from "react";

type StarRatingProps = {
  max?: number;
  value?: number; // controlled (e.g. 3.5)
  defaultValue?: number; // uncontrolled initial
  onChange?: (value: number) => void;
  size?: number; // px
  readOnly?: boolean;
  allowHalf?: boolean;
  className?: string;
  ariaLabel?: string;
};

function StarIcon(props: { className?: string; size?: number }) {
  const s = props.size ?? 24;
  // simple star path with fill=currentColor so we can color via text-yellow-400 etc.
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.168L12 18.896l-7.336 3.866 1.402-8.168L.132 9.21l8.2-1.192L12 .587z" />
    </svg>
  );
}

/**
 * StarRating component:
 * - Controlled: pass `value` and `onChange`
 * - Uncontrolled: pass `defaultValue` and no `value`
 */
export default function StarRating({
  max = 5,
  value,
  defaultValue = 0,
  onChange,
  size = 20,
  readOnly = false,
  allowHalf = true,
  className = "",
  ariaLabel = "Rating",
}: StarRatingProps) {
  const [internalValue, setInternalValue] = useState<number>(defaultValue);
  const isControlled = typeof value === "number";
  const rating = isControlled ? (value as number) : internalValue;
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isControlled) return;
    // sync internal only if controlled and wanted (not necessary but harmless)
    setInternalValue(value as number);
  }, [value, isControlled]);

  function setRating(newVal: number) {
    if (!isControlled) setInternalValue(newVal);
    onChange?.(newVal);
  }

  function handleClickStar(e: React.MouseEvent, index: number) {
    if (readOnly) return;
    if (!allowHalf) {
      setRating(index + 1);
      return;
    }

    const target = e.currentTarget as HTMLButtonElement;
    const rect = target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const half = clickX < rect.width / 2 ? 0.5 : 1;
    const newVal = index + half;
    setRating(newVal);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (readOnly) return;
    const key = e.key;
    if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(key)) return;

    e.preventDefault();
    let newVal = rating ?? 0;

    if (key === "ArrowLeft" || key === "ArrowDown") {
      newVal = allowHalf ? Math.max(0, +(Math.round((newVal - 0.5) * 2) / 2).toFixed(1)) : Math.max(0, Math.floor(newVal - 1));
    } else if (key === "ArrowRight" || key === "ArrowUp") {
      newVal = allowHalf ? Math.min(max, +(Math.round((newVal + 0.5) * 2) / 2).toFixed(1)) : Math.min(max, Math.ceil(newVal + 1));
    } else if (key === "Home") {
      newVal = 0;
    } else if (key === "End") {
      newVal = max;
    }

    setRating(newVal);
  }

  // helper to compute % fill for a star (0..100)
  function starFillPercent(index: number) {
    const fullIndex = index + 1;
    if (!rating || rating <= index) return 0;
    if (rating >= fullIndex) return 100;
    // partial
    const frac = rating - index; // 0 < frac < 1
    return Math.round(frac * 100);
  }

  return (
    <div
      ref={rootRef}
      role={readOnly ? undefined : "radiogroup"}
      aria-label={ariaLabel}
      tabIndex={readOnly ? undefined : 0}
      onKeyDown={handleKeyDown}
      className={`inline-flex items-center gap-2 ${className}`}
    >
      {Array.from({ length: max }).map((_, i) => {
        const percent = starFillPercent(i);
        const starId = `rating-star-${i}`;
        // For accessibility: each star is a radio-like button
        return (
          <button
            key={i}
            id={starId}
            type="button"
            role="radio"
            aria-checked={rating >= i + 1 - (allowHalf ? 0.5 : 0)}
            aria-label={`${i + 1} star`}
            onClick={(e) => handleClickStar(e, i)}
            className={`relative p-0 m-0 border-0 bg-transparent focus:outline-none ${
              readOnly ? "cursor-default" : "cursor-pointer"
            }`}
            // prevents button from shrinking if inside flex
            style={{ width: size, height: size }}
            title={`${(i + 1)}${allowHalf ? " (click left for half)" : ""}`}
          >
            {/* bottom (empty) star */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <StarIcon size={size} className="text-gray-300" />
            </div>

            {/* top (filled) star clipped by percent */}
            <div
              className="absolute left-0 top-0 bottom-0 overflow-hidden pointer-events-none"
              style={{ width: `${percent}%`, transition: "width 150ms ease" }}
            >
              <div className="h-full flex items-center justify-center">
                <StarIcon size={size} className="text-yellow-400" />
              </div>
            </div>

            {/* invisible label for keyboard focus */}
            <span className="sr-only">{`${(i + 1)} star`}</span>
          </button>
        );
      })}

      {/* optional numeric label */}
      <div aria-hidden className="text-sm text-gray-600 ml-2 select-none">
        {rating ? rating.toFixed(allowHalf ? 1 : 0) : "0"}
        <span className="text-xs text-gray-400"> / {max}</span>
      </div>
    </div>
  );
}
