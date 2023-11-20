import './../../App.css';

export const FormContact = () => {
    return (
        <div>
            <div className='display-flex form-style'>
                <div >
                    <input className='input-cred' type="text" placeholder='   name'/>
                    <input className='input-cred' type="text" placeholder='   email'/>
                </div>
                <input className='input-comment' type="text" placeholder='  comment'/>

                
            </div>
            <div className='button-form'>
                <div className='display-flex center'>
                    <img src="/btn-form.png" alt="btn-form" />
                    <div>send</div>
                </div>
                
            </div>
            
        </div>
    )
}

