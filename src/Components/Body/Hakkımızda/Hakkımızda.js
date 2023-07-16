import React from "react";
import img from "../../image/fabrresm.png";
import img2 from "../../image/kumaresm.png";
import img3 from "../../image/calısılanülk.png";
export default function Hakkımızda() {
  return (
    <div className="w-9/12 m-auto text-center">
      <p className="text-3xl font-bold mb-5 max-md:mt-8">1985’den günümüze tarihçemiz</p>
      <p className="font-semibold mb-5">
        Can Tekstil; 1985 yılında 350 ton/ay kapasite ile iplik üretmek amacıyla
        kurulmuştur. 1989 yılında Dokuma bölümü, 1993 yılında Boya & Apre ve
        Arıtma bölümü, 1996 yılında Ko-Jenerasyon bölümlerinin kurulması ile
        bugün entegre bir kumaş üreticisi konumuna ulaşmıştır. İstanbul 'da
        kurulu merkez binasında Satış Pazarlama, Muhasebe, İthalat-İhracat ve
        genel yönetim faaliyetleri yürütülmektedir.{" "}
      </p>
      <div className="mb-4">
        <img src={img} alt="#" />
      </div>
      <p className="text-3xl font-bold mb-2">Aylık ortalama 1.000.000 m dokuma kumaş üretiyoruz.</p>
      <p className="font-semibold mb-5">
        Can Tekstil; 1985 yılında 350 ton/ay kapasite ile iplik üretmek amacıyla
        kurulmuştur. 1989 yılında Dokuma bölümü, 1993 yılında Boya & Apre ve
        Arıtma bölümü, 1996 yılında Ko-Jenerasyon bölümlerinin kurulması ile
        bugün entegre bir kumaş üreticisi konumuna ulaşmıştır. İstanbul 'da
        kurulu merkez binasında Satış Pazarlama, Muhasebe, İthalat-İhracat ve
        genel yönetim faaliyetleri yürütülmektedir.
      </p>
      <div className="mb-5">
        <img alt="#" src={img2}></img>
      </div>
      <p className="font-bold text-3xl mb-2">ihracat yaptığımız ülkeler</p>
      <p className="font-semibold mb-5">
        Üretiminin %70’ini ihraç eden Can Tekstil, İstanbul Tekstil ve
        Hammaddeleri İhracatçıları Birliği tarafından her sene düzenlenen
        “İhracatın Liderleri” ödülünü uzun yıllardır aralıksız alarak ülke
        ekonomisine katkısını sürdürmektedir.
      </p>
      <div className="mb-4">
        <img src={img3}></img>
      </div>
    </div>
  );
}
