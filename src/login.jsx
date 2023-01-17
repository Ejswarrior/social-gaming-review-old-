
export default async function Login(){
    return(
                <div class="col">
                    <h2 className='loginHeader'>Enter in your Login information</h2>
                    <form action='logincheck' method="POST"> 
                        <div class="row">
                        <label class="form-label" htmlFor='username' id='username'>Username</label>
                        <input class="form-constrol-sm" type="text" name='username' id="password"/>
                        </div>
                        <div class="row">
                        <label class="form-label" htmlFor='password' id='password'>Password</label>
                        <input class="form-constrol-sm" type="password" name='password' id="password"/>
                        </div>
                        <div class="row">
                        <input class="btn btn-primary" type='submit' value="Log in"></input>
                        </div>
                    </form>
                </div>
)
}


