import {useState} from 'react'

const QRForm = ({qrType, setQrValue}) => {
  const [url, setUrl] = useState('')
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [wifiName, setWifiName] = useState('')
  const [wifiPassword, setWifiPassword] = useState('')
  const [whatsapp, setWhatsapp] = useState('')

  const [error, setError] = useState('')

  const generateQRCode = () => {
    setError('')

    if (qrType === 'url') {
      if (!url.startsWith('http://') && !url.startsWith('https://')) {
        setError('Please enter a valid URL')
        return
      }

      setQrValue(url)
    }

    if (qrType === 'phone') {
      if (!/^[6-9]\d{9}$/.test(phone)) {
        setError('Please enter a valid 10-digit phone number')
        return
      }

      setQrValue(`tel:+91${phone}`)
    }

    if (qrType === 'text') {
      if (text.trim() === '') {
        setError('Please enter some text')
        return
      }

      setQrValue(text)
    }

    if (qrType === 'email') {
      if (!email.includes('@')) {
        setError('Please enter a valid email')
        return
      }

      setQrValue(`mailto:${email}`)
    }

    if (qrType === 'wifi') {
      if (wifiName.trim() === '') {
        setError('Please enter Wi-Fi name')
        return
      }

      const wifiValue =
        `WIFI:T:WPA;S:${wifiName};P:${wifiPassword};;`

      setQrValue(wifiValue)
    }

    if (qrType === 'whatsapp') {
      if (!/^[6-9]\d{9}$/.test(whatsapp)) {
        setError('Please enter a valid 10-digit phone number')
        return
      }

      setQrValue(`https://wa.me/91${whatsapp}`)
    }
  }

  return (
    <div className="form-container">

      {qrType === 'url' && (
        <div>
          <label>Enter URL</label>

          <input
            type="text"
            placeholder="https://google.com"
            value={url}
            onChange={event => setUrl(event.target.value)}
          />
        </div>
      )}

      {qrType === 'phone' && (
        <div>
          <label>Enter Phone Number</label>

          <input
            type="text"
            placeholder="9876543210"
            value={phone}
            maxLength="10"
            onChange={event => setPhone(event.target.value)}
          />
        </div>
      )}

      {qrType === 'text' && (
        <div>
          <label>Enter Text</label>

          <textarea
            placeholder="Enter your text"
            value={text}
            onChange={event => setText(event.target.value)}
          />
        </div>
      )}

      {qrType === 'email' && (
        <div>
          <label>Enter Email</label>

          <input
            type="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
      )}

      {qrType === 'wifi' && (
        <div>

          <label>Wi-Fi Name</label>

          <input
            type="text"
            placeholder="My Wi-Fi"
            value={wifiName}
            onChange={event => setWifiName(event.target.value)}
          />

          <label>Wi-Fi Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={wifiPassword}
            onChange={event => setWifiPassword(event.target.value)}
          />

        </div>
      )}

      {qrType === 'whatsapp' && (
        <div>
          <label>WhatsApp Number</label>

          <input
            type="text"
            placeholder="9876543210"
            value={whatsapp}
            maxLength="10"
            onChange={event => setWhatsapp(event.target.value)}
          />
        </div>
      )}

      {error !== '' && (
        <p className="error-message">{error}</p>
      )}

      <button
        className="generate-button"
        onClick={generateQRCode}
      >
        Generate QR Code
      </button>

    </div>
  )
}

export default QRForm