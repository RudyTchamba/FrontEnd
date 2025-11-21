const Greeting = () => {

    const greet = "Hello World Learning React JS";

    const date = new Date()



  return (
    <div>
        <h1>{greet}</h1>

        <p>Date: {date.getDate()}</p>
    </div>
  )
}

export default Greeting