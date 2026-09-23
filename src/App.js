import {useState} from 'react'
import QRCode from 'react-qr-code'
import './App.css'

function App() {
  const [value, setValue] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')
  const [foregroundColor, setForegroundColor] = useState('#000000')
  const [size, setSize] = useState(200)

  const onChangeValue = event => {
    setValue(event.target.value)
  }

  const onChangeBackgroundColor = event => {
    setBackgroundColor(event.target.value)
  }

  const onChangeForegroundColor = event => {
    setForegroundColor(event.target.value)
  }

  const onChangeSize = event => {
    setSize(event.target.value)
  }

  return (
    <div className="app-container">
      <div className="qr-container">

        <h1>QR Code Generator</h1>

        <p className="description">
          Enter text or URL to generate your QR code
        </p>

        <input
          type="text"
          placeholder="Enter text or URL"
          value={value}
          onChange={onChangeValue}
          className="text-input"
        />

        <div className="color-container">

          <div className="color-item">
            <label>Background Color</label>

            <input
              type="color"
              value={backgroundColor}
              onChange={onChangeBackgroundColor}
            />
          </div>

          <div className="color-item">
            <label>QR Code Color</label>

            <input
              type="color"
              value={foregroundColor}
              onChange={onChangeForegroundColor}
            />
          </div>

        </div>

        <div className="size-container">

          <label>QR Code Size: {size}px</label>

          <input
            type="range"
            min="100"
            max="400"
            value={size}
            onChange={onChangeSize}
          />

        </div>

        <div className="qr-code-container">

          {value !== '' ? (
            <QRCode
              value={value}
              size={Number(size)}
              bgColor={backgroundColor}
              fgColor={foregroundColor}
              level="H"
            />
          ) : (
            <p className="empty-message">
              Enter something above to generate QR code
            </p>
          )}

        </div>

      </div>
    </div>
  )
}

export default App