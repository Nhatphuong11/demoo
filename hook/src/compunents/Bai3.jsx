import React, { useState } from 'react';

function OrderFrom() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [note, setNote] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!name || !address || !phone || !email) {
            setError("Họ và tên, địa chỉ và số điện thoại là bắt buộc.");
            return;
        }
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
            setError("Số điện thoại không đúng định dạng.");
            return;
        }
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(email)){
            setError("email nhap ko dung dinh dang.");
            return;
        }

        setSuccess(true);
    };
  
    return (
        <div>
            {!success ? (
                <form onSubmit={handleSubmit}>
                    {error && <div style={{ color: "red" }}>{error}</div>}
                    <div>
                        <label htmlFor='name'>Họ và tên:</label>
                        <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>email:</label>
                        <input
                        type='text'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='address'>Địa chỉ:</label>
                        <input
                        type='text'
                        id='address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='phone'>Số điện thoại:</label>
                        <input
                        type='tel'
                        id='phone'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='note'>Ghi chú:</label>
                        <textarea
                        id='note'
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                    <button type='submit'>Đặt hàng</button>
                </form>
            ) : (
                <div style={{ color: "green" }}>Đặt hàng thành công!</div>
            )}
        
        </div>
    );

}

export default OrderFrom;