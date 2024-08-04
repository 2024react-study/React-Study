const React = require('react');
const { useState, useRef } = React;

function GuGuDan() {
    const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
    const [inputValue, setInputValue] = useState('');
    const [result, setResult] = useState('');
    const inputRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(parseInt(inputValue) === first * second) {
            setResult("정답" + inputValue);
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setInputValue('')
            inputRef.current.focus();
        }
        else {
            console.log(inputValue);
            setResult("땡");
            setInputValue('')
            inputRef.current.focus();
        }
    }

    const onChangeInput = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <>
            {first} 곱하기 {second}는?
            <form onSubmit={onSubmit}>
                <input 
                    ref={inputRef} 
                    type="number" 
                    onChange={onChangeInput} 
                    value={inputValue}
                />
                <button>입력!</button>
            </form>
            {result}
        </>
    );
}

module.exports = GuGuDan;