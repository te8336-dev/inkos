import type { Api } from "@mariozechner/pi-ai";

export const LLM_API_FORMATS = ["chat", "responses", "anthropic"] as const;

export type LLMApiFormat = typeof LLM_API_FORMATS[number];

export const LLM_REASONING_EFFORTS = ["default", "none", "minimal", "low", "medium", "high", "xhigh", "max"] as const;
export type LLMReasoningEffort = typeof LLM_REASONING_EFFORTS[number];

export function isLLMReasoningEffort(value: unknown): value is LLMReasoningEffort {
  return typeof value === "string" && (LLM_REASONING_EFFORTS as readonly string[]).includes(value);
}

export function isLLMApiFormat(value: unknown): value is LLMApiFormat {
  return typeof value === "string" && (LLM_API_FORMATS as readonly string[]).includes(value);
}

export function toPiApi(format: LLMApiFormat): Api {
  if (format === "anthropic") return "anthropic-messages";
  if (format === "responses") return "openai-responses";
  return "openai-completions";
}
