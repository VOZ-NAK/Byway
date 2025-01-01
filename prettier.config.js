export default {
  trailingComma: 'none',
  tabWidth: 2,
  useTabs: true,
  singleQuote: true,
  jsxSingleQuote: true,
  arrowParens: 'avoid',
  semi: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@/components/(.*)$',
    '^@/hooks/(.*)$',
    '^@/shared/(.*)$',
    '^@/services/(.*)$',
    '^@/assets/(.*)$',
    '^@/utils/(.*)$',
    '^@/config/(.*)$',
    '^@/providers/(.*)$',
    '^../(.*)',
    '^./(.*)',
    '(.scss)$'
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
