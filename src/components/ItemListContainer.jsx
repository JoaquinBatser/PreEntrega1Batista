import React from 'react'

const ItemListContainer = () => {
    const Greetings = (user) => {
        return (
            <p>Welcome {user.name}</p>
        );
    };

  return (
    <div className='py-1 px-11 text-xs opacity-80 italic text-end'>
        <Greetings name="Josephine" />
    </div>
  )
}

export default ItemListContainer