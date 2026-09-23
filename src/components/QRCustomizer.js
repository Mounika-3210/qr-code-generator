const QRCustomizer = ({
  size,
  setSize,
  foregroundColor,
  setForegroundColor,
  backgroundColor,
  setBackgroundColor,
}) => {
  return (
    <div className="customizer-container">

      <h2>Customize QR Code</h2>

      <div className="customizer-item">

        <label>
          QR Size: {size}px
        </label>

        <input
          type="range"
          min="100"
          max="400"
          value={size}
          onChange={event => setSize(Number(event.target.value))}
        />

      </div>

      <div className="customizer-colors">

        <div className="color-item">

          <label>QR Color</label>

          <input
            type="color"
            value={foregroundColor}
            onChange={event =>
              setForegroundColor(event.target.value)
            }
          />

        </div>

        <div className="color-item">

          <label>Background Color</label>

          <input
            type="color"
            value={backgroundColor}
            onChange={event =>
              setBackgroundColor(event.target.value)
            }
          />

        </div>

      </div>

    </div>
  )
}

export default QRCustomizer