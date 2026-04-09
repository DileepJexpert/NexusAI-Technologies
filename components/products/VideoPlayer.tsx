"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export function VideoPlayer({
  videoId,
  title = "Video",
}: {
  videoId: string;
  title?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  if (!videoId) return null;

  if (loaded) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      onClick={() => setLoaded(true)}
      className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-2xl"
      aria-label={`Play ${title}`}
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        className="h-full w-full object-cover opacity-90 transition-opacity group-hover:opacity-75"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-transform group-hover:scale-110">
          <Play className="ml-1 h-8 w-8 fill-white" />
        </div>
      </div>
    </button>
  );
}
