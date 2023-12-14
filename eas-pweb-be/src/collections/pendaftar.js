import payload from 'payload';
/** @type {import('payload/types').CollectionConfig} */

const pendaftar = {
    slug: 'pendaftar',
    access: {
        create: () => true,
        read: () => true,
        update: () => true,
        delete: () => true
    },
    
    fields: [
        {
            name: 'Nama',
            type: 'text',
            maxLength: 100,
            required: true
        },
        {
            name: 'email',
            type: 'text',
            required: true,
            unique: true
        },
        {
            name: 'AsalSekolah',
            type: 'text',
            required: true
        },
        {
            name: 'Status',
            type: 'select',
            defaultValue: 'waiting',
            options: [
                {
                    label: 'Waiting',
                    value: 'waiting'
                },
                {
                    label: 'Rejected',
                    value: 'rejected'
                },
                {
                    label: 'Accepted',
                    value: 'accepted'
                }
            ],
            hasMany: false,
            required: true
        },
        {
            name: 'TanggalPendaftaran',
            type: 'date',
            required: true
        }
    ]
}

export default pendaftar