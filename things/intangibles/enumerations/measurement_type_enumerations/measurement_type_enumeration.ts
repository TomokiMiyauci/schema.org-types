import { BodyMeasurementTypeEnumeration } from "./body_measurement_type_enumeration.ts";
import { WearableMeasurementTypeEnumeration } from "./wearable_measurement_type_enumeration.ts";

/** Enumeration of common measurement types (or dimensions), for example "chest" for a person, "inseam" for pants, "gauge" for screws, or "wheel" for bicycles.
 * @see https://schema.org/MeasurementTypeEnumeration
 */
export type MeasurementTypeEnumeration =
  | BodyMeasurementTypeEnumeration
  | WearableMeasurementTypeEnumeration;
