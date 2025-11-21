"use client";

import { useEffect, useRef, useState } from "react";

interface PlacesAutocompleteProps {
  value: string;
  onChange: (value: string, placeDetails?: PlaceDetails) => void;
  placeholder?: string;
  className?: string;
  error?: string;
}

interface PlaceDetails {
  address: string;
  city: string;
  state: string;
  country: string;
  postalCode: string;
  lat: number;
  lng: number;
  formattedAddress: string;
}

export default function PlacesAutocomplete({
  value,
  onChange,
  placeholder = "Search for a location...",
  className = "",
  error,
}: PlacesAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadingScript, setIsLoadingScript] = useState(false);

  // Load Google Maps script
  useEffect(() => {
    if (window.google?.maps?.places) {
      setIsLoaded(true);
      return;
    }

    if (isLoadingScript) return;

    setIsLoadingScript(true);

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    // Debug logging
    console.log("🗺️ Loading Google Maps API...");
    console.log("API Key present:", apiKey ? "Yes" : "No");
    console.log("API Key value:", apiKey || "MISSING");

    if (!apiKey) {
      console.error("❌ NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is not defined!");
      setIsLoadingScript(false);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      console.log("✅ Google Maps API loaded successfully");
      setIsLoaded(true);
      setIsLoadingScript(false);
    };
    script.onerror = (error) => {
      console.error("❌ Failed to load Google Maps script:", error);
      setIsLoadingScript(false);
    };

    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [isLoadingScript]);

  // Initialize autocomplete
  useEffect(() => {
    if (!isLoaded || !inputRef.current || autocompleteRef.current) {
      console.log("Skipping autocomplete init:", { isLoaded, hasInputRef: !!inputRef.current, hasAutocompleteRef: !!autocompleteRef.current });
      return;
    }

    try {
      console.log("🎯 Initializing Google Places Autocomplete on input element:", inputRef.current);

      autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
        types: ["establishment", "geocode"],
        fields: ["address_components", "formatted_address", "geometry", "name"],
      });

      console.log("✅ Autocomplete object created:", autocompleteRef.current);

      autocompleteRef.current.addListener("place_changed", () => {
        console.log("📍 Place changed event fired!");
        const place = autocompleteRef.current?.getPlace();
        console.log("Place object:", place);

        if (!place || !place.geometry) {
          console.log("⚠️ Place missing geometry");
          return;
        }

        // Extract address components
        const addressComponents = place.address_components || [];
        let city = "";
        let state = "";
        let country = "";
        let postalCode = "";

        addressComponents.forEach((component) => {
          const types = component.types;
          if (types.includes("locality")) {
            city = component.long_name;
          } else if (types.includes("administrative_area_level_1")) {
            state = component.short_name;
          } else if (types.includes("country")) {
            country = component.long_name;
          } else if (types.includes("postal_code")) {
            postalCode = component.long_name;
          }
        });

        const placeDetails: PlaceDetails = {
          address: place.name || "",
          city,
          state,
          country,
          postalCode,
          lat: place.geometry.location?.lat() || 0,
          lng: place.geometry.location?.lng() || 0,
          formattedAddress: place.formatted_address || "",
        };

        // Use formatted address or create a clean version
        const displayValue = place.formatted_address || place.name || "";
        onChange(displayValue, placeDetails);
      });
    } catch (error) {
      console.error("Error initializing Google Places Autocomplete:", error);
    }
  }, [isLoaded, onChange]);

  return (
    <div className="relative">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete="off"
          className={`w-full px-4 py-3 pr-10 border rounded-lg focus:ring-2 focus:ring-rose-wax-red/20 focus:border-rose-wax-red transition-colors ${
            error ? "border-red-500" : "border-coffee/20"
          } ${className}`}
        />

        {/* Location icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            className="w-5 h-5 text-stone-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>

      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}

      {/* Powered by Google badge */}
      {isLoaded && (
        <div className="flex items-center justify-end mt-2">
          <span className="text-[10px] text-stone-400 tracking-wide">
            POWERED BY GOOGLE
          </span>
        </div>
      )}

      {/* Global styles for Google autocomplete dropdown */}
      <style jsx global>{`
        /* Google Places Autocomplete dropdown container */
        .pac-container {
          background-color: white;
          border: 1px solid rgba(160, 113, 95, 0.2);
          border-radius: 12px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15), 0 0 60px rgba(244, 105, 126, 0.08);
          margin-top: 8px;
          font-family: ui-sans-serif, system-ui, sans-serif;
          z-index: 10000 !important;
          overflow: hidden;
        }

        .pac-container:after {
          display: none;
        }

        /* Individual suggestion items */
        .pac-item {
          padding: 12px 16px;
          cursor: pointer;
          border-top: 1px solid rgba(160, 113, 95, 0.1);
          transition: all 0.15s ease;
          font-size: 14px;
          line-height: 1.5;
        }

        .pac-item:first-child {
          border-top: none;
        }

        .pac-item:hover,
        .pac-item-selected {
          background-color: rgba(244, 105, 126, 0.08);
        }

        /* Icon in the suggestion */
        .pac-icon {
          margin-top: 4px;
          margin-right: 12px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23F4697E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: center;
          background-size: 18px 18px;
          width: 20px;
          height: 20px;
        }

        .pac-icon-marker {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='%23F4697E' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z'%3E%3C/path%3E%3Ccircle cx='12' cy='10' r='3'%3E%3C/circle%3E%3C/svg%3E");
        }

        /* Main text of suggestion */
        .pac-item-query {
          color: #2E2726;
          font-weight: 500;
          font-size: 14px;
        }

        /* Secondary text (address details) */
        .pac-matched {
          color: #2E2726;
          font-weight: 600;
        }

        .pac-item-query .pac-matched {
          font-weight: 600;
        }

        /* Logo at bottom */
        .pac-logo:after {
          display: none;
        }

        .hdpi.pac-logo:after {
          display: none;
        }

        /* Animation */
        .pac-container {
          animation: slideDown 0.2s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
