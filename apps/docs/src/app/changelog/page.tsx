import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Release history for webreel.",
};

type ChangelogEntry = {
  version: string;
  sections: { heading: string; items: string[] }[];
};

function parseChangelog(raw: string): ChangelogEntry[] {
  const entries: ChangelogEntry[] = [];
  let current: ChangelogEntry | null = null;
  let currentSection: { heading: string; items: string[] } | null = null;

  for (const line of raw.split("\n")) {
    if (line.startsWith("## ")) {
      if (current) entries.push(current);
      current = { version: line.replace("## ", "").trim(), sections: [] };
      currentSection = null;
    } else if (line.startsWith("### ") && current) {
      currentSection = { heading: line.replace("### ", "").trim(), items: [] };
      current.sections.push(currentSection);
    } else if (line.startsWith("- ") && currentSection) {
      currentSection.items.push(line.replace("- ", "").trim());
    } else if (
      line.startsWith("  ") &&
      currentSection &&
      currentSection.items.length > 0
    ) {
      currentSection.items[currentSection.items.length - 1] += "\n" + line.trim();
    }
  }
  if (current) entries.push(current);
  return entries;
}

async function getChangelog(): Promise<ChangelogEntry[]> {
  const filePath = join(process.cwd(), "..", "..", "packages", "webreel", "CHANGELOG.md");
  const raw = await readFile(filePath, "utf-8");
  return parseChangelog(raw);
}

export default async function ChangelogPage() {
  const entries = await getChangelog();

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        Changelog
      </h1>
      <p className="mb-8 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
        Release history for{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[13px] dark:bg-neutral-800">
          webreel
        </code>{" "}
        and{" "}
        <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[13px] dark:bg-neutral-800">
          @webreel/core
        </code>
        .
      </p>
      <div className="space-y-10">
        {entries.map((entry) => (
          <section key={entry.version}>
            <h2 className="mb-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
              {entry.version}
            </h2>
            {entry.sections.map((section) => (
              <div key={section.heading} className="mb-4">
                <h3 className="mb-2 text-sm font-medium text-neutral-500 uppercase tracking-wider dark:text-neutral-400">
                  {section.heading}
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-sm">
                  {section.items.map((item, i) => (
                    <li key={i} className="text-neutral-600 dark:text-neutral-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
