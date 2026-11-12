import type { Override } from "./types";
import { batchA } from "./a";
import { batchB } from "./b";
import { batchC } from "./c";
import { batchD } from "./d";

export type { Override };
/** Every imported icon's own motion, by our name (see the files beside this one). */
export const MOTIONS: Record<string, Override> = { ...batchA, ...batchB, ...batchC, ...batchD };
