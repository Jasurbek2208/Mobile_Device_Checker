# isMobileDevice Function

This package provides the `isMobileDevice` utility function that determines whether the current device is a mobile device based on the `userAgent` string. It checks various user agents to identify devices like Android, iOS, BlackBerry, and other mobile operating systems.

## Installation

To install this package, run the following command:

```bash
npm install mobile_device_checker
```

## Usage

```typescript
import { isMobileDevice } from "moblie_device_checker";

// Check if the device is mobile
const result = isMobileDevice();
console.log(result); // true if mobile device, false otherwise
```