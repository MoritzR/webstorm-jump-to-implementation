import f1 from "./f1";
import f2 from "./f2";

/**
 * The following Navigate commands jump to
 *
 * Jump to Source:              index.ts:1
 * Declaration or Usage:        typeF.ts:1
 * Implementation(s):           index.ts:1
 * Type Declaration:            index.ts:1
 *
 * Quick Definition:            typeFWithName.ts:3
 * Quick Type Definition:       typeF.ts:1
 *
 * When I want to see the type I expect:            typeFWithName.ts:3
 * When I want to see the implementation I expect:  f1.ts:3
 */
f1("f1")(1)

/**
 * The following Navigate commands jump to
 *
 * Jump to Source:              index.ts:2
 * Declaration or Usage:        f2.ts:1
 * Implementation(s):           index.ts:2
 * Type Declaration:            index.ts:2
 *
 * Quick Definition:            f2.ts:1
 * Quick Type Definition:       f2.ts:1
 *
 * When I want to see the type I expect:            f2.ts:1
 * When I want to see the implementation I expect:  f2.ts:1
 */
f2("f2")(1)