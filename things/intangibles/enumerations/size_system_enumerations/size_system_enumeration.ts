import { WearableSizeSystemEnumeration } from "./wearable_size_system_enumeration.ts";
/** Imperial size system.
 * @see https://schema.org/SizeSystemImperial
 * @deprecated
 */
export type SizeSystemImperial = "https://schema.org/SizeSystemImperial";

/** Metric size system.
 * @see https://schema.org/SizeSystemMetric
 * @deprecated
 */
export type SizeSystemMetric = "https://schema.org/SizeSystemMetric";

/** Enumerates common size systems for different categories of products, for example "EN-13402" or "UK" for wearables or "Imperial" for screws.
 * @see https://schema.org/SizeSystemEnumeration
 * @deprecated
 */
export type SizeSystemEnumeration =
  | SizeSystemImperial
  | SizeSystemMetric
  | WearableSizeSystemEnumeration;
