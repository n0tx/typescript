"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var theme;
function setTheme(themeName) {
    theme = themeName;
}
setTheme("dark");
console.log(theme);
console.log({ theme: theme });
