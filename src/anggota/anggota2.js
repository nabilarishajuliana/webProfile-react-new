import React from 'react'
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import "./anggota.css";

const Anggota2 = () => {
    return (
        <>
            <Nav />

            {/* carousel */}
            <section id="carousel">
                <div class="carousel">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner" >
                            <div class="carousel-item active" data-bs-interval="4000">
                                <img src="carousel/detail_nayla1.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Nayla Nur Amalia</h2>
                                    <p>Kelompok 7 TEFA</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_nayla2.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_nayla3.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* funfact */}
            <section id="FF">
                <div class="container text-center ">
                    <div class="row">
                        <div class="col">
                            <img src="files/foto_nayla.jpeg" class="foto" width="250" style={{ border: "none;" }} />
                        </div>
                        <div class="col">
                            <div class="card" style={{ alignItems: "center", border: "none;" }}>
                                <div class="card-body">
                                    <div class="isi">
                                        <h5 class="card-title">Funfact Nayla</h5>
                                        <p class="card-text" >Nayla, seorang siswi dari keahlian rekayasa perangkat lunak yang saat ini menempuh pendidikan di SMK Telkom Malang. Anak pertama dari 2 bersaudara. Gadis yang berasal dari kabupaten Malang ini memiliki hobi yakni membaca. Fun fact nya, ia juga menjadi seorang anggota dari organisasi perpustakaan di SMK Telkom Malang. Selain itu, ia juga mengikuti beberapa sub-organisasi yang ada. Termasuk orang yang memiliki humor yang rendah, apa-apa diketawain. Orangnya random, ramah senyum bahkan kalau lagi badmood tetep aja senyum. Penyuka grupband korea yaitu NCT DREAM. Oiya, love language nya quality time loh. Udah segitu aja ♡⁠(⁠˃͈⁠ ⁠દ⁠ ⁠˂͈⁠ ⁠༶⁠ ⁠)</p>
                                    </div>
                                    <div class="social-agt" >
                                        <div class="social" >
                                            <a href="https://www.instagram.com/nayl.amalia/" class="card-link" ><i class="fa fa-instagram"></i></a>
                                            <a href="https://www.tiktok.com/@urgreymoon?_t=8WxqBxfa9jd&_r=1" class="card-link"><i class="fa-brands fa-tiktok"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* maps */}
            <section id="maps">
                <div class="container-fluid">
                    <div class="text-center">
                        <div class="card-header" style={{ marginTop: "100px" }}>
                            <h3>Favorite Location</h3>
                        </div>
                        <div class="card-body">
                            <div class="maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.9740092282545!2d110.36365431448567!3d-7.792576394384336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5742a17e8c33%3A0xf92dc9a55003beb0!2sMALIOBORO%20JOGJAKARTA!5e0!3m2!1sid!2sid!4v1667218272602!5m2!1sid!2sid" width={"500"} height={"450"} style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="tombol">
                                <a href="https://g.page/malioboro-jogja?share" class="btn btn-primary" >Check Gmaps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Anggota2