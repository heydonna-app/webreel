export interface ElementTarget {
    text?: string;
    selector?: string;
    within?: string;
}
export interface StepPause {
    action: "pause";
    ms: number;
    label?: string;
    description?: string;
}
export interface StepClick {
    action: "click";
    text?: string;
    selector?: string;
    within?: string;
    modifiers?: string[];
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepKey {
    action: "key";
    key: string;
    target?: string | ElementTarget;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepDrag {
    action: "drag";
    from: ElementTarget;
    to: ElementTarget;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepType {
    action: "type";
    text: string;
    selector?: string;
    within?: string;
    charDelay?: number;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepScroll {
    action: "scroll";
    x?: number;
    y?: number;
    text?: string;
    selector?: string;
    within?: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepWait {
    action: "wait";
    selector?: string;
    text?: string;
    within?: string;
    timeout?: number;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepMoveTo {
    action: "moveTo";
    text?: string;
    selector?: string;
    within?: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepScreenshot {
    action: "screenshot";
    output: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepNavigate {
    action: "navigate";
    url: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepHover {
    action: "hover";
    text?: string;
    selector?: string;
    within?: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepSelect {
    action: "select";
    text?: string;
    selector?: string;
    within?: string;
    value: string;
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepUpload {
    action: "upload";
    selector: string;
    filePath?: string;
    filePaths?: string[];
    label?: string;
    delay?: number;
    description?: string;
}
export interface StepEval {
    action: "eval";
    expression: string;
    awaitPromise?: boolean;
    label?: string;
    delay?: number;
    description?: string;
}
export type Step = StepPause | StepClick | StepKey | StepDrag | StepType | StepScroll | StepWait | StepMoveTo | StepScreenshot | StepNavigate | StepHover | StepSelect | StepUpload | StepEval;
export interface CursorConfig {
    image?: string;
    size?: number;
    hotspot?: "top-left" | "center";
}
export interface ThemeConfig {
    cursor?: CursorConfig;
    hud?: {
        background?: string;
        color?: string;
        fontSize?: number;
        fontFamily?: string;
        borderRadius?: number;
        position?: "top" | "bottom";
    };
}
export declare const VIEWPORT_PRESETS: Record<string, {
    width: number;
    height: number;
}>;
export type { SfxConfig } from "@webreel/core";
import type { SfxConfig } from "@webreel/core";
export interface VideoConfig {
    name: string;
    url: string;
    baseUrl?: string;
    viewport?: {
        width: number;
        height: number;
    };
    zoom?: number;
    fps?: number;
    quality?: number;
    waitFor?: string | ElementTarget;
    output?: string;
    thumbnail?: {
        time?: number;
        enabled?: boolean;
    };
    include?: string[];
    theme?: ThemeConfig;
    sfx?: SfxConfig;
    defaultDelay?: number;
    clickDwell?: number;
    steps: Step[];
}
export interface WebreelConfig {
    $schema?: string;
    outDir?: string;
    baseUrl?: string;
    viewport?: {
        width: number;
        height: number;
    };
    theme?: ThemeConfig;
    sfx?: SfxConfig;
    include?: string[];
    defaultDelay?: number;
    clickDwell?: number;
    videos: VideoConfig[];
}
//# sourceMappingURL=types.d.ts.map