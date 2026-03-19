import type { VideoConfig, WebreelConfig } from "./types.js";
export declare const DEFAULT_CONFIG_NAME = "webreel.config";
export declare const DEFAULT_CONFIG_FILE = "webreel.config.json";
export declare const CURRENT_SCHEMA_VERSION = 1;
export declare function parseSchemaVersion(schema?: string): number;
export declare function loadWebreelConfig(filePath: string): Promise<WebreelConfig>;
export interface ValidationError {
    path: string;
    message: string;
}
export declare function validateWebreelConfig(config: unknown, version?: number): ValidationError[];
export declare function buildLineMap(raw: string): Map<string, number>;
export declare function formatValidationErrors(filePath: string, errors: ValidationError[], lineMap?: Map<string, number>): string;
export declare function getConfigDir(configPath: string): string;
export declare function filterVideosByName(videos: VideoConfig[], names: string[]): VideoConfig[];
export declare function resolveConfigPath(configPath?: string): string;
//# sourceMappingURL=config.d.ts.map