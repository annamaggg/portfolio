import React from 'react';
import { Navbar } from './Navbar';
import './Gallery.css';
import PhotoAlbum from "react-photo-album";
import "react-photo-album/rows.css"
import { Divider } from './Divider';
// documentation: https://react-photo-album.com


const finalProjectPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f8_sneksl.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f7_bgfieu.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f6_dcmpic.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f1_o2bpn2.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f3_viefmp.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f2_q95hfs.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f5_zsg2mu.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f4_sodajp.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f9_fuf5k5.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f10_l4fbvm.jpg',  width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/f11_uk8dmj.jpg',  width: 200, height: 200 }

];

const ellieArtPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/ellieSite2_uidsj9.jpg', width: 600, height: 320 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/ellieSite3_xqkm5m.jpg', width: 600, height: 320 }
];

const golfPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/golf5_tv7tua.jpg', width: 700, height: 400  },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/golf2_gejloa.jpg', width: 700, height: 400  },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/golf3_kqkcnn.jpg', width: 700, height: 400  },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/golf1_tigsmg.jpg', width: 700, height: 400  },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/golf4_m2hvr8.jpg', width: 700, height: 400  }

]

const modelPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/model1_sn22ow.jpg', width: 700, height: 400 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/model2_qpae9j.jpg', width: 700, height: 400 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/model3_akx0zz.jpg', width: 700, height: 400 }
]

const dandyPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy2_avskg7.jpg', width: 200, height: 400},
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy1_znwj5b.jpg', width: 200, height: 400},
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy3_neog2r.jpg', width: 200, height: 400},
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy4_marmwx.jpg', width: 200, height: 400},
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy5_gxhard.jpg', width: 200, height: 400},
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/dandy6_evhrhf.jpg', width: 200, height: 400}
]

const travisPalacePhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp1_jceb9u.jpg', width: 300, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp6_jsn82p.jpg', width: 300, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp4_a4t9qa.jpg', width: 300, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp5_mrbqrr.jpg', width: 300, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp2_lpdzgd.jpg', width: 300, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/tp3_vkiaag.jpg', width: 300, height: 200 }

]

const posterPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/p5_jsg8uv.jpg', width: 200, height: 270 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/p4_wp49bu.jpg', width: 200, height: 270 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/p3_pebpnz.jpg', width: 200, height: 270 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/p1_mhx5ie.jpg', width: 200, height: 270 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/p2_mhigek.jpg', width: 200, height: 270 }
]

const albumArtPhotos = [
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a6_fufyyc.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a7_q6xt6j.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a4_sgfjlt.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a5_uekvi3.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a2_gfbpe0.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a3_qpmrfx.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a1_ec1ylc.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a9_qxyswe.jpg', width: 200, height: 200 },
  { src: 'https://res.cloudinary.com/dnwbll6u0/image/upload/a8_cazmnw.jpg', width: 200, height: 200 }
];

export const Gallery = () => {
  return (
    <>
      <Navbar />
      <div style={{maxWidth: 'screen'}}>
      <div className='paragraph'>
        {/* <h1 className='text-page-heading'>Visual design</h1> */}
        <p className="text-page-intro">As a developer with a background in design, I understand the importance of user experience and visual design. <br></br><br></br>
        I approach every project with a keen eye for detail, considering factors such as positioning, sizing and color schemes of elements to ensure that the end result is both aesthetically pleasing and intuitive to use. I believe that combining technical skill with a deep understanding of user needs is essential to creating impactful and engaging products.</p>
      </div>

      <Divider title="ELLIE FANE" description="A website built for an artist" />

      <div className="fp-gallery">
      <img src='https://res.cloudinary.com/dnwbll6u0/image/upload/ellieSite_rlswpi.jpg' alt='EllieArtSite' className='ellieArtHomepage'/>
        <PhotoAlbum  layout="rows" photos={ellieArtPhotos}  />;
      </div>

      <Divider title="DANDY" description="An app which suggests activities to do during lockdown" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={dandyPhotos} />;
      </div>

      <Divider title="UNIVERSITY FINAL PROJECT" description="Artwork and 3D models created for a game, using Photoshop & Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={finalProjectPhotos} />;
      </div>

      <Divider title="GOLF COURSE" description="Terrain and 3D models created using Unity and Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={golfPhotos} />;
      </div>

      <Divider title="TRAVIS' PALACE" description="A game created where the user must find Travis Scott and deliver the golden beat to him. Scenery and 3D models created using Unity and Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={travisPalacePhotos} />;
      </div>

      <Divider title="3D MODELS" description="Various models built using Maya" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={modelPhotos} />;
      </div>

      <Divider title="PRESHA" description="Posters created for a music event group using Photoshop" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={posterPhotos} />;
      </div>

      <Divider title="ALBUM ART" description="Created for various artists using Photoshop" />

      <div className="fp-gallery">
        <PhotoAlbum  layout="rows" photos={albumArtPhotos} />;
      </div>

      {/* <div className='backToTop'>
        <a href="/visual-design" className='toTopText'>Back to top</a>
      </div> */}
      </div>
    </>

  )
}