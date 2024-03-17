export const initMesh = () => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
}

export const rgbToHex = (r: number, g: number, b: number): string => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const componentToHex = (c: number): string => {
    const hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}