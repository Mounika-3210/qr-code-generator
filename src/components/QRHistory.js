const QRHistory = ({
  history,
  deleteHistoryItem,
  clearHistory,
  selectHistoryItem,
}) => {

  if (history.length === 0) {
    return (
      <div className="history-container">
        <h2>QR History</h2>

        <p>No QR codes generated yet.</p>
      </div>
    )
  }

  return (
    <div className="history-container">

      <div className="history-heading">

        <h2>QR History</h2>

        <button
          type="button"
          className="clear-button"
          onClick={clearHistory}
        >
          Clear All
        </button>

      </div>

      {history.map(item => (
        <div
          className="history-item"
          key={item.id}
        >

          <div className="history-info">

            <p className="history-type">
              {item.type.toUpperCase()}
            </p>

            <p className="history-value">
              {item.value}
            </p>

          </div>

          <div className="history-buttons">

            <button
              type="button"
              onClick={() => selectHistoryItem(item)}
            >
              Use
            </button>

            <button
              type="button"
              onClick={() => deleteHistoryItem(item.id)}
            >
              Delete
            </button>

          </div>

        </div>
      ))}

    </div>
  )
}

export default QRHistory