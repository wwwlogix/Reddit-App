module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            files: ["*.component.html"],
            parser: "@angular-eslint/template-parser",
            parserOptions: {
                project: "./tsconfig.app.json",
                ecmaVersion: 2021,
                sourceType: "module",
            },
            plugins: ["@angular-eslint/template"],
        },
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
