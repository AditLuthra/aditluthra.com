"use client";

import { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import dayjs from "dayjs";

interface Log {
  id: string;
  content: string;
  created_at: string;
  project_slug: string;
}

export default function LogStreamPage() {
  const { slug } = useParams();
  const projectSlug =
    typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "";

  const [logs, setLogs] = useState<Log[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!projectSlug) return;

    const fetchLogs = async () => {
      const { data, error } = await supabase
        .from("log_entries")
        .select("*")
        .eq("project_slug", projectSlug)
        .order("created_at", { ascending: true });

      if (error) {
        console.error("❌ Error fetching logs:", error.message);
        return;
      }

      setLogs(data || []);
    };

    fetchLogs();

    const channel = supabase
      .channel(`log_entries:project:${projectSlug}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "log_entries",
        },
        (payload) => {
          const newLog = payload.new as Log;
          console.log("📥 New realtime log:", newLog);

          if (newLog.project_slug === projectSlug) {
            setLogs((prev) => [...prev, newLog]);
          }
        }
      );

    channel.subscribe((status) => {
      if (status === "SUBSCRIBED") {
        console.log("✅ Realtime subscription ready.");
      } else {
        console.warn("⚠️ Realtime subscription status:", status);
      }
    });

    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectSlug]);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [logs]);

  return (
    <main className="min-h-screen bg-black text-terminal-green font-pixel p-6">
      <h1 className="text-3xl mb-4 text-terminal-neon">📡 Live Log: {projectSlug}</h1>

      <div
        ref={terminalRef}
        className="border border-terminal-green rounded bg-terminal-black p-4 h-[75vh] overflow-y-auto custom-scrollbar"
      >
        <div className="whitespace-pre-wrap text-sm space-y-2 font-mono">
          {logs.length === 0 ? (
            <p className="text-terminal-gray">
              No logs found for "{projectSlug}"
            </p>
          ) : (
            logs.map((log) => (
              <p key={log.id}>
                <span className="text-terminal-gray">
                  [{dayjs(log.created_at).format("HH:mm:ss")}]
                </span>{" "}
                {log.content}
              </p>
            ))
          )}
        </div>
        <p className="animate-pulse mt-2">█</p>
      </div>
    </main>
  );
}
