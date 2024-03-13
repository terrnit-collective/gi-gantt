import type * as CSS from 'csstype';
type Color = CSS.DataType.Color;
export type ColorScheme = {
    primary: Color;
    secondary: Color;
    ternary: Color;
    quartenary: Color;
    hoverHighlight: Color;
    text: Color;
    background: Color;
    toast?: Color;
};
export declare const colorSchemes: Record<string, ColorScheme>;
export type ColorSchemeKey = keyof typeof colorSchemes;
export default colorSchemes;
