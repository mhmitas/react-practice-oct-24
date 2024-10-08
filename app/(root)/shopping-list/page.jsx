"use client"

import React, { useState } from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import askConfirm from '@/components/modals/askConfirm';

const Products = () => {
    const [items, setItems] = useState([...dummyData])

    async function handleDelete(index) {

        const ask = await askConfirm('Are you sure? You want to delete item form your list')

        console.log(ask)

        if (!ask) return;

        setItems(items.filter((_, i) => i !== index))
    }

    return (
        <section className='mt-6 mb-14 my-container min-h-screen'>
            <div className='max-w-xl mx-auto'>
                <h1 className='title-1'>😎 Smart Shopper</h1>
                <AddListItem items={items} setItems={setItems} />
                <h2 className='title-2 mt-6'>List</h2>

                <div className='mt-4'>
                    <table className="w-full border-collapse">
                        <thead className="bg-muted/10">
                            <tr className="*:px-4 *:py-2 border-b hover:bg-muted/40">
                                <th className="text-left">#</th>
                                <th className="text-left">Quantity</th>
                                <th className="text-left">Quantity</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item, index) => (
                                <tr key={index} className="*:p-4 border-b hover:bg-muted/50">
                                    <td>{index + 1}</td>
                                    <td className="">{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td className='text-center'>
                                        <Button onClick={() => handleDelete(index)} size="sm" variant="destructive">
                                            Delete
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Products;


function AddListItem({ items, setItems }) {

    function handleSubmit(e) {
        e.preventDefault()
        const form = e.target
        const name = form.item.value;
        const quantity = form.quantity.value;

        setItems([{ name, quantity }, ...items]);
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className='bg-muted/60 p-4 space-y-4 rounded-lg mt-6 drop-shadow'>
            <Input name="item" placeholder='Add a product' />
            <Input name="quantity" placeholder="Quantity" />
            <div className='text-center'>
                <Button type='submit'>Add</Button>
            </div>
        </form>
    )
}


let dummyData = [
    {
        name: "Apple",
        quantity: "2 KG"
    },
    {
        name: "Vegetable oil",
        quantity: "5 L"
    },
    {
        name: "Tomato",
        quantity: "3 KG"
    },
    {
        name: "Potato",
        quantity: "5 Kg"
    }
]