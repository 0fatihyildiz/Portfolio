export default function deepCompare<T, X>(obj1: Record<string, T>, obj2: X): boolean {
    if (obj1 === obj2) {
        return true;
    }

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!(key in obj2)) {
            return false;
        }
        if (!deepCompare(obj1[key] as Record<string, unknown>, obj2[key as keyof typeof obj2] as Record<string, unknown>)) {
            return false;
        }
    }

    return true;
}
