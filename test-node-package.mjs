import { runCases } from "./runner.mjs"

runCases([
  {
    request: 'broken-node-package/require',
    type: 'require'
  },
  {
    request: 'broken-node-package/import',
    type: 'import'
  },
  {
    request: 'proper-node-package/require',
    type: 'require'
  },
  {
    request: 'proper-node-package/import',
    type: 'import'
  }
])
