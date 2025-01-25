# isMobileDevice Function

This repository contains a utility function `isMobileDevice` that determines whether the current device is a mobile device or not based on the `userAgent` string. It checks various user agents to identify devices like Android, iOS, BlackBerry, and more.

## Installation

Simply copy the `isMobileDevice` function into your project file where you need to check the device type.

## Usage

```typescript
import { isMobileDevice } from "./path-to-file";

// Check if the device is mobile
const result = isMobileDevice();
console.log(result); // true if mobile device, false otherwise
```