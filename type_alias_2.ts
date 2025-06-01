export { };

type Theme = "light" | "dark";

let theme: Theme = "light";

function setTheme(themeName: Theme) {
  theme = themeName;
}

setTheme("dark");

console.log(theme); // dark

console.log({ theme }); // { theme: 'dark' }
