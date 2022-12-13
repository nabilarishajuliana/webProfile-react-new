import React from 'react'
import Footer from '../component/Footer';
import NavHome from '../component/NavHome';
import './home.css';

const Home = () => {
  return (
    <>

      <NavHome/>

      {/* carousel */}
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" style={{ height: "500px" }}>
          <div class="carousel-item active" data-bs-interval="2000">
            <img src="carousel/fototrip1.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h3>Tripple N</h3>
              <p>Kelompok 7 TEFA</p>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="carousel/fototrip4.jpeg" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src="carousel/fototrip3.jpeg" class="d-block w-100" alt="..." />
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

      {/* profile */}
      <section id="profile">
        <div class="container text-center">
          <div class="row">
            <div class="col">
              <div class="deskripsi">
                <div class="judul">Profile Video</div>
                <div class="isi">
                  <p>Welcome to our profile web, Tripple N. This web is made to introduce our group, enjoy</p>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div class="haha">
          <div class="container text-center">
            <br></br>
            <div class="row">
              <div class="col">
                <div class="container-fluid">
                  <video class="img-fluid" controls >
                    <source
                      src="files/video_perkenalan.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* anggota */}
      <section id="agt">
        <div class="haha">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <div class="deskripsi">
                  <div class="judul">Our Members</div>
                  <div class="isi">
                    <p>Introduce to our happy members shown in the tiles below.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="haha">
          <div class="container text-center container-fluid" >
            <div class="nama row align-items-start">
              <div class="col">
                <div class="card" style={{ border: "none" }}>
                  <img src="files/foto_risha.jpeg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">About Risha!</h5>
                    <p class="card-text">
                      Nama lengkap: Nabila Risha Juliana <br></br>
                      Panggilan: Risha <br></br>
                      Kelas: XI RPL 1 <br></br>
                      Alamat: Jl.Candi Agung lll no. 11 <br></br>
                      Tgl lahir: 19 Juli 2006 <br></br>
                      No telp: 0818199220 <br></br>
                      Asal sekolah: SMK TELKOM MALANG<br></br>
                      Hobi: menonton,makeup<br></br>
                      Softskill: Self-Control <br></br>
                      Kesukaan: Luffy
                    </p>
                    
                  </div>
                  <div class="card-footer" style={{ border: "none" }} >
                    <a href="/anggota1" class="btn btn-primary" >See Details</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: "none" }}>
                  <img src="files/foto_nayla.jpeg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">About Nayla!</h5>
                    <p class="card-text">
                      Nama lengkap : Nayla Nur Amalia <br></br>
                      Panggilan : Nayla <br></br>
                      Kelas : XI RPL 1 <br></br>
                      Alamat : jl Danau Buyan F19<br></br>
                      Tgl lahir : 11 Juni 2006<br></br>
                      No telp : 081222318396<br></br>
                      Asal sekolah : SMK TELKOM MALANG <br></br>
                      Hobi : Membaca, mendengar musik<br></br>
                      Softskill : public speaking, cepat beradaptasi, kolaborasi<br></br>
                      Kesukaan : Jeno
                    </p>
                  </div>
                  <div class="card-footer" style={{ border: "none" }}>
                    <a href="/anggota2" class="btn btn-primary">See Details</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" style={{ border: "none" }} >
                  <img src="files/foto_nova.jpeg" class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">About Nova!</h5>
                    <p class="card-text">
                      Nama lengkap: Nova Chandra Kirana<br></br>
                      Panggilan: Nova<br></br>
                      Kelas: XI RPL 2<br></br>
                      Alamat: jl Danau Ranau No.26 G6 E28<br></br>
                      Tgl lahir: 31 Agustus 2006<br></br>
                      No telp: 081515582791<br></br>
                      Asal sekolah: SMK Telkom Malang<br></br>
                      Hobi: Membaca , Memasak<br></br>
                      Softskill: Berpikir Kritis<br></br>
                      Kesukaan: Kulineran
                    </p>
                  </div>
                  <div class="card-footer" style={{ border: "none" }}>
                    <a href="/anggota3" class="btn btn-primary">See Details</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </>
  )
}

export default Home