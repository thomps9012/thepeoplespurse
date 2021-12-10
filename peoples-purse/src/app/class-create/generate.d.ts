export interface GenerateOptions {
length?: number;
lowercase?: boolean;
symbols?: boolean;
numbers?: boolean;
uppercase?: boolean;
}

export function generate(options: GenerateOptions): string;
export function generateMultiple(count: number, options?: GenerateOptions): string[];