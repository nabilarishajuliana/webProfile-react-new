import React from 'react'
import Footer from '../component/Footer';
import Nav from '../component/Nav';
import "./anggota.css";

const Anggota3 = () => {
    return (
        <>
           <Nav />
           
            {/* carousel */}
            <section id="carousel">
                <div class="carousel">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel" >
                        <div class="carousel-inner" >
                            <div class="carousel-item active" data-bs-interval="4000">
                                <img src="carousel/detail_nova1.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h2>Nova Chandra Kirana</h2>
                                    <p>Kelompok 7 TEFA</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_nova2.jpeg" class="d-block w-100 " alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="4000">
                                <img src="carousel/detail_nova3.jpeg" class="d-block w-100 " alt="..." />
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
                            <img src="files/foto_nova.jpeg" class="foto" width="250" style={{ border: "none;" }} />
                        </div>
                        <div class="col">
                            <div class="card" style={{ alignItems: "center", border: "none;" }}>
                                <div class="card-body">
                                    <div class="isi">
                                        <h5 class="card-title">Funfact Nova</h5>
                                        <p class="card-text" >Bisa Baca Usia 3, 5 Tahun, lancar Menulis Umur 4 Tahunan .Well aku sekarang udah gede udah bisa ngomong lancar walaupun kadang-kadang sedikit belibet sih. Kenalin aku Nova anak pertama dari 3 bersaudara, sekarang aku sekolah di SMK TELKOM MALANG. Ada funfact tentang diriku yang agak bikin kalian tercengang dan pasti saya tidak merekomendasikan kelebihan ini buat anak-anak lainnya. Aku itu punya kecendrungan baca dengan cara skimming. Alias baca super cepat tapi sering keliru. Contohnya gini, ada yang tahu Majalah Bobo Kan ada tuh cerita bergambar Paman Kikuk, Husin dan anjingnya. Inget ga, siapa nama anjingnya? Ya! ASTA kan?? .Saya bacanya selama bertahun-tahun sampai naik smp, baru ngeh kalau nama anjingnya itu bukan ATAS. Nangis, kalo keinget sampe sekarang tuh rasanya malu banget</p>
                                    </div>
                                    <div class="social-agt" >
                                        <div class="social" >
                                            <a href="https://www.instagram.com/novaadrr/" class="card-link" ><i class="fa fa-instagram"></i></a>
                                            <a href="https://www.tiktok.com/@bobacheese01" class="card-link"><i class="fa-brands fa-tiktok"></i></a>
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505145.82621075684!2d114.79069740130294!3d-8.455371266733163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali!5e0!3m2!1sid!2sid!4v1667262650281!5m2!1sid!2sid" width={"500"} height={"450"} style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                            <div class="tombol">
                                <a href="https://goo.gl/maps/bTrCo84vJy25Yyyg8" class="btn btn-primary" >Check Gmaps</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           <Footer />
           
           
        </>
    )
}

export default Anggota3