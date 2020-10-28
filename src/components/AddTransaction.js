import React, { useState } from 'react'

export const AddTransaction = () => {

    const [description, setDescription] = useState();
    const [transactionamount, setTransactionAmount]= useState();
    return (
        <div>
            <h3> 
                Add New Transaction
            </h3>
            <form>  
                
                <div>
                   
                    <label htmlFor='description'>
                        Description
                    </label>
                    <input   type="text"
                             id="description" 
                             placeholder="Detail of Transaction"
                             value={description}
                             onChange={(e) => setDescription(e.target.value)}//update description when add second time
                    />

                </div>

                <div className="form-control">    
                    
                    <label htmlFor="transactionamount">
                        Transaction Amount
                    </label>
                    <input  type="number" 
                            id="transactionamount" 
                            placeholder="Amount of Transaction"
                            value={transactionamount}
                            onChange={(e) => setTransactionAmount(e.target.value)}
                    />

                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
     </div>
        
    )
}
