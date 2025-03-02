import require from './require.cjs';

const loaders = {
  require,
  import: (req) => import(req)
}
export const runCases = async (cases) => {
  for (const { request, type } of cases) {
    const result = await loaders[type](request)

    if (result.default === 'success') {
      console.log(`✅ ${type} - ${request} passed`)
    } else {
      console.error(`❌ ${type} - ${request} failed`)
      process.exitCode = 1;
    }
  }
}