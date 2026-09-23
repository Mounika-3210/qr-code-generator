import QRCode from 'react-qr-code'

const QRDisplay = ({
  qrValue,
  size,
  foregroundColor,
  backgroundColor,
}) => {

  const downloadQRCode = () => {
    const svg = document.getElementById('qr-code')

    const svgData = new XMLSerializer().serializeToString(svg)

    const canvas = document.createElement('canvas')

    const context = canvas.getContext('2d')

    const image = new Image()

    image.onload = () => {
      canvas.width = size
      canvas.height = size

      context.drawImage(
        image,
        0,
        0,
        size,
        size,
      )

      const link = document.createElement('a')

      link.download = 'my-qr-code.png'

      link.href = canvas.toDataURL('image/png')

      link.click()
    }

    image.src =
      'data:image/svg+xml;charset=utf-8,' +
      encodeURIComponent(svgData)
  }

  return (
    <div className="qr-display">

      {qrValue === '' ? (
        <p>QR code will appear here</p>
      ) : (
        <>
          <QRCode
            id="qr-code"
            value={qrValue}
            size={size}
            fgColor={foregroundColor}
            bgColor={backgroundColor}
          />

          <p>Scan the QR code</p>

          <button
            type="button"
            className="download-button"
            onClick={downloadQRCode}
          >
            Download QR
          </button>
        </>
      )}

    </div>
  )
}

export default QRDisplay