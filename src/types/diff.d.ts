declare module 'diff' {
    export function diffChars(oldStr: string, newStr: string): Array<{
        value: string;
        added?: boolean;
        removed?: boolean;
    }>;
    // 其他需要的方法也可以在这里声明
} 