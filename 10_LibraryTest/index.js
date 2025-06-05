import express from 'express';

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    res.send('Hello World! guysss kelas 01');

})

app.post('/mahasiswa', (req, res) => {

    try {

        const { nim, nama_lengkap, email, no_hp, tanggal_lahir, jenis_kelamin } = req.body;

        res.status(201).json({

            statusCode: 201,

            message: 'Mahasiswa created successfully',

            data: {

                nim: nim,

                nama_lengkap: nama_lengkap,

                email: email,

                no_hp: no_hp,

                tanggal_lahir: tanggal_lahir,

                jenis_kelamin: jenis_kelamin

            }

        })

    } catch (error) {

        res.status(500).json({

            statusCode: 500,

            message: 'Internal Server Error',

            error: error.message

        })

    }

})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Server is running on port ${PORT}`);

})