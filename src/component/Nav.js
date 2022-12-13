import React from 'react'

function Nav() {
    return (
         <>
            {/* navbar */}
            <nav class="navbar fixed-top navbar-expand-lg" style={{ backgroundColor: "rgb(171,109,132)", padding: "10px;" }} >
                <div class="container-fluid" >
                    <img src="files/gift.gif" class="rounded-circle" alt="Logo" width="30" height="30" />
                    <a class="navbar-brand" href="#"><b style={{ color: "white" }}>&nbsp;Tripple</b><b style={{ color: "yellow" }}> N</b></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="/" >Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#carousel" >Carousel</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#FF" >Funfact</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#maps" >Maps</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact" >contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            </>

    )
}

export default Nav