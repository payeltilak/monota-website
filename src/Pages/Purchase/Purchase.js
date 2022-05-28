import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../HomePage/Shared/Loading';

const Purchase = () => {
    const { id } = useParams()
    const [user] = useAuthState(auth)
    const quantityRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const [price, setPrice] = useState(0)
    const [quantityError, setQuantityError] = useState('')
    const { data: tool, isLoading, refetch } = useQuery('tool', () => fetch(`https://blooming-ridge-15551.herokuapp.com/tool/${id}`, {
        method: "GET",
        headers: {
            "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
            "content-type": "application/json"
        },
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    const placeOrder = (e) => {
        e.preventDefault()
        const inputQuantity = parseInt(quantityRef.current.value)
        const name = user.displayName
        const email = user.email
        const address = addressRef.current.value
        const phone = phoneRef.current.value
        const toolName = tool.name
        const toolId = tool._id

        setPrice(inputQuantity * tool.price)
        const order = {
            name,
            email,
            address,
            phone,
            quantity: inputQuantity,
            toolName,
            toolId,
            price: (tool.price * inputQuantity)
        }
        if (inputQuantity < tool.minimumOrder) {
            setQuantityError('Please order minimum quantity ')

        }
        else if (inputQuantity > tool.quantity) {
            setQuantityError('Out of quantity')

        }
        else {
            setQuantityError('')
            fetch('https://blooming-ridge-15551.herokuapp.com/order', {
                method: "PUT",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                    "content-type": "application/json"
                },
                body: JSON.stringify(order)
            })
                .then(res => {

                    res.json()
                })
                .then(data => {
                    // toast.success("Order confirmed")
                    console.log('Order confirmed');
                    refetch()
                })

        }
        e.target.reset()
    }

    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 mt-12'>

            <div class="card w-80 bg-blue-300 drop-shadow-2xl g-5 h-full ml-20">
                <figure class="px-10 pt-10">
                    <img src={tool.img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-blue-600">{tool.name}</h2>
                    <h3 className='text-1xl font-bold'>${price}</h3>
                    <h4 className='text-1xl font-bold'>Minimum Order Quantity : <small>{tool.minimumOrder} </small></h4>
                    <h4 className='text-1xl font-bold'>Available Quantity : <small>{tool.quantity}</small></h4>
                    <p>{tool.description.slice(0, 100)}...</p>
                    
                </div>
            </div>
            <form onSubmit={placeOrder} className="form-control w-full max-w-xs mr-auto">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" readOnly value={user?.displayName} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Email</span>

                </label>
                <input type="text" readOnly value={user?.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Address</span>
                </label>
                <input ref={addressRef} type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Phone Number</span>
                </label>
                <input ref={phoneRef} type="text" placeholder="Your Number" className="input input-bordered w-full max-w-xs" />
                <label className="label">
                    <span className="label-text">Quantity</span>
                </label>
                <input ref={quantityRef} type="number" placeholder={`Minimun order ${tool.minimumOrder}`} className="input input-bordered w-full max-w-xs " />
                {
                    quantityError ? <p>{quantityError}</p> : <p>{`Subtotal: ${price}`}</p>
                }
                {/* <p className='text-red-500'>{quantityError ? `${quantityError}` : <p></p>}</p> */}
                <input type="submit" placeholder='' value=' Order' className="input input-bordered w-full max-w-xs mt-5 btn btn-secondary" />
            </form>
        </div>
    );
};

export default Purchase;