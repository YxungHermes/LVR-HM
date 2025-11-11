"use client";

import { useEffect, useState } from "react";

type Board = { id: string; name: string; url: string; description?: string; media?: any };

export default function PinterestShare({
  coupleNameFieldId = "name",
  onSelect,
}: {
  coupleNameFieldId?: string;
  onSelect: (payload: { url: string; title: string }) => void;
}) {
  const [connected, setConnected] = useState<boolean>(false);
  const [boards, setBoards] = useState<Board[]>([]);
  const [pasteUrl, setPasteUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState<Board | null>(null);

  // detect connection via query param
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("pin_connected") === "1") {
      setConnected(true);
      fetchBoards();
    }
  }, []);

  async function fetchBoards() {
    setLoading(true);
    const r = await fetch("/api/pinterest/boards");
    if (r.ok) {
      const { boards } = await r.json();
      setBoards(boards);
    }
    setLoading(false);
  }

  function connectPinterest() {
    window.location.href = "/api/pinterest/connect";
  }

  function choose(board: Board) {
    setSelectedBoard(board);
    onSelect({ url: board.url, title: board.name });
  }

  function usePasted() {
    if (!pasteUrl.trim()) return;
    // lightweight validate
    setSelectedBoard({ id: "pasted", name: "Pinterest Board", url: pasteUrl.trim() });
    onSelect({ url: pasteUrl.trim(), title: "Pinterest Board" });
  }

  return (
    <div className="rounded-xl border border-coffee/10 p-6 md:p-8" style={{ background: "#fff" }}>
      <div className="flex items-start justify-between gap-8 flex-wrap mb-6">
        <div>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-2">
            Share Your Inspiration
          </h3>
          <p className="text-sm text-espresso/80 leading-relaxed">
            Connect your Pinterest or paste a board link. This helps me understand your style before we speak. You can change or remove it at any time.
          </p>
        </div>

        <button
          type="button"
          onClick={connectPinterest}
          className="btn-pinterest px-5 py-2.5 rounded-lg text-white font-medium shadow-sm transition-all hover:shadow-md focus-ring whitespace-nowrap"
          style={{ backgroundColor: "#E60023" }}
        >
          {connected ? "Reconnect Pinterest" : "Connect Pinterest"}
        </button>
      </div>

      {/* Selected Board Preview */}
      {selectedBoard && (
        <div className="mb-6 p-4 bg-warm-sand/20 rounded-lg border border-coffee/10">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-sm text-espresso/60 mb-1">Selected Board:</p>
              <p className="font-medium text-ink">{selectedBoard.name}</p>
              <a
                href={selectedBoard.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-espresso/60 hover:text-rose-wax-red transition-colors"
              >
                {selectedBoard.url}
              </a>
            </div>
            <button
              type="button"
              onClick={() => {
                setSelectedBoard(null);
                setPasteUrl("");
                onSelect({ url: "", title: "" });
              }}
              className="ml-4 text-sm text-espresso/60 hover:text-rose-wax-red transition-colors"
            >
              Remove
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="my-6 h-px bg-coffee/10" />

      {/* Boards */}
      {connected && (
        <div>
          <p className="text-sm font-medium text-espresso mb-3">Select one of your boards:</p>
          {loading ? (
            <div className="text-sm text-espresso/60">Loading boards…</div>
          ) : boards.length === 0 ? (
            <div className="text-sm text-espresso/60">No boards found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {boards.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => choose(b)}
                  className={`text-left group rounded-lg border p-4 transition-all ${
                    selectedBoard?.id === b.id
                      ? "border-rose-wax-red bg-rose-wax-red/5"
                      : "border-coffee/10 hover:border-coffee/30"
                  }`}
                >
                  <div className="mb-2 text-base font-medium text-ink">{b.name}</div>
                  <div className="text-xs text-espresso/60 line-clamp-2">{b.description || "No description"}</div>
                  <div className={`mt-3 text-xs transition-opacity ${
                    selectedBoard?.id === b.id
                      ? "text-rose-wax-red opacity-100"
                      : "text-espresso/70 opacity-0 group-hover:opacity-100"
                  }`}>
                    {selectedBoard?.id === b.id ? "✓ Selected" : "Use this board →"}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Paste link */}
      <div className={connected ? "mt-6" : ""}>
        <label className="block text-sm font-medium text-espresso mb-2">
          {connected ? "Or paste" : "Paste"} a Pinterest board link
        </label>
        <div className="flex gap-3">
          <input
            type="url"
            inputMode="url"
            placeholder="https://www.pinterest.com/your/board/"
            value={pasteUrl}
            onChange={(e) => setPasteUrl(e.target.value)}
            className="w-full rounded-lg border border-coffee/20 bg-cream px-4 h-11 outline-none transition-colors focus:border-rose-wax-red focus:ring-2 focus:ring-rose-wax-red/20"
          />
          <button
            type="button"
            onClick={usePasted}
            className="h-11 px-5 rounded-lg text-white font-medium transition-all hover:shadow-md focus-ring"
            style={{ backgroundColor: "#E60023" }}
          >
            Attach
          </button>
        </div>
      </div>
    </div>
  );
}
