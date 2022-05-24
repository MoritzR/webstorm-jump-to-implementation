import {F} from "./typeF"

export type FWithName<In, Out> = F<string, F<In, Out>>