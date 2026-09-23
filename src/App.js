import {useState} from 'react'

import QRTypeSelector from './components/QRTypeSelector'
import QRForm from './components/QRForm'
import QRDisplay from './components/QRDisplay'
import QRCustomizer from './components/QRCustomizer'
import QRHistory from './components/QRHistory'

import './App.css'

const App = () => {
  const [qrType, setQrType] = useState('url')
  const [qrValue, setQrValue] = useState('')

  const [size, setSize] = useState(250)
  const [foregroundColor, setForegroundColor] = useState('#000000')
  const [backgroundColor, setBackgroundColor] = useState('#ffffff')

  const [history, setHistory] = useState(() => {
    const savedHistory = localStorage.getItem('qrHistory')

    if (savedHistory !== null) {
      return JSON.parse(savedHistory)
    }

    return []
  })

  const addToHistory = value => {
    const newItem = {
      id: Date.now(),
      type: qrType,
      value: value,
      size: size,
      foregroundColor: foregroundColor,
      backgroundColor: backgroundColor,
    }

    const newHistory = [newItem, ...history]

    setHistory(newHistory)

    localStorage.setItem(
      'qrHistory',
      JSON.stringify(newHistory),
    )
  }

  const generateQRCode = value => {
    setQrValue(value)
    addToHistory(value)
  }

  const deleteHistoryItem = id => {
    const newHistory = history.filter(item => item.id !== id)

    setHistory(newHistory)

    localStorage.setItem(
      'qrHistory',
      JSON.stringify(newHistory),
    )
  }

  const clearHistory = () => {
    setHistory([])

    localStorage.removeItem('qrHistory')
  }

  const selectHistoryItem = item => {
    setQrType(item.type)
    setQrValue(item.value)

    setSize(item.size)
    setForegroundColor(item.foregroundColor)
    setBackgroundColor(item.backgroundColor)
  }

  const resetQRCode = () => {
    setQrValue('')
    setSize(250)
    setForegroundColor('#000000')
    setBackgroundColor('#ffffff')
  }

  return (
    <div className="app-container">

      <div className="app-card">

        <h1>QR Code Generator</h1>

        <p className="description">
          Create QR codes for different purposes
        </p>

        <QRTypeSelector
          qrType={qrType}
          setQrType={setQrType}
        />

        <QRForm
          qrType={qrType}
          setQrValue={generateQRCode}
        />

        <QRCustomizer
          size={size}
          setSize={setSize}
          foregroundColor={foregroundColor}
          setForegroundColor={setForegroundColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
        />

        <QRDisplay
          qrValue={qrValue}
          size={size}
          foregroundColor={foregroundColor}
          backgroundColor={backgroundColor}
        />

        {qrValue !== '' && (
          <button
            type="button"
            className="reset-button"
            onClick={resetQRCode}
          >
            Reset
          </button>
        )}

        <QRHistory
          history={history}
          deleteHistoryItem={deleteHistoryItem}
          clearHistory={clearHistory}
          selectHistoryItem={selectHistoryItem}
        />

      </div>

    </div>
  )
}

export default App