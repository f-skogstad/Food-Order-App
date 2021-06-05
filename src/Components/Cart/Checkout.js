import React, { useRef } from 'react';

function Checkout(props) {
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
  };

  return (
    <form className='checkout' onSubmit={confirmHandler}>
      <div className='control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
      </div>
      <div className='control'>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
      </div>
      <div className='control'>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalInputRef} />
      </div>
      <div className='control'>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
      </div>
      <div className='btns-wrapper'>
        <button className='cancel-btn' type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className='confirm-btn'>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;