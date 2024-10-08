import React from 'react'
import { Button } from '../ui/button'

const ConfirmModal = ({ onConfirm, onCancel, message = "Are you sure" }) => {

    return (
        <div className='fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center z-50 overflow-hidden'>
            <div className='max-w-sm w-full bg-background p-6 rounded-lg'>
                <h3 className='text-sm mb-2 text-muted-foreground'>Confirm Action</h3>
                <h3 className='text-lg font-semibold'>{message}</h3>
                <div className='flex gap-2 justify-end mt-4'>
                    <Button onClick={onConfirm} size="sm" variant="destructive">Confirm</Button>
                    <Button onClick={onCancel} size="sm">Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal