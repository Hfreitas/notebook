import js from "@eslint/js";
import stylistic from "@stylistic/eslint-plugin";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import eslintPluginImportX from "eslint-plugin-import-x";
import node from "eslint-plugin-n";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";
import tsParser from "@typescript-eslint/parser";
import pluginRouter from "@tanstack/eslint-plugin-router";

export default tseslint.config(
  { ignores: ["dist", "eslint.config.js", "src/routeTree.gen.ts"] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
      node.configs["flat/recommended-module"],
      eslintPluginUnicorn.configs.recommended,
      stylistic.configs.customize({
        flat: true,
        quotes: "double",
        semi: true,
      }),
      ...pluginRouter.configs['flat/recommended'],
    ],
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parser: tsParser,
      parserOptions: {
        projectService: true,
        parser: tsParser,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "@typescript-eslint": tseslint.plugin,
      "@stylistic": stylistic,
      n: node,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "n/prefer-node-protocol": "error",
      "n/no-missing-import": "off",
      /** Prefer Array<T> format */
      "@typescript-eslint/array-type": [
        "error",
        { default: "generic", readonly: "generic" },
      ],
      /** Prevent @ts-ignore, allow @ts-expect-error */
      "@typescript-eslint/ban-ts-comment": [
        "error",
        {
          "ts-expect-error": false,
          "ts-ignore": "allow-with-description",
        },
      ],
      /** Enforce import type { T } */
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports" },
      ],
      /** Shorthand method style is less strict */
      "@typescript-eslint/method-signature-style": ["error", "property"],
      /** Enforces generic type convention */
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "typeParameter",
          format: ["PascalCase"],
          leadingUnderscore: "forbid",
          trailingUnderscore: "forbid",
          custom: {
            regex: "^(T|T[A-Z][A-Za-z]+)$",
            match: true,
          },
        },
      ],
      /** Duplicate values can lead to bugs that are hard to track down */
      "@typescript-eslint/no-duplicate-enum-values": "error",
      /** Using the operator any more than once does nothing */
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      /** There are several potential bugs with this compared to other loops */
      "@typescript-eslint/no-for-in-array": "error",
      /** Don't over-define types for simple things like strings */
      "@typescript-eslint/no-inferrable-types": [
        "error",
        { ignoreParameters: true },
      ],
      /** Enforce valid definition of new and constructor */
      "@typescript-eslint/no-misused-new": "error",
      /** Disallow TypeScript namespaces */
      "@typescript-eslint/no-namespace": "error",
      /** Disallow non-null assertions after an optional chain expression */
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      /** Detects conditionals which will always evaluate truthy or falsy */
      "@typescript-eslint/no-unnecessary-condition": "error",
      /** Checks if the the explicit type is identical to the inferred type */
      "@typescript-eslint/no-unnecessary-type-assertion": "error",
      /** Disallow using the unsafe built-in Function type */
      "@typescript-eslint/no-unsafe-function-type": "error",
      /** Disallow using confusing built-in primitive class wrappers */
      "@typescript-eslint/no-wrapper-object-types": "error",
      /** Enforce the use of as const over literal type */
      "@typescript-eslint/prefer-as-const": "error",
      /** Prefer for-of loop over the standard for loop */
      "@typescript-eslint/prefer-for-of": "warn",
      /** Warn about async functions which have no await expression */
      "@typescript-eslint/require-await": "warn",
      /** Prefer of ES6-style import declarations */
      "@typescript-eslint/triple-slash-reference": "error",
      "for-direction": "error",
      "no-async-promise-executor": "error",
      "no-case-declarations": "error",
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-constant-binary-expression": "error",
      "no-constant-condition": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-delete-var": "error",
      "no-dupe-else-if": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-empty-static-block": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-fallthrough": "error",
      "no-global-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-misleading-character-class": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-octal": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      /** Warn about variable with identical names in the outer scope */
      "no-shadow": "warn",
      "no-shadow-restricted-names": "error",
      "no-sparse-arrays": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-optional-chaining": "error",
      "no-unused-labels": "error",
      "no-unused-private-class-members": "error",
      "no-useless-backreference": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      /** Prefer let and const */
      "no-var": "error",
      "no-with": "error",
      /** Prefer const if never re-assigned */
      "prefer-const": "error",
      "require-yield": "error",
      /** Stylistic consistency */
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
      "use-isnan": "error",
      /** Enforce comparing typeof against valid strings */
      "valid-typeof": "error",
      "@stylistic/array-bracket-spacing": ["error", "never"],
      "@stylistic/arrow-parens": [
        "error",
        "as-needed",
        { requireForBlockBody: true },
      ],
      "@stylistic/arrow-spacing": ["error", { after: true, before: true }],
      "@stylistic/block-spacing": ["error", "always"],
      "@stylistic/brace-style": [
        "error",
        "stroustrup",
        { allowSingleLine: true },
      ],
      "@stylistic/comma-dangle": ["error", "always-multiline"],
      "@stylistic/comma-spacing": ["error", { after: true, before: false }],
      "@stylistic/comma-style": ["error", "last"],
      "@stylistic/computed-property-spacing": [
        "error",
        "never",
        { enforceForClassMembers: true },
      ],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/eol-last": "error",
      "@stylistic/indent": [
        "error",
        2,
        {
          ArrayExpression: 1,
          CallExpression: { arguments: 1 },
          flatTernaryExpressions: false,
          FunctionDeclaration: { body: 1, parameters: 1 },
          FunctionExpression: { body: 1, parameters: 1 },
          ignoreComments: false,
          ignoredNodes: [
            "TSUnionType",
            "TSIntersectionType",
            "TSTypeParameterInstantiation",
            "FunctionExpression > .params[decorators.length > 0]",
            "FunctionExpression > .params > :matches(Decorator, :not(:first-child))",
          ],
          ImportDeclaration: 1,
          MemberExpression: 1,
          ObjectExpression: 1,
          offsetTernaryExpressions: true,
          outerIIFEBody: 1,
          SwitchCase: 1,
          tabLength: 2,
          VariableDeclarator: 1,
        },
      ],
      "@stylistic/indent-binary-ops": ["error", 2],
      "@stylistic/key-spacing": [
        "error",
        { afterColon: true, beforeColon: false },
      ],
      "@stylistic/keyword-spacing": ["error", { after: true, before: true }],
      "@stylistic/lines-between-class-members": [
        "error",
        "always",
        { exceptAfterSingleLine: true },
      ],
      "@stylistic/max-statements-per-line": ["error", { max: 1 }],
      "@stylistic/member-delimiter-style": [
        "error",
        {
          multiline: {
            delimiter: "semi",
            requireLast: true,
          },
          multilineDetection: "brackets",
          overrides: {
            interface: {
              multiline: {
                delimiter: "semi",
                requireLast: true,
              },
            },
          },
          singleline: {
            delimiter: "semi",
          },
        },
      ],
      "@stylistic/spaced-comment": "error",
      "@stylistic/multiline-ternary": ["error", "always-multiline"],
      "@stylistic/new-parens": "error",
      "@stylistic/no-extra-parens": ["error", "functions"],
      "@stylistic/no-floating-decimal": "error",
      "@stylistic/no-mixed-operators": [
        "error",
        {
          allowSamePrecedence: true,
          groups: [
            ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
            ["&&", "||"],
            ["in", "instanceof"],
          ],
        },
      ],
      "@stylistic/no-mixed-spaces-and-tabs": "error",
      "@stylistic/no-multi-spaces": "error",
      "@stylistic/no-multiple-empty-lines": [
        "error",
        { max: 1, maxBOF: 0, maxEOF: 0 },
      ],
      "@stylistic/no-tabs": "error",
      "@stylistic/no-trailing-spaces": "error",
      "@stylistic/no-whitespace-before-property": "error",
      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/operator-linebreak": ["error", "before"],
      "@stylistic/padded-blocks": [
        "error",
        { blocks: "never", classes: "never", switches: "never" },
      ],
      "@stylistic/quote-props": ["error", "consistent-as-needed"],
      "@stylistic/quotes": [
        "error",
        "double",
        { allowTemplateLiterals: true, avoidEscape: false },
      ],
      "@stylistic/rest-spread-spacing": ["error", "never"],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/semi-spacing": ["error", { after: true, before: false }],
      "@stylistic/space-before-blocks": ["error", "always"],
      "@stylistic/space-before-function-paren": [
        "error",
        { anonymous: "always", asyncArrow: "always", named: "never" },
      ],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/space-infix-ops": "error",
      "@stylistic/space-unary-ops": ["error", { nonwords: false, words: true }],
      "@stylistic/spaced-comment": [
        "error",
        "always",
        {
          block: {
            balanced: true,
            exceptions: ["*"],
            markers: ["!"],
          },
          line: {
            exceptions: ["/", "#"],
            markers: ["/"],
          },
        },
      ],
      "@stylistic/template-curly-spacing": "error",
      "@stylistic/template-tag-spacing": ["error", "never"],
      "@stylistic/type-annotation-spacing": ["error", {}],
      "@stylistic/type-generic-spacing": "error",
      "@stylistic/type-named-tuple-spacing": "error",
      "@stylistic/wrap-iife": [
        "error",
        "any",
        { functionPrototypeMethods: true },
      ],
      "@stylistic/yield-star-spacing": ["error", "both"],
      "@stylistic/jsx-closing-bracket-location": "error",
      "@stylistic/jsx-closing-tag-location": "error",
      "@stylistic/jsx-curly-brace-presence": [
        "error",
        { propElementValues: "always" },
      ],
      "@stylistic/jsx-curly-newline": "error",
      "@stylistic/jsx-curly-spacing": ["error", "never"],
      "@stylistic/jsx-equals-spacing": "error",
      "@stylistic/jsx-first-prop-new-line": "error",
      "@stylistic/jsx-function-call-newline": ["error", "multiline"],
      "@stylistic/jsx-indent-props": ["error", 2],
      "@stylistic/jsx-max-props-per-line": [
        "error",
        { maximum: 1, when: "multiline" },
      ],
      "@stylistic/jsx-one-expression-per-line": [
        "error",
        { allow: "single-child" },
      ],
      "@stylistic/jsx-quotes": "error",
      "@stylistic/jsx-tag-spacing": [
        "error",
        {
          afterOpening: "never",
          beforeClosing: "never",
          beforeSelfClosing: "always",
          closingSlash: "never",
        },
      ],
      "@stylistic/jsx-wrap-multilines": [
        "error",
        {
          arrow: "parens-new-line",
          assignment: "parens-new-line",
          condition: "parens-new-line",
          declaration: "parens-new-line",
          logical: "parens-new-line",
          prop: "parens-new-line",
          propertyValue: "parens-new-line",
          return: "parens-new-line",
        },
      ],
    },
  },
  {
    ...eslintPluginImportX.flatConfigs.recommended,
    ...eslintPluginImportX.flatConfigs.typescript,
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        }),
      ],
    },
    rules: {
      /** Bans the use of inline type-only markers for named imports */
      "import-x/consistent-type-specifier-style": ["error", "prefer-top-level"],
      /** Reports any imports that come after non-import statements */
      "import-x/first": "error",
      /** Stylistic preference */
      "import-x/newline-after-import": "error",
      /** No require() or module.exports */
      "import-x/no-commonjs": "error",
      /** No import loops */
      "import-x/no-cycle": "error",
      /** Reports if a resolved path is imported more than once */
      "import-x/no-duplicates": "error",
      /** Stylistic preference */
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
        },
      ],
    },
  }
);
