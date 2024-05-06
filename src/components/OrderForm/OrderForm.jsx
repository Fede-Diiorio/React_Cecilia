import { useState } from 'react'
import classes from './OrderForm.module.css'

const OrderForm = ({ onCreate }) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [formSubmitted, setFormSubmitted] = useState(false)


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setFormSubmitted(true)

        if (!name || !phone || !email) {
            alert('error', 'Debe completar todos los campos')
            return
        }

        const userData = {
            name,
            phone,
            email,
        };

        onCreate(userData)
    }

    return (
        <>
            <section className={`container ${classes.contact}`}>
                <form className={classes.form} onSubmit={handleSubmit}>

                    <legend>Completa todos los campos para generar la orden</legend>

                    <div className={classes.container}>
                        <div className={classes.field}>
                            <label>Nombre:</label>

                            <input type="text" placeholder="Tu Nombre" value={name} onChange={handleNameChange} />
                        </div>

                        <div className={classes.field}>
                            <label>Teléfono:</label>
                            <input type="tel" pattern="[0-9]*" placeholder="Tu Teléfono" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className={classes.field}>
                            <label>E-mail:</label>
                            <input type="email" placeholder="Tu E-mail" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>

                    <input type="submit" value='Generar Orden' className={classes.submit} />

                </form>
            </section>
        </>
    )
}

export default OrderForm