import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
        <div className="about">
            <h1>About this project</h1>
            <p>This is a React app for feedback</p>
            <p>Version 1.0.0</p>

            <p><a href="/">Home</a></p>
        </div>
    </Card>
  )
}

export default AboutPage