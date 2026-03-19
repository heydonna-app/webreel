import { type BoundingBox } from "@webreel/core";
import type { VideoConfig, Step, ElementTarget } from "./types.js";
export declare function formatStep(i: number, step: Step): string;
export declare function resolveKeyTarget(target: string | ElementTarget): string;
export declare function resolveUrl(url: string, baseUrl: string, configDir: string): string;
export declare function randomPointInBox(box: BoundingBox, spread?: number): {
    x: number;
    y: number;
};
export declare function extractThumbnailIfConfigured(config: Pick<VideoConfig, "thumbnail">, outputPath: string): Promise<void>;
export interface RunVideoOptions {
    record?: boolean;
    verbose?: boolean;
    configDir?: string;
    frames?: boolean;
}
export declare function runVideo(config: VideoConfig, options?: RunVideoOptions): Promise<void>;
//# sourceMappingURL=runner.d.ts.map