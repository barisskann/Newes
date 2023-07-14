import React from "react";
import img from "../../image/misyon-vizyon.png";
import logo from "../../image/Logo.PNG";
import misyon from "../../image/vizyon-632x493.jpg";
export default function Misyonvizyon() {
  return (
    <div>
      <div>
        <img className="h-72 w-full" src={img}></img>
      </div>
      <div className="w-9/12 m-auto">
        <div className="flex items-center my-12">
          <div className="flex-1  mr-7">
            <p className="text-5xl font-bold mb-5 text-red-700">Vizyonumuz</p>
            <p className="mb-5 text-xl ">
              Teknoloji çağına ayak uyduran teknik alt yapımız ve inovatif
              üretimi benimseyen yapımızla ülke, sektör ve marka hedeflerimizi
              en üst düzeye çıkarmak önceliğimizdir.
            </p>
            <p className="text-xl">
              Save Tekstil kalitesini daha çok kişiye ulaştırmak ve sektördeki
              yerimizi arttırarak dünya markaları arasında yer almak en önemli
              hedeflerimizdendir.
            </p>
          </div>
          <div className="flex-1 w-full flex justify-center border-black border rounded-full ">
            <div className="my-20">
              <img src={logo}></img>
            </div>
          </div>
        </div>
        <div className="flex items-center mt-8 mb-20">
          <div className="flex-1 mr-8">
            <div>
              <img src={misyon}></img>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-5xl font-bold mb-5 text-red-700">Misyonumuz</p>
            <p className="text-xl">
              <span className="">Değişen</span> ve artan müşteri beklentilerini sektörel ihtiyaçlar
              doğrultusunda karşılayarak en kaliteli ürün ve hizmeti sunmak
              öncelikli misyonumuzdur. Müşteri memnuniyeti ve kalite odaklı
              hizmet anlayışını benimseyen bizler; beklentileri anlayarak hizmet
              sunmakta, hem sektöre hem de ülkemize daha fazla katkıda bulunmak
              için durmaksızın çalışmaktayız.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
