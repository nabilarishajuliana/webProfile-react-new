import React from 'react'
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import "./anggota.css";

const Anggota1 = () => {
    return (
        <>
            <Nav />

            {/* carousel */}
            <section id="carousel">
                <div class="carousel">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner" >
                            <div class="carousel-item active" data-bs-interval="4000">
                                <img src="carousel/detail_risha1.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Nabila Risha Juliana</h2>
                                    <p>Kelompok 7 TEFA</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_risha2.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_risha3.jpeg" class="d-block w-100 " alt="..." />
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
                            <img src="files/foto_risha.jpeg" class="foto" width="250" style={{ border: "none;" }} />
                        </div>
                        <div class="col">
                            <div class="card" style={{ alignItems: "center", border: "none;" }}>
                                <div class="card-body">
                                    <div class="isi">
                                        <h5 class="card-title">Funfact Risha</h5>
                                        <p class="card-text" >Risha, Seorang siswi dari keahlian perangkat lunak yang saat ini menempuh pendidikan di SMK Telkom Malang. Anak pertama dari 4 bersaudara. Gadis yang lahir di bekasi ini memiliki hobi menonton film. Funfact nya, ia sangat suka sekali dengan series one piece.tokoh favoritnya adalah luffy. baginya, luffy adalah sosok yang menginspirasinya. disamping luffy, ada satu tokoh lagi yang sangat menginspirasi bagi risha, yaitu Renjun NCT yang merupakan personil boygroup dari korea. selain itu ia juga suka bermain makeup entah itu untuk dirinya sendiri ataupun orang lain. risha juga merupakan salah satu anggota dari salah satu organisasi di sekolah yaitu COMET.pada saat pertama kali kenal ia memang pemalu tetapi jika sudah kenal dekat risha orangnya sangat ceria dan aktif. dia sering mendengarkan lagu saat mengerjakan tugas, entah itu saat ngoding ataupun lainnya. Ketika ia sudah sukses,ia sangat ingin bisa pergi ke korea dan mengunjungi SM Entertaiment yaitu agensi yang membawahi boygroup NCT. Sekian terimakasih ^3^ </p>
                                    </div>
                                    <div class="social-agt" >
                                        <div class="social" >
                                            <a href="https://www.instagram.com/nabilarisha01/" class="card-link" ><i class="fa fa-instagram"></i></a>
                                            <a href="https://www.tiktok.com/@nabilarisha01?_t=8WxLwibyqsj&_r=1" class="card-link"><i class="fa-brands fa-tiktok"></i></a>
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
                        <div class="card-header" style={{marginTop:"100px"}}>
                            <h3>Favorite Location</h3>
                        </div>
                        <div class="card-body">
                            <div class="maps">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.45210979737!2d127.04159051744384!3d37.5444107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca46e21c25855%3A0xb969fc2b68758946!2sSM%20ENTERTAINMENT!5e0!3m2!1sen!2sid!4v1666976162780!5m2!1sen!2sid" width={"500"} height={"450"} style={{border:"0;"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="tombol">
                                <a href="https://goo.gl/maps/KPesUTodSjMrPqqo8" class="btn btn-primary" >Check Gmaps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <Footer />

        </>
    )
}

export default Anggota1