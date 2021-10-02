import React from 'react';

const NotFound = () => {
    return (
        <>


            <section class="breadcrumb-area" style={{ backgroundImage: 'url(images / background / 3.jpg);' }}>
                <div class="container text-center">
                    <h1>404 page</h1>
                </div>
            </section>



            <section class="not-found-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="not-found-content text-center">
                                <h1>404</h1>
                                <h3>OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.</h3>
                                <p>Try the search below to find matching pages:</p>
                                <form class="search-form" action="#">
                                    <input placeholder="Search..." type="text" />
                                    <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    )
}

export default NotFound;