function FeedbackList({feedback}) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback yet</p>
    }
    console.log(feedback)
  return (
    <div className="feedback-list">
        {feedback.map((item) => (
            <div className="">{item.rating}</div>
        ))}
    </div>
  )
}

export default FeedbackList