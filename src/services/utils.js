import React from 'react'

export function findAsset (assets, target) {
  if (!assets || !assets.length) return

  const asset = assets.find(x => {
    if (!x.sys || !x.sys.id) return null

    return x.sys.id === target.sys.id
  })

  return asset
}

export function findImage (assets, target) {
  const image = findAsset(assets, target)
  return {
    src: image.fields.file.url,
    alt: image.fields.title,
    caption: image.fields.description
  }
}

export function returnPromise (callback) {
  return new Promise ((resolve, reject) => {
    resolve(callback)
  })
}

export function renderPlainTextParagraphs (data) {
  return !data
    ? ( <p></p> )
    : (
      data.content.map((p, i) => {
        let text = ''
        p.content.forEach((el, i) => {
          if (el.nodeType === 'text') {
            text += el.value
          }
        })
    
        return (
          <p className="text-p" key={i}>{text}</p>
        )
      })
    )
}

export default {
  findAsset,
  findImage,
  returnPromise,
  renderPlainTextParagraphs,
}