import { useState } from 'react';

const Text = () => {

    const [result, setResult] = useState('');

    const handleClick = () => {
        console.log('clicked');
        const price = document.getElementById("price").value;
        const times = document.getElementById("times").value;
        let result = (price * times) * 52;
        setResult('€ ' + result + ' spent a year!');
    }
    console.log(result);

    return(
        <div className="main-txt">
            <h1>Count my coffee addiction</h1>

            <form action="">
                <label>what's the cost of your regular order?</label>
                <div className="cost"><p>€</p><input type="text" name="" id="price" placeholder="00.00" /></div>
                <label>how many times a week do you indulge in the above?</label>
                <input type="text" name="" id="times" />
                <button type="button" onClick={handleClick}>reveal my truth</button>

                <h2>{result}</h2>
            </form>
        </div>
    )
}

export default Text;