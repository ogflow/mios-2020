export function findAsset (assets, target) {
  if (!assets || !assets.length) return

  const asset = assets.find(x => {
    if (!x.sys || !x.sys.id) return null

    return x.sys.id === target.sys.id
  })

  return asset
}

export function returnPromise (callback) {
  return new Promise ((resolve, reject) => {
    resolve(callback)
  })
}

export default {
  findAsset,
  returnPromise,
}