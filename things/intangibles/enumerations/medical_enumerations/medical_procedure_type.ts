/** A type of medical procedure that involves noninvasive techniques.
 * @see https://schema.org/NoninvasiveProcedure
 */
export type NoninvasiveProcedure = "https://schema.org/NoninvasiveProcedure";

/** A type of medical procedure that involves percutaneous techniques, where access to organs or tissue is achieved via needle-puncture of the skin.
 * For example, catheter-based procedures like stent delivery.
 * @see https://schema.org/PercutaneousProcedure
 */
export type PercutaneousProcedure = "https://schema.org/PercutaneousProcedure";

/** An enumeration that describes different types of medical procedures.
 * @see https://schema.org/MedicalProcedureType
 */
export type MedicalProcedureType = NoninvasiveProcedure | PercutaneousProcedure;
