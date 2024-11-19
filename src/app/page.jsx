"use client";
import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { SiLine } from "react-icons/si";
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// アニメーション定義をまとめて追加
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function MainComponent() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 共通のコンテナークラスを作成
  const containerClass = "container mx-auto px-4 sm:px-8 md:px-12 lg:px-40"; // モバイルの余白を4に変更

  return (
    <div className="min-h-screen bg-[#e5e4e0] text-[#2c2d22] font-crimson-text">
      <nav className="fixed w-full z-50 bg-[#938463]/90 backdrop-blur-sm left-0">
        <div className={containerClass}>
          <div className="flex justify-between items-center h-[80px]">
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="hidden md:flex space-x-8 lg:space-x-16">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('concept');
                }}
                href="#concept"
                className="text-base hover:text-gray-300 tracking-wider cursor-pointer"
              >
                Concept
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('features');
                }}
                href="#features"
                className="text-base hover:text-gray-300 tracking-wider cursor-pointer"
              >
                Features
              </a>
              <a
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('menu');
  }}
  href="#menu"
  className="text-base hover:text-gray-300 tracking-wider cursor-pointer"
>
  Menu
</a>
<a
  onClick={(e) => {
    e.preventDefault();
    scrollToSection('access');
  }}
  href="#access"
  className="text-base hover:text-gray-300 tracking-wider cursor-pointer"
>
  Access
</a>
            </div>
            <div className="absolute right-4">
              <a href="https://page.line.me/tkt0252m" target="_blank" rel="noopener noreferrer">
                <button className="border border-white px-4 md:px-8 py-2 text-sm hover:bg-white hover:text-gray-600 transition-colors tracking-wider">
                  Reserve<br />ご予約はこちら
                </button>
              </a>
            </div>
          </div>

          {isMenuOpen && (
            <div className="md:hidden absolute top-[80px] left-0 w-full bg-[#938463] py-4">
              <div className="flex flex-col space-y-4 px-4">
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('concept');
                    setIsMenuOpen(false);
                  }}
                  href="#concept"
                  className="text-white hover:text-gray-300 tracking-wider"
                >
                  Concept
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('features');
                    setIsMenuOpen(false);
                  }}
                  href="#features"
                  className="text-white hover:text-gray-300 tracking-wider"
                >
                  Features
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('menu');
                    setIsMenuOpen(false);
                  }}
                  href="#menu"
                  className="text-white hover:text-gray-300 tracking-wider"
                >
                  Menu
                </a>
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('access');
                    setIsMenuOpen(false);
                  }}
                  href="#access"
                  className="text-white hover:text-gray-300 tracking-wider"
                >
                  Access
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      <style jsx global>{`
  @media (max-width: 768px) {
    .hero-image {
      object-position: center 50% !important;
    }
  }
`}</style>
      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <section className="h-screen relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/top.JPG"
                alt="高級美容室の内装"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                }}
                className="hero-image"
                priority
              />
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
            <div className="absolute inset-0 animate-luxuryFade">
              <Image
                src="/images/tenai.JPG"
                alt="高級な革張りの美容室チェア"
                fill
                sizes="100vw"
                style={{
                  objectFit: 'cover',
                }}
                className="hero-image animate-scaleUp"
                priority
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <div className="text-center text-white space-y-4 md:space-y-6 animate-textFadeIn">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-serif tracking-wider leading-relaxed">
                  30年後も続く、<br />美しい艶髪をあなたに。
                </h1>
                <p className="text-base md:text-lg lg:text-xl tracking-wide leading-relaxed mt-4 md:mt-8">
                  白髪発生率70%抑制、頭皮水分量2倍。<br />
                  北戸田唯一の白髪老化ケアサロン。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerChildren}
            id="concept"
            className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#938463] to-[#7d5c45] text-[#e5e4e0]"
          >
            <div className={containerClass}>
              <div className="flex flex-col md:flex-row items-start gap-16">
                <motion.div 
                  variants={fadeInUp}
                  className="w-full md:w-1/2"
                >
                  <img
                    src="/images/tenai2.JPG"
                    alt="美容室のコンセプトイメージ"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                  />
                </motion.div>
                <motion.div 
                  variants={staggerChildren}
                  className="w-full md:w-1/2 pt-8 md:pt-16"
                >
                  <motion.div variants={fadeInUp} className="text-sm tracking-widest mb-4">01</motion.div>
                  <motion.h2 variants={fadeInUp} className="text-4xl font-serif mb-12">Concept</motion.h2>
                  <div className="space-y-6">
                    {[
                      "ここは、40代以降の女性が『10年後の自分の髪と頭皮』を守るための場所。",
                      "白髪発生率を70%減少させる独自技術と、施術後に髪の水分量を2倍にするケアで、",
                      "髪と頭皮の健康を保ちます。",
                      "1日5名限定の完全予約制で、",
                      "贅沢な時間と空間を提供し、髪と心を美しく整えます。"
                    ].map((text, index) => (
                      <motion.p
                        key={index}
                        variants={fadeInUp}
                        className="text-base md:text-lg leading-relaxed"
                      >
                        {text}
                      </motion.p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true, 
              margin: "-20%",
              amount: 0.2
            }}
            variants={staggerChildren}
            id="features"
            className="py-16 sm:py-24 md:py-32 lg:py-40 bg-[#e5e4e0] text-[#2c2d22]"
          >
            <div className="w-full max-w-4xl mx-auto">
              <motion.div variants={fadeInUp} className="text-sm tracking-[0.2em] mb-4 text-center">02</motion.div>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-serif mb-16 md:mb-20 text-center">Features</motion.h2>
              <motion.ul variants={staggerChildren} className="space-y-12 md:space-y-16">
                {[
                  {
                    number: "01",
                    title: "未来の髪と頭皮を守るケア",
                    description: "「白髪発生率70%抑制、10年後も美しい髪へ」\n白髪や頭皮の老化に特化した独自のケアで、髪の健康を根本からサポート。40代以降の女性が抱える髪の悩みを、科学的なアプローチで解決します。"
                  },
                  {
                    number: "02",
                    title: "マナス10歳の艶髪を実現",
                    description: "「頭皮の水分量2倍、自然なボリュームアップ」\n髪に潤いとハリを与えることで、若々しい艶とボリュームを取り戻します。施術後の色持ちは2倍、美しさが続く仕上がりをお約束します。"
                  },
                  {
                    number: "03",
                    title: "あなただけの贅沢空間",
                    description: "「忙しい日常を離れる、特別なひととき」\n完全予約制で、施術中はあなただけのプライベート空間。家庭や仕事から解放され、心からリラックスできる時間をご提供します。"
                  },
                  {
                    number: "04",
                    title: "敏感肌にも安心の施術",
                    description: "「薬害70%カット、刺激を抑えた優しいケア」\n カラーリングで刺激を感じやすい方にも安心な薬剤を使用。髪と頭皮に優しい施術で、美しさと安心感を両立します。"
                  },
                  {
                    number: "05",
                    title: "同世代だからわかる安心感",
                    description: "「40代以降の悩みに特化したマンツーマンサポート」\n40代以降の女性特有の髪の悩みに寄り添い、経験豊富な美容師が1対1で対応。細やかなカウンセリングと施術で、あなたに最適なケアを提案します。"
                  }
                ].map((feature, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInScale}
                    className="flex flex-col md:flex-row items-start hover:bg-[#938463] hover:text-[#e5e4e0] p-6 rounded-lg transition-all duration-500"
                    whileHover={{
                      scale: 1.02,
                      y: -5,
                      transition: { 
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1]
                      }
                    }}
                  >
                    <span className="text-xl md:text-2xl mr-4 font-bold mb-4 md:mb-0">{feature.number}.</span>
                    <div>
                      <h3 className="text-xl md:text-2xl mb-4 font-bold">{feature.title}</h3>
                      <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                        {feature.description}
                      </p>
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.section>
        </div>
      </div>

      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <section id="menu" className="py-16 sm:py-24 md:py-32 lg:py-40 bg-[#938463]/10 text-[#2c2d22]">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
              <div className="text-sm tracking-[0.2em] mb-4 text-center">03</div>
              <h2 className="text-3xl md:text-4xl font-serif mb-16 md:mb-20 text-center">Menu</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16">
                <div className="pb-8 md:pb-0">
                  <h3 className="text-xl md:text-2xl mb-8 md:mb-8 border-b pb-2">Cut Menu</h3>
                  <div className="space-y-8 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">カット</span>
                      <span className="text-base md:text-lg ml-8">¥4,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">前髪カット</span>
                      <span className="text-base md:text-lg ml-8">¥1,200</span>
                    </div>
                  </div>
                </div>
                <div className="pb-8 md:pb-0">
                  <h3 className="text-xl md:text-2xl mb-8 md:mb-8 border-b pb-2">Treatment Menu</h3>
                  <div className="space-y-8 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">オッジオット<br className="md:hidden"/>(ベーシック)</span>
                      <span className="text-base md:text-lg ml-8">¥4,700</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">オッジオット<br className="md:hidden"/>(プレミアム)</span>
                      <span className="text-base md:text-lg ml-8">¥8,200</span>
                    </div>
                  </div>
                </div>
                <div className="pb-8 md:pb-0">
                  <h3 className="text-xl md:text-2xl mb-8 md:mb-8 border-b pb-2">Color Menu</h3>
                  <div className="space-y-8 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">カラー</span>
                      <span className="text-base md:text-lg ml-8">¥6,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">イルミナカラー</span>
                      <span className="text-base md:text-lg ml-8">¥8,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">リタッチ</span>
                      <span className="text-base md:text-lg ml-8">¥4,700</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl mb-8 md:mb-8 border-b pb-2">Perm Menu</h3>
                  <div className="space-y-8 md:space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">パーマ</span>
                      <span className="text-base md:text-lg ml-8">¥6,200</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg">クリープパーマ</span>
                      <span className="text-base md:text-lg ml-8">¥8,200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: true, 
              amount: 0.2  // 要素の20%が見えたら開始
            }}
            variants={staggerChildren}
            id="access"
            className="py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-[#7d5c45] to-[#2c2d22] text-[#e5e4e0]"
          >
            <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
              <motion.div 
                variants={fadeInUp} 
                className="text-sm tracking-[0.2em] mb-4 text-center"
              >
                04
              </motion.div>
              <motion.h2 
                variants={fadeInUp} 
                className="text-3xl md:text-4xl font-serif mb-16 md:mb-20 text-center"
              >
                Access
              </motion.h2>
              <div className="flex flex-col md:flex-row gap-12 md:gap-16">
                <motion.div 
                  variants={fadeInLeft}
                  className="w-full md:w-1/2"
                >
                  <div className="space-y-8 md:space-y-6">
                    <motion.div variants={fadeInUp}>
                      <p className="text-xl md:text-2xl mb-2">〒335-0021</p>
                      <p className="text-xl md:text-2xl mb-8">埼玉県戸田市新曽1648</p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <p className="text-xl md:text-2xl mb-2">Open: 9:00 - 19:00</p>
                      <p className="text-base md:text-lg text-gray-400 mb-8">
                        最終受付：カット 19:00 / パーマ 18:00
                      </p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <p className="text-xl md:text-2xl mb-2">Close: 火曜・水曜</p>
                      <p className="text-xl md:text-2xl">Tel: 048-433-6467</p>
                    </motion.div>
                  </div>
                </motion.div>
                <motion.div 
                  variants={fadeInRight}
                  className="w-full md:w-1/2"
                >
                  <motion.div 
                    variants={fadeInScale}
                    className="rounded-lg overflow-hidden shadow-lg"
                  >
                    <img
                      src="/images/map.png"
                      alt="antiers店舗地図"
                      className="w-full h-auto"
                    />
                  </motion.div>
                  <motion.a
                    variants={fadeInUp}
                    href="https://www.google.com/maps/..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-[#a8e6cf] hover:text-[#8fd3b6] transition-colors text-base md:text-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View on Google Map
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

      <div className="bg-[#e5e4e0] px-4 sm:px-8 md:px-12 lg:px-40">
        <div className="max-w-[1920px] mx-auto">
          <footer className="py-16 bg-[#2c2d22] text-[#e5e4e0]">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                <div>
                  <h3 className="text-2xl font-serif mb-6">antiers</h3>
                  <div className="space-y-3">
                    <p className="text-base md:text-lg">Open: 9:00 - 19:00</p>
                    <p className="text-sm md:text-base text-gray-400">
                      最終受付：カット 19:00 / パーマ 18:00
                    </p>
                    <p className="text-base md:text-lg">Close: 月曜 / 第一、第三火曜</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-6">Access</h3>
                  <div className="space-y-3">
                    <p className="text-base md:text-lg">〒335-0021</p>
                    <p className="text-base md:text-lg">埼玉県戸田市新曽1648</p>
                    <p className="text-base md:text-lg">Tel: 058-260-8220</p>
                    <a
                      href="https://www.google.co.jp/maps/..."
                      className="text-[#a8e6cf] hover:underline inline-block mt-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Google Map
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-serif mb-6">Follow SNS</h3>
                  <div className="flex space-x-6">
                    <a 
                      href="https://www.instagram.com/antiers_kitakitoda" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-3xl hover:text-[#a8e6cf] transition-colors"
                    >
                      <FaInstagram />
                    </a>
                    <a 
                      href="https://page.line.me/tkt0252m" 
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-3xl hover:text-[#a8e6cf] transition-colors"
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
        </div>
      </div>

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

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;          

