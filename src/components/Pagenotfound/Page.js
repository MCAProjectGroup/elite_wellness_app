import React from 'react'
import './Page.css';

function Page() {
  return (
    <div >
    <section class="error-page-area text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-8 offset-md-2">
                    <h1 style={{color:"#b90e63"}}>404</h1>
                    <h2 style={{color:"#b90e63"}}>Sorry Page Was Not Found!</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                    <a class="btn btn-theme effect btn-md" href="#" style={{backgroundColor:"#b90e63",color:"white"}}>Back To Home</a>
                    <a class="btn btn-dark border btn-md" href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}

export default Page