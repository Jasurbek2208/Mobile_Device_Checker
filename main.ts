/**
 * Checks if the current device is a mobile device based on the user agent string.
 *
 * This function examines the `userAgent`, `vendor`, and `opera` properties from the `navigator` object to determine
 * whether the device is a mobile device such as Android, iPhone, iPad, or other mobile OS types.
 *
 * @returns {boolean} - Returns `true` if the device is a mobile device (Android, iOS, etc.), `false` otherwise.
 */
export default function isMobileDevice(): boolean {
  const userAgent: string = navigator?.userAgent || navigator?.vendor || (window as any)?.opera || "";

  // Ensure the userAgent is valid and check for mobile devices
  if (!userAgent) return false;

  // Check for mobile devices using a regex pattern
  return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent?.toLowerCase());
}