import globals from "globals";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["node_modules", "pnpm-lock.yaml"],
  },
  eslint.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  {
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        projectService: {
          allowDefaultProject: ["*.ts", "eslint.config.js"],
          defaultProject: "./tsconfig.json",
        },
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "separate-type-imports" },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          caughtErrors: "all",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          varsIgnorePattern: ".*",
          ignoreRestSiblings: true,
        },
      ],
    },
  },

  prettierConfig,
);
