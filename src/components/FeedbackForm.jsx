// import { cloneElement } from "react"
import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function FeedbackForm() {
    const [text, setText] = useState('')
    const [btnDisabled, setbtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === '') {
            setbtnDisabled(true)
            setMessage(null)
        } else if(text !== '' && text.trim().length <= 10) {
            setMessage('must contain 10 characters or more')
            setbtnDisabled(true)
        } else {
            setMessage(null)
            setbtnDisabled(false)
        }

        setText(e.target.value)
    }

  return (
    <Card>
        <form>
            <h2>How would you rate this?</h2>
            {/* @todo rating select comonent */}
            <div className="input-group">
                <input 
                onChange={handleTextChange} 
                type="text" 
                placeholder="Write a review" 
                value={text}
                />
                <Button 
                    type="submit" 
                    isDisabled={btnDisabled}
                    >Send
                </Button>
            </div>

            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm