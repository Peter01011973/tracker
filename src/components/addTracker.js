import { useState } from 'react'

const AddTraker = ({transiton}) => {
    const [amount, setAmount] =  useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        transiton(amount, text)
    }

    return (
        <div className="new-tracker">
            <h3>AddTracker</h3>
            <hr />
            <form className="input-container" onSubmit={handleSubmit}>
                <label htmlFor='text'>Text</label>
                <input 
                    type="text" 
                    placeholder="  Enter text..." 
                    id='text' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}    
                />
                <label htmlFor='amount'>Amount</label>
                <span>(negative-expense, positive-income)</span>
                <input 
                    onChange={(e) => setAmount(e.target.value)} 
                    value={amount} 
                    type="text" 
                    placeholder="  Enter amount..." 
                    id='amount'
                />
                <button type='submit'>Add transition</button>
            </form>
        </div>
    )
}

export default AddTraker;