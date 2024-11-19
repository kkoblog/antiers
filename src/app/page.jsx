"use client";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import Image from 'next/image'

function MainComponent() {
  return (
    <div className="min-h-screen bg-[#e5e4e0] text-[#2c2d22] font-crimson-text">
      <nav className="fixed w-full z-50 bg-[#938463]/90 backdrop-blur-sm left-0">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex justify-between items-center h-[80px]">
            <div className="flex space-x-16">
              <a
                href="#concept"
                className="text-base hover:text-gray-300 tracking-wider"
              >
                Concept
              </a>
              <a
                href="#features"
                className="text-base hover:text-gray-300 tracking-wider"
              >
                Features
              </a>
              <a
                href="#menu"
                className="text-base hover:text-gray-300 tracking-wider"
              >
                Menu
              </a>
              <a
                href="#access"
                className="text-base hover:text-gray-300 tracking-wider"
              >
                Access
              </a>
            </div>
            <div className="absolute right-4">
              <a href="https://page.line.me/tkt0252m" target="_blank" rel="noopener noreferrer">
                <button className="border border-white px-8 py-2 text-sm hover:bg-white hover:text-gray-600 transition-colors tracking-wider">
                  Reserve
                  <br />
                  ご予約はこちら
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/top.JPG"
            alt="高級美容室の内装"
            width={1920}
            height={1080}
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute inset-0 animate-luxuryFade">
          <img
            src="/images/tenai.JPG"
            alt="高級な革張りの美容室チェア"
            className="w-full h-full object-cover animate-scaleUp"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white space-y-6 animate-textFadeIn">
            <h1 className="text-4xl md:text-6xl font-serif tracking-wider leading-relaxed">
              30年後も続く、<br />美しい艶髪をあなたに。
            </h1>
            <p className="text-lg md:text-xl tracking-wide leading-relaxed mt-8">
              白髪発生率70%抑制、頭皮水分量2倍。<br />
              北戸田唯一の白髪老化ケアサロン。
            </p>
          </div>
        </div>
      </section>

      <section id="concept" className="py-32 bg-gradient-to-b from-[#938463] to-[#7d5c45] flex items-center text-[#e5e4e0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2">
              <img
                src="/images/tenai2.JPG"
                alt="美容室のコンセプトイメージ"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0">
              <div className="text-sm tracking-widest mb-4">01</div>
              <h2 className="text-4xl font-serif mb-8">Concept</h2>
              <div className="space-y-6 text-gray-300">
                <p>ここは、40代以降の女性が『10年後の自分の髪と頭皮』を守るための場所。</p>
                <p>
                白髪発生率を70%減少させる独自技術と、施術後に髪の水分量を2倍にするケアで、
                </p>
                <p>髪と頭皮の健康を保ちます。</p>
                <p>1日5名限定の完全予約制で、</p>
                <p>贅沢な時間と空間を提供し、髪と心を美しく整えます。</p>
            
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#e5e4e0] flex items-center text-[#2c2d22]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-sm tracking-widest mb-6 text-[#2c2d22]">
              02
            </div>
            <h2 className="text-4xl font-serif mb-12">Features</h2>
            <ul className="space-y-16">
              <li className="flex items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-300">
                <span className="text-[#2c2d22] mr-4 text-2xl font-bold">01.</span>
                <div>
                  <h3 className="text-2xl mb-4 font-bold">未来の髪と頭皮を守るケア</h3>
                  <p className="text-[#2c2d22] leading-relaxed">
                    「白髪発生率70%抑制、10年後も美しい髪へ」<br />
                    白髪や頭皮の老化に特化した独自のケアで、髪の健康を根本からサポート。40代以降の女性が抱える髪の悩みを、科学的なアプローチで解決します。
                  </p>
                </div>
              </li>
              <li className="flex items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-300">
                <span className="text-[#2c2d22] mr-4 text-2xl font-bold">02.</span>
                <div>
                  <h3 className="text-2xl mb-4 font-bold">マナス10歳の艶髪を実現</h3>
                  <p className="text-[#2c2d22] leading-relaxed">
                    「頭皮の水分量2倍、自然なボリュームアップ」<br />
                    髪に潤いとハリを与えることで、若々しい艶とボリュームを取り戻します。施術後の色持ちは2倍、美しさが続く仕上がりをお約束します。
                  </p>
                </div>
              </li>
              <li className="flex items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-300">
                <span className="text-[#2c2d22] mr-4 text-2xl font-bold">03.</span>
                <div>
                  <h3 className="text-2xl mb-4 font-bold">あなただけの贅沢空間</h3>
                  <p className="text-[#2c2d22] leading-relaxed">
                    「忙しい日常を離れる、特別なひととき」<br />
                    完全予約制で、施術中はあなただけのプライベート空間。家庭や仕事から解放され、心からリラックスできる時間をご提供します。
                  </p>
                </div>
              </li>
              <li className="flex items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-300">
                <span className="text-[#2c2d22] mr-4 text-2xl font-bold">04.</span>
                <div>
                  <h3 className="text-2xl mb-4 font-bold">敏感肌にも安心の施術</h3>
                  <p className="text-[#2c2d22] leading-relaxed">
                    「薬害70%カット、刺激を抑えた優しいケア」<br />
                    カラーリングで刺激を感じやすい方にも安心な薬剤を使用。髪と頭皮に優しい施術で、美しさと安心感を両立します。
                  </p>
                </div>
              </li>
              <li className="flex items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-300">
                <span className="text-[#2c2d22] mr-4 text-2xl font-bold">05.</span>
                <div>
                  <h3 className="text-2xl mb-4 font-bold">同世代だからわかる安心感</h3>
                  <p className="text-[#2c2d22] leading-relaxed">
                    「40代以降の悩みに特化したマンツーマンサポート」<br />
                    40代以降の女性特有の髪の悩みに寄り添い、経験豊富な美容師が1対1で対応。細やかなカウンセリングと施術であなたに最適なケアを提案します。
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-32 bg-[#938463]/10 text-[#2c2d22]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-sm tracking-widest mb-6 text-center">03</div>
          <h2 className="text-4xl font-serif mb-20 text-center">Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl mb-8 border-b pb-2">Cut Menu</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>カット</span>
                  <span>¥4,200</span>
                </div>
                <div className="flex justify-between">
                  <span>前髪カット</span>
                  <span>¥1,200</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-8 border-b pb-2">Treatment Menu</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>オッジオット(ベーシック)</span>
                  <span>¥4,700</span>
                </div>
                <div className="flex justify-between">
                  <span>オッジオット(プレミアム)</span>
                  <span>¥8,200</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-8 border-b border-[#8C715A] pb-2">Color Menu</h3>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>カラー</span>
                  <span>¥6,200</span>
                </div>
                <div className="flex justify-between">
                  <span>イルミナカラー</span>
                  <span>¥8,200</span>
                </div>
                <div className="flex justify-between">
                  <span>リタッチ</span>
                  <span>¥4,700</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl mb-8 border-b border-[#8C715A] pb-2">Perm Menu</h3>
              <div className="space-y-6">
                <div className="flex justify-between">
                  <span>パーマ</span>
                  <span>¥6,200</span>
                </div>
                <div className="flex justify-between">
                  <span>クリープパーマ</span>
                  <span>¥8,200</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-b from-[#7d5c45] to-[#2c2d22] text-[#e5e4e0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="w-full max-w-4xl mx-auto">
            <div className="text-sm tracking-widest mb-6">04</div>
            <h2 className="text-4xl font-serif mb-12">Access</h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="w-full md:w-1/2">
                <div>
                  <p className="text-xl mb-2">〒335-0021</p>
                  <p className="text-xl mb-8">埼玉県戸田市新曽1648</p>
                  <p className="text-xl mb-2">Open: 9:00 - 19:00</p>
                  <p className="text-base text-gray-400 mb-8">
                    最終受付：カット 19:00 / パーマ 18:00
                  </p>
                  <p className="text-xl mb-2">Close: 火曜・水曜</p>
                  <p className="text-xl">Tel: 048-433-6467</p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <img
                  src="/images/map.png"
                  alt="antiers店舗地図"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#2c2d22] py-16 text-[#e5e4e0]">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-serif mb-4">antiers</h3>
              <div className="space-y-2">
                <p>Open: 9:00 - 19:00</p>
                <p>最終受付：カット 19:00 / パーマ 18:00</p>
                <p>Close: 月曜 / 第一、第三火曜</p>
              </div>
            </div>
            <div className="mb-8 md:mb-0">
              <h3 className="text-xl mb-4">Access</h3>
              <div className="space-y-2">
                <p>〒335-0021</p>
                <p>埼玉県戸田市新曽1648</p>
                <p>Tel: 058-260-8220</p>
                <a
                  href="https://www.google.co.jp/maps/place/%E3%80%92335-0021+%E5%9F%BC%E7%8E%89%E7%9C%8C%E6%88%B8%E7%94%B0%E5%B8%82%E6%96%B0%E6%9B%BD%EF%BC%91%EF%BC%96%EF%BC%94%EF%BC%98/@35.825188,139.6616093,18.43z/data=!4m6!3m5!1s0x6018eb1ce572d50d:0x7a42ad8a7c50abc7!8m2!3d35.8248766!4d139.6623247!16s%2Fg%2F12hxxs4cx?hl=ja&entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D"
                  className="text-[#a8e6cf] hover:underline"
                >
                  View on Google Map
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl mb-4">Follow SNS</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/antiers_kitakitoda" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-[#a8e6cf] transition-colors"
                >
                  <FaInstagram />
                </a>
                <a 
                  href="https://page.line.me/tkt0252m" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-2xl hover:text-[#a8e6cf] transition-colors"
                >
                  <SiLine />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>&copy; 2024 antiers. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        section {
          animation: fadeIn 1s ease-out;
        }

        @keyframes softFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        .hover-float:hover {
          animation: softFloat 2s ease-in-out infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 4s ease-in-out forwards;
        }

        @keyframes luxuryFade {
          0% { opacity: 0; }
          30% { opacity: 0; }
          70% { opacity: 1; }
          100% { opacity: 1; }
        }

        @keyframes scaleUp {
          0% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }

        @keyframes scaleDown {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .animate-luxuryFade {
          animation: luxuryFade 8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-scaleUp {
          animation: scaleUp 8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-scaleDown {
          animation: scaleDown 8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes textFadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          30% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-textFadeIn {
          animation: textFadeIn 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;