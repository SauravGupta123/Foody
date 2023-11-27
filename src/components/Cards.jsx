import React from 'react'

function Cards() {
    return (
        <>
            <div className="card mt-5 " style={{ width: "19rem" }}>
                <img src=".." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Cards Items text</p>
                    <div className="container w-100">
                        <select name="" id="" className="m-2 h-100 bg-success rounded">
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })

                            }
                        </select>
                        <select name="" id="" className="m-2 h-100 w-30 bg-success rounded">
                            <option key="half" value="half">Half</option>
                            <option key="full" value="full">Full</option>
                        </select>
                        <div className="d-inline h-100 fs-5">
                            Total Price
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
