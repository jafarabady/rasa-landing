export const downloadChartAsPDF = (chartRef, options = {}) => {
  const svgElement = chartRef?.current?.querySelector('svg')
  const dataElement = chartRef?.current?.getElementsByClassName('recharts-legend-wrapper')[0]

  if (!svgElement) {
    alert('نمودار پیدا نشد.')
    return
  }

  const svgData = new XMLSerializer().serializeToString(svgElement)
  const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
  const url = URL.createObjectURL(svgBlob)

  const image = new Image()
  image.onload = () => {
    const canvas = document.createElement('canvas')
    canvas.width = svgElement.clientWidth
    canvas.height = svgElement.clientHeight

    const ctx = canvas.getContext('2d')
    ctx?.drawImage(image, 0, 0)

    const imageDataURL = canvas.toDataURL('image/png')
    const legendHTML = dataElement?.outerHTML || ''
    const title = options.title || 'چاپ نمودار'

    const printWindow = window.open('', '_blank')
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${title}</title>
            <style>
              body { margin: 0; padding: 0; text-align: center; font-family: sans-serif; }
              .legend-wrapper { position:relative; margin: 20px auto; display: flex; justify-content: center; flex-wrap: wrap; }
              img { max-width: 100%; margin-top: 10px; }
              h2 { margin-top: 20px; }
            </style>
          </head>
          <body>
            <h2>${title}</h2>
            <img src="${imageDataURL}" />
            <div class="legend-wrapper">${legendHTML}</div>
            <script>
              window.onload = function() {
                window.print();
              }
            </script>
          </body>
        </html>
      `)
      printWindow.document.close()
    }
  }

  image.src = url
}
