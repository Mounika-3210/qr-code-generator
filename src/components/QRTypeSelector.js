const QRTypeSelector = ({qrType, setQrType}) => {
  return (
    <div className="type-container">

      <button
        className={qrType === 'url' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('url')}
      >
        URL
      </button>

      <button
        className={qrType === 'phone' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('phone')}
      >
        Phone
      </button>

      <button
        className={qrType === 'text' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('text')}
      >
        Text
      </button>

      <button
        className={qrType === 'email' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('email')}
      >
        Email
      </button>

      <button
        className={qrType === 'wifi' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('wifi')}
      >
        Wi-Fi
      </button>

      <button
        className={qrType === 'whatsapp' ? 'type-button active' : 'type-button'}
        onClick={() => setQrType('whatsapp')}
      >
        WhatsApp
      </button>

    </div>
  )
}

export default QRTypeSelector