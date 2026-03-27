import js from "@eslint/js";
import tseslint from "typescript-eslint";
import unicorn from "eslint-plugin-unicorn";
import prettier from "eslint-config-prettier";
import astro from "eslint-plugin-astro";
import css from "@eslint/css";
import markdown from "@eslint/markdown";

const sharedScriptRules = {
  "no-empty": ["error", { allowEmptyCatch: true }],
  "unicorn/no-null": "off",
  "unicorn/prevent-abbreviations": "off",
  "unicorn/consistent-function-scoping": "off",
  "unicorn/filename-case": [
    "error",
    {
      cases: { kebabCase: true, pascalCase: true },
      ignore: [/^\[.*\]/],
    },
  ],
};

export default tseslint.config(
  { ignores: ["dist/"] },
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{js,ts}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      unicorn.configs["flat/recommended"],
      prettier,
    ],
    rules: sharedScriptRules,
  },
  {
    files: ["**/*.astro"],
    extends: [js.configs.recommended, unicorn.configs["flat/recommended"], prettier],
    rules: sharedScriptRules,
  },
  {
    files: ["**/*.css"],
    language: "css/css",
    extends: [css.configs.recommended],
    rules: {
      "css/use-baseline": "off",
      "css/use-layers": "off",
      "css/no-important": "off",
      "css/no-invalid-properties": "off",
    },
  },
  {
    files: ["**/*.md"],
    language: "markdown/gfm",
    extends: [markdown.configs.recommended],
  },
);
