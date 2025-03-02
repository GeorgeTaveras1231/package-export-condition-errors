import { runCases } from "./runner.mjs"

runCases([
  {
    request: 'node-package/err/require',
    type: 'require'
  },
  {
    request: 'node-package/err/import',
    type: 'import'
  },
  {
    request: 'node-package/err/env-require',
    type: 'require'
  },
  {
    request: 'node-package/err/env-import',
    type: 'import'
  },
  {
    request: 'node-package/good/require',
    type: 'require'
  },
  {
    request: 'node-package/good/import',
    type: 'import'
  },
  {
    request: 'node-package/good/env-require',
    type: 'require'
  },
  {
    request: 'node-package/good/env-import',
    type: 'import'
  },
])
