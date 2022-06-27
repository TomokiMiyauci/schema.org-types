/** Represents the broad notion of Android-based operating systems.
 * @see https://schema.org/AndroidPlatform
 * @deprecated
 */
export type AndroidPlatform = "https://schema.org/AndroidPlatform";

/** Represents the broad notion of 'desktop' browsers as a Web Platform.
 * @see https://schema.org/DesktopWebPlatform
 * @deprecated
 */
export type DesktopWebPlatform = "https://schema.org/DesktopWebPlatform";

/** Represents the generic notion of the Web Platform. More specific codes include {@link MobileWebPlatform} and {@link DesktopWebPlatform}, as an incomplete list.
 * @see https://schema.org/GenericWebPlatform
 * @deprecated
 */
export type GenericWebPlatform = "https://schema.org/GenericWebPlatform";

/** Represents the broad notion of iOS-based operating systems.
 * @see https://schema.org/IOSPlatform
 * @deprecated
 */
export type IOSPlatform = "https://schema.org/IOSPlatform";

/** Represents the broad notion of 'mobile' browsers as a Web Platform.
 * @see https://schema.org/MobileWebPlatform
 * @deprecated
 */
export type MobileWebPlatform = "https://schema.org/MobileWebPlatform";

/** Enumerates some common technology platforms, for use with properties such as {@link actionPlatform}. It is not supposed to be comprehensive - when a suitable code is not enumerated here, textual or URL values can be used instead. These codes are at a fairly high level and do not deal with versioning and other nuance. Additional codes can be suggested {@link https://github.com/schemaorg/schemaorg/issues/3057 in github}.
 * @see https://schema.org/DigitalPlatformEnumeration
 * @deprecated
 */
export type DigitalPlatformEnumeration =
  | AndroidPlatform
  | DesktopWebPlatform
  | GenericWebPlatform
  | IOSPlatform
  | MobileWebPlatform;
